import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ReviewCTA from "./ReviewCTA";
import SectionTitle from "./SectionTitle";
import { FAKE_GOOGLE_REVIEWS } from "../data/fakeGoogleReviews";
// ... (rest of imports/helpers)

const Star = ({ filled }) => (
  <svg
    viewBox="0 0 20 20"
    className={`w-4 h-4 ${filled ? "fill-yellow-400" : "fill-gray-300"}`}
  >
    <path d="M10 15.27l5.18 3.04-1.64-5.81L18 8.63l-6-.2L10 3 8 8.43l-6 .2 4.46 3.87L4.82 18.3z" />
  </svg>
);
const Stars = ({ rating = 0 }) => {
  const n = Math.round(rating);
  return (
    <div className="flex gap-1" aria-label={`${n} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < n} />
      ))}
    </div>
  );
};

// Simple avatar circle: photo if present, otherwise initials
const initialsOf = (name = "") => {
  const parts = name.trim().split(/\s+/);
  if (!parts.length) return "?";
  const first = parts[0][0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

const Avatar = ({ name, photo }) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    );
  }
  return (
    <div
      aria-label={name}
      className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 flex items-center justify-center font-semibold"
    >
      {initialsOf(name)}
    </div>
  );
};

const TestimonialsCarousel = () => {
  const [reviews, setReviews] = useState(null); // null = en chargement, [] = aucun
  const [placeInfo, setPlaceInfo] = useState(null);

  useEffect(() => {
    // Always use local static reviews — no API calls
    const avg =
      FAKE_GOOGLE_REVIEWS.reviews.reduce((s, r) => s + (r.rating || 0), 0) /
      (FAKE_GOOGLE_REVIEWS.reviews.length || 1);
    setPlaceInfo({
      name: FAKE_GOOGLE_REVIEWS.name,
      rating: Number.isFinite(avg) ? Math.round(avg * 10) / 10 : 5,
      total: FAKE_GOOGLE_REVIEWS.reviews.length,
    });
    setReviews(
      FAKE_GOOGLE_REVIEWS.reviews.map((rv) => ({
        nom: rv.author_name,
        photo: rv.profile_photo_url,
        texte: rv.text,
        rating: rv.rating,
        relative: rv.relative_time,
      }))
    );
  }, []);

  return (
    <motion.section
      className="py-16 bg-gray-100 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle
        title="Témoignages"
        subtitle="Avis Patients"
        className="mb-8"
      />

      {placeInfo && (
        <p className="text-sm text-gray-600 mb-6">
          {placeInfo.name} — Note {placeInfo.rating} / 5 (avis Google)
        </p>
      )}
      {/* no remote errors in static mode */}

      {/* Chargement */}
      {reviews === null && (
        <motion.div
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
          }}
        >
          <div className="animate-pulse bg-white shadow-md p-10 rounded-lg">
            Chargement des avis…
          </div>
        </motion.div>
      )}

      {/* Carrousel d’avis */}
      {Array.isArray(reviews) && reviews.length > 0 && (
        <motion.div
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            loop
          >
            {reviews.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white shadow-md p-6 rounded-lg text-gray-700 flex flex-col items-center space-y-3">
                  <Avatar name={t.nom} photo={t.photo} />
                  <Stars rating={t.rating} />
                  <p className="text-lg italic text-center">“{t.texte}”</p>
                  <p className="font-semibold text-dabiaYellow">{t.nom}</p>
                  {t.relative && (
                    <span className="text-xs text-gray-500">{t.relative}</span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}

      {/* Aucun avis récupéré → affiche juste le CTA Google */}
      {Array.isArray(reviews) && reviews.length === 0 && (
        <p className="text-gray-600 mb-6">
          Soyez le premier à laisser un avis !
        </p>
      )}

      <ReviewCTA />
    </motion.section>
  );
};

export default TestimonialsCarousel;
