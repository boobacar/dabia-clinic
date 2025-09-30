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
const APropos = lazy(() => import("./pages/APropos"));
const Services = lazy(() => import("./pages/ServiceTemplate"));
const LocaliteLiberte6 = lazy(() => import("./pages/LocaliteLiberte6"));
const LocaliteParcelles = lazy(() => import("./pages/LocaliteParcelles"));

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
          <Route path="/services" element={<Services />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/competences/:slug" element={<CompetenceDetail />} />
          <Route path="/all-competences" element={<Competences />} />
          <Route path="/infos/assurances" element={<Assurances />} />
          <Route path="/infos/post-visite" element={<PostVisite />} />
          <Route path="/infos/enfants" element={<ZoneEnfants />} />
          <Route path="/rejoindre" element={<Rejoindre />} />
          <Route path="/infos/technologie" element={<Technologie />} />
          <Route path="/cabinet-dentaire-liberte-6" element={<LocaliteLiberte6 />} />
          <Route
            path="/clinique-dentaire-parcelles-assainies"
            element={<LocaliteParcelles />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
