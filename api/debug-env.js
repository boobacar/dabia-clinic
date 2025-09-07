export default function handler(req, res) {
  res.status(200).json({
    saw_GOOGLE_MAPS_API_KEY: !!process.env.GOOGLE_MAPS_API_KEY,
    saw_GOOGLE_PLACE_ID: !!process.env.GOOGLE_PLACE_ID,
    REVIEWS_MIN_RATING: process.env.REVIEWS_MIN_RATING || null,
    // pour vérifier que la requête n'est PAS capturée par le fallback SPA
    ok: true,
  });
}
