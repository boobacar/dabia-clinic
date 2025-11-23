// src/App.jsx
import { Suspense } from "react";
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
      <Suspense fallback={<LoadingOverlay fullScreen label="Chargement" />}>
        <RoutesWithTransitions />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
