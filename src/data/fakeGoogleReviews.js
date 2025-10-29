// Static fallback of Google-like reviews in French.
// Used when Places API is unavailable or disabled.

export const FAKE_GOOGLE_REVIEWS = {
  name: "Clinique Dentaire DABIA",
  // Average from the ratings below (all 5)
  rating: 5,
  reviews: [
    {
      author_name: "Fatou Wade",
      profile_photo_url: "",
      rating: 5,
      text:
        "J’ai eu une excellente expérience à la Clinique Dentaire Dabia. Les soins sont réalisés avec beaucoup de douceur et de précision, ce qui met en confiance dès le premier rendez-vous. Je recommande vivement cette clinique à toute personne à la recherche de soins dentaires de qualité.",
      relative_time: "il y a 3 semaines",
    },
    {
      author_name: "salymatou diallo",
      profile_photo_url: "",
      rating: 5,
      text:
        "J’ai eu une excellente expérience à la Clinique Dentaire Dabia 🦷 Le personnel est très accueillant, calme et professionnel. L’ambiance est propre, relaxante et apaisante, avec une belle musique d’attente 🎶 Et surtout, la dame qui m’a traitée était très pointue dans les détails, douce et à l’écoute — exactement ce qu’il faut pour un soin esthétique réussi. Je recommande cette clinique à 100% !",
      relative_time: "il y a une semaine",
    },
    {
      author_name: "Mouhamed Faye",
      profile_photo_url: "",
      rating: 5,
      text:
        "Je n’ai pas regretté d'avoir fréquenté cette clinique. La manière dont ils accueillent même peut réduire ta douleur. Les soins on en parle pas. Ils sont excellents.",
      relative_time: "il y a un mois",
    },
    {
      author_name: "Moustapha Fall",
      profile_photo_url: "",
      rating: 5,
      text:
        "Accueil chaleureux !\nDr SAO Fatoumata est une perle rare, elle est très douce avec les gens.\nAttente un peu longue, mais le café est bon.",
      relative_time: "Modifié il y a 2 semaines",
    },
  ],
};

FAKE_GOOGLE_REVIEWS.user_ratings_total = FAKE_GOOGLE_REVIEWS.reviews.length;

