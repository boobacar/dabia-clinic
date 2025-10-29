// api/google-reviews.js
import { FAKE_GOOGLE_REVIEWS } from "../src/data/fakeGoogleReviews.js";

export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;
    const MIN_RATING = Number(process.env.REVIEWS_MIN_RATING || 4);
    const USE_FAKE = process.env.USE_FAKE_REVIEWS === "1" ||
      req?.query?.fake === "1" || req?.query?.fallback === "1";

    const serveFake = () => {
      const filtered = (FAKE_GOOGLE_REVIEWS.reviews || [])
        .filter(
          (rv) => (rv.rating || 0) >= MIN_RATING && (rv.text || "").trim().length > 10
        )
        .slice(0, 10);
      const avg =
        filtered.reduce((s, r) => s + (r.rating || 0), 0) /
          (filtered.length || 1);
      res.setHeader(
        "Cache-Control",
        "s-maxage=43200, stale-while-revalidate=86400"
      );
      res.setHeader("x-google-reviews-fallback", "1");
      return res.status(200).json({
        name: FAKE_GOOGLE_REVIEWS.name,
        rating: Number.isFinite(avg) ? Math.round(avg * 10) / 10 : 5,
        user_ratings_total: filtered.length,
        reviews: filtered.map((rv) => ({
          author_name: rv.author_name,
          profile_photo_url: rv.profile_photo_url,
          rating: rv.rating,
          text: rv.text,
          relative_time: rv.relative_time,
        })),
      });
    };

    if (USE_FAKE) {
      return serveFake();
    }

    if (!API_KEY || !PLACE_ID) {
      console.error("[google-reviews] Missing env (serving fallback)", {
        hasKey: !!API_KEY,
        hasPlace: !!PLACE_ID,
      });
      return serveFake();
    }

    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", PLACE_ID);
    url.searchParams.set("fields", "name,rating,user_ratings_total,reviews");
    url.searchParams.set("language", "fr");
    url.searchParams.set("key", API_KEY);

    const r = await fetch(url.toString());
    const data = await r.json();

    if (data.status !== "OK") {
      console.error("[google-reviews] Places API error (serving fallback):", {
        status: data.status,
        message: data.error_message,
      });
      return serveFake();
    }

    const reviews = (data.result?.reviews || [])
      .filter(
        (rv) =>
          (rv.rating || 0) >= MIN_RATING && (rv.text || "").trim().length > 10
      )
      .sort((a, b) => (a.time || 0) - (b.time || 0))
      .reverse()
      .slice(0, 10)
      .map((rv) => ({
        author_name: rv.author_name,
        profile_photo_url: rv.profile_photo_url,
        rating: rv.rating,
        text: rv.text,
        relative_time: rv.relative_time_description,
        time: rv.time,
      }));

    res.setHeader(
      "Cache-Control",
      "s-maxage=43200, stale-while-revalidate=86400"
    );
    return res.status(200).json({
      name: data.result?.name,
      rating: data.result?.rating,
      user_ratings_total: data.result?.user_ratings_total,
      reviews,
    });
  } catch (e) {
    console.error("[google-reviews] Unhandled error (serving fallback):", e);
    const USE_STRICT = process.env.REVIEWS_STRICT_ERRORS === "1";
    if (USE_STRICT) {
      return res
        .status(500)
        .json({ error: "Unhandled error", detail: e?.message });
    }
    return serveFake();
  }
}
