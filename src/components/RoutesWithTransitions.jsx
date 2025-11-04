import React, { useEffect, useState, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// lazy routes (reuse same imports as App.jsx)
const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const RendezVous = lazy(() => import("../pages/RendezVous"));
const Personnel = lazy(() => import("../pages/Personnel"));
const CompetenceDetail = lazy(() => import("../pages/CompetenceDetail"));
const Competences = lazy(() => import("../pages/Competences"));
const Assurances = lazy(() => import("../pages/Assurances"));
const PostVisite = lazy(() => import("../pages/PostVisite"));
const ZoneEnfants = lazy(() => import("../pages/ZoneEnfants"));
const Rejoindre = lazy(() => import("../pages/Rejoindre"));
const Technologie = lazy(() => import("../pages/Technologie"));
const TechnologieDetail = lazy(() => import("../pages/TechnologieDetail"));
const APropos = lazy(() => import("../pages/APropos"));
const DentisteDakar = lazy(() => import("../pages/DentisteDakar"));
const CabinetDentaireDakar = lazy(() => import("../pages/CabinetDentaireDakar"));
const LocaliteLiberte6 = lazy(() => import("../pages/LocaliteLiberte6"));
const LocaliteParcelles = lazy(() => import("../pages/LocaliteParcelles"));
const UrgenceDentaire = lazy(() => import("../pages/UrgenceDentaire"));
const LocaliteAlmadies = lazy(() => import("../pages/localites/Almadies"));
const LocaliteMermoz = lazy(() => import("../pages/localites/Mermoz"));
const LocalitePointE = lazy(() => import("../pages/localites/PointE"));
const LocaliteSacreCoeur = lazy(() => import("../pages/localites/SacreCoeur"));
const LocaliteYoff = lazy(() => import("../pages/localites/Yoff"));
const LocaliteHlmGrandYoff = lazy(() => import("../pages/localites/HlmGrandYoff"));
const LocaliteScatUrbam = lazy(() => import("../pages/localites/ScatUrbam"));
const LocaliteNgor = lazy(() => import("../pages/localites/Ngor"));
const LocaliteOuakam = lazy(() => import("../pages/localites/Ouakam"));
const LocalitePatteDOie = lazy(() => import("../pages/localites/PatteDOie"));
const LocaliteFann = lazy(() => import("../pages/localites/Fann"));
const LocalitePlateau = lazy(() => import("../pages/localites/Plateau"));
const Galerie = lazy(() => import("../pages/Galerie"));

export default function RoutesWithTransitions() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  // Only run a view transition when the PATHNAME changes.
  // Ignore search/hash updates to avoid unnecessary remounts and input/click freezes.
  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;
    if ('startViewTransition' in document) {
      // @ts-ignore
      document.startViewTransition(() => setDisplayLocation(location));
    } else {
      setDisplayLocation(location);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Routes location={displayLocation} key={displayLocation.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/apropos" element={<APropos />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/rendez-vous" element={<RendezVous />} />
      <Route path="/dentiste-dakar" element={<DentisteDakar />} />
      <Route path="/cabinet-dentaire-dakar" element={<CabinetDentaireDakar />} />
      <Route path="/personnel" element={<Personnel />} />
      <Route path="/competences/:slug" element={<CompetenceDetail />} />
      <Route path="/all-competences" element={<Competences />} />
      <Route path="/infos/assurances" element={<Assurances />} />
      <Route path="/infos/post-visite" element={<PostVisite />} />
      <Route path="/infos/enfants" element={<ZoneEnfants />} />
      <Route path="/rejoindre" element={<Rejoindre />} />
      <Route path="/infos/technologie" element={<Technologie />} />
      <Route path="/infos/technologie/:slug" element={<TechnologieDetail />} />
      <Route path="/cabinet-dentaire-liberte-6" element={<LocaliteLiberte6 />} />
      <Route path="/clinique-dentaire-parcelles-assainies" element={<LocaliteParcelles />} />
      <Route path="/urgence-dentaire-dakar" element={<UrgenceDentaire />} />
      <Route path="/cabinet-dentaire-almadies" element={<LocaliteAlmadies />} />
      <Route path="/cabinet-dentaire-mermoz" element={<LocaliteMermoz />} />
      <Route path="/cabinet-dentaire-point-e" element={<LocalitePointE />} />
      <Route path="/cabinet-dentaire-sacre-coeur" element={<LocaliteSacreCoeur />} />
      <Route path="/cabinet-dentaire-yoff" element={<LocaliteYoff />} />
      <Route path="/cabinet-dentaire-hlm-grand-yoff" element={<LocaliteHlmGrandYoff />} />
      <Route path="/cabinet-dentaire-scat-urbam" element={<LocaliteScatUrbam />} />
      <Route path="/cabinet-dentaire-ngor" element={<LocaliteNgor />} />
      <Route path="/cabinet-dentaire-ouakam" element={<LocaliteOuakam />} />
      <Route path="/cabinet-dentaire-patte-d-oie" element={<LocalitePatteDOie />} />
      <Route path="/cabinet-dentaire-fann" element={<LocaliteFann />} />
      <Route path="/cabinet-dentaire-plateau" element={<LocalitePlateau />} />
      <Route path="/galerie" element={<Galerie />} />
    </Routes>
  );
}
