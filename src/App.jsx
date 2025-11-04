// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import RouteAnalytics from "./components/RouteAnalytics";
import CookieConsent from "./components/CookieConsent";
import ConversionTracker from "./components/ConversionTracker";
import RoutesWithTransitions from "./components/RoutesWithTransitions";
import ScrollTopButton from "./components/ScrollTopButton";
import EmergencyCallButton from "./components/EmergencyCallButton";
import LoadingOverlay from "./components/LoadingOverlay";

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
const CabinetDentaireDakar = lazy(() => import("./pages/CabinetDentaireDakar"));
const LocaliteAlmadies = lazy(() => import("./pages/localites/Almadies"));
const LocaliteMermoz = lazy(() => import("./pages/localites/Mermoz"));
const LocalitePointE = lazy(() => import("./pages/localites/PointE"));
const LocaliteSacreCoeur = lazy(() => import("./pages/localites/SacreCoeur"));
const LocaliteYoff = lazy(() => import("./pages/localites/Yoff"));
const LocaliteHlmGrandYoff = lazy(() => import("./pages/localites/HlmGrandYoff"));
const LocaliteScatUrbam = lazy(() => import("./pages/localites/ScatUrbam"));
const LocaliteNgor = lazy(() => import("./pages/localites/Ngor"));
const LocaliteOuakam = lazy(() => import("./pages/localites/Ouakam"));
const LocalitePatteDOie = lazy(() => import("./pages/localites/PatteDOie"));
const LocaliteFann = lazy(() => import("./pages/localites/Fann"));
const LocalitePlateau = lazy(() => import("./pages/localites/Plateau"));

const App = () => {
  return (
    <>
      <ScrollManager />
      <RouteAnalytics />
      <ConversionTracker />
      <CookieConsent />
      <Header />
      <ScrollTopButton />
      <EmergencyCallButton />
      <Suspense fallback={<LoadingOverlay label="Chargement" /> }>
        <RoutesWithTransitions />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
