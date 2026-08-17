import { useEffect, useState } from "react";
import ReviewCTA from "./ReviewCTA";
import SectionTitle from "./SectionTitle";

export default function TestimonialsCarousel() {
  const [reviews, setReviews] = useState(null);
  const [placeInfo, setPlaceInfo] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/google-reviews")
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        setPlaceInfo(
          Number.isFinite(data.rating)
            ? { name: data.name, rating: data.rating, total: data.user_ratings_total }
            : null
        );
        setReviews(
          (data.reviews || []).map((review) => ({
            name: review.author_name,
            text: review.text,
            rating: review.rating,
            relative: review.relative_time,
          }))
        );
      })
      .catch(() => {
        if (!cancelled) {
          setPlaceInfo(null);
          setReviews([]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleReviews = Array.isArray(reviews) ? reviews.slice(0, 3) : [];

  return (
    <section className="patient-voices section-pad" aria-labelledby="patient-voices-title">
      <div className="studio-container">
        <div className="patient-voices__head">
          <SectionTitle
            id="patient-voices-title"
            title="La confiance, racontée par nos patients."
            subtitle="Avis Google"
            center={false}
          />
          <div className="patient-voices__summary">
            {placeInfo && (
              <div className="patient-voices__rating" aria-label={`${placeInfo.rating} étoiles sur 5, ${placeInfo.total || 0} avis Google`}>
                <div>
                  <strong>{placeInfo.rating}</strong>
                  <span>/ 5</span>
                </div>
                <p>
                  <span className="patient-voices__rating-stars" aria-hidden="true">★★★★★</span>
                  <small>{placeInfo.total ? `${placeInfo.total} avis sur Google` : "Avis Google"}</small>
                </p>
              </div>
            )}
            <ReviewCTA className="patient-voices__cta" />
          </div>
        </div>

        {reviews === null && (
          <p className="patient-voices__loading" role="status">Chargement des avis récents…</p>
        )}

        {visibleReviews.length > 0 && (
          <div className="patient-voices__layout">
            <article className="patient-voice patient-voice--featured">
              <span className="patient-voice__quote" aria-hidden="true">“</span>
              <p className="patient-voice__stars" aria-label={`${Math.round(visibleReviews[0].rating || 0)} étoiles sur 5`}>
                {"★".repeat(Math.round(visibleReviews[0].rating || 0))}
              </p>
              <blockquote>{visibleReviews[0].text}</blockquote>
              <footer>
                <span className="patient-voice__initial" aria-hidden="true">{visibleReviews[0].name?.trim().charAt(0) || "D"}</span>
                <span>
                  <strong>{visibleReviews[0].name}</strong>
                  <small>{visibleReviews[0].relative ? `Avis Google · ${visibleReviews[0].relative}` : "Avis Google"}</small>
                </span>
              </footer>
            </article>

            <div className="patient-voices__secondary">
              {visibleReviews.slice(1).map((review, index) => (
                <article className="patient-voice patient-voice--secondary" key={`${review.name}-${index}`}>
                  <div className="patient-voice__meta">
                    <p className="patient-voice__stars" aria-label={`${Math.round(review.rating || 0)} étoiles sur 5`}>
                      {"★".repeat(Math.round(review.rating || 0))}
                    </p>
                    <span aria-hidden="true">0{index + 2}</span>
                  </div>
                  <blockquote>{review.text}</blockquote>
                  <footer>
                    <span className="patient-voice__initial" aria-hidden="true">{review.name?.trim().charAt(0) || "D"}</span>
                    <span>
                      <strong>{review.name}</strong>
                      <small>{review.relative ? `Avis Google · ${review.relative}` : "Avis Google"}</small>
                    </span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        )}

        {Array.isArray(reviews) && reviews.length === 0 && (
          <p className="patient-voices__empty">Les avis Google seront affichés ici dès qu’ils sont disponibles.</p>
        )}
      </div>
    </section>
  );
}
