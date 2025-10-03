// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";

// lazy routes (code splitting)
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const RendezVous = lazy(() => import("./pages/RendezVous"));
const Personnel = lazy(() => import("./pages/Personnel"));
const CompetenceDetail = lazy(() => import("./pages/CompetenceDetail"));
const Competences = lazy(() => import("./pages/Competences"));
const Assurances = lazy(() => import("./pages/Assurances"));
const PostVisite = lazy(() => import("./pages/PostVisite"));
const ZoneEnfants = lazy(() => import("./pages/ZoneEnfants"));
const Rejoindre = lazy(() => import("./pages/Rejoindre"));
const Technologie = lazy(() => import("./pages/Technologie"));
const TechnologieDetail = lazy(() => import("./pages/TechnologieDetail"));
const APropos = lazy(() => import("./pages/APropos"));
// services pages supprimées (on utilise Nos Compétences)
const LocaliteLiberte6 = lazy(() => import("./pages/LocaliteLiberte6"));
const LocaliteParcelles = lazy(() => import("./pages/LocaliteParcelles"));
const UrgenceDentaire = lazy(() => import("./pages/UrgenceDentaire"));
const DentisteDakar = lazy(() => import("./pages/DentisteDakar"));
const LocaliteAlmadies = lazy(() => import("./pages/localites/Almadies"));
const LocaliteMermoz = lazy(() => import("./pages/localites/Mermoz"));
const LocalitePointE = lazy(() => import("./pages/localites/PointE"));
const LocaliteSacreCoeur = lazy(() => import("./pages/localites/SacreCoeur"));
const LocaliteYoff = lazy(() => import("./pages/localites/Yoff"));

const App = () => {
  return (
    <>
      <ScrollManager />
      <Header />
      <Suspense
        fallback={<div className="pt-24 pb-24 text-center">Chargement…</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/apropos" element={<APropos />} />
          {/* /services redirigé côté Vercel vers /all-competences */}
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/urgence-dentaire-dakar" element={<UrgenceDentaire />} />
          <Route path="/dentiste-dakar" element={<DentisteDakar />} />
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
          <Route
            path="/clinique-dentaire-parcelles-assainies"
            element={<LocaliteParcelles />}
          />
          <Route path="/cabinet-dentaire-almadies" element={<LocaliteAlmadies />} />
          <Route path="/cabinet-dentaire-mermoz" element={<LocaliteMermoz />} />
          <Route path="/cabinet-dentaire-point-e" element={<LocalitePointE />} />
          <Route path="/cabinet-dentaire-sacre-coeur" element={<LocaliteSacreCoeur />} />
          <Route path="/cabinet-dentaire-yoff" element={<LocaliteYoff />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
