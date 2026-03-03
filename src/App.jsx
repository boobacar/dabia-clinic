// src/App.jsx
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import ScrollManager from "./components/ScrollManager";
import RouteAnalytics from "./components/RouteAnalytics";
import ConversionTracker from "./components/ConversionTracker";
import RoutesWithTransitions from "./components/RoutesWithTransitions";
import LoadingOverlay from "./components/LoadingOverlay";

const Footer = lazy(() => import("./components/Footer"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const ScrollTopButton = lazy(() => import("./components/ScrollTopButton"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const StickyAppointmentBar = lazy(() =>
  import("./components/StickyAppointmentBar")
);

const App = () => {
  return (
    <>
      <ScrollManager />
      <RouteAnalytics />
      <ConversionTracker />
      <Header />

      <Suspense fallback={null}>
        <CookieConsent />
        <ScrollTopButton />
        <WhatsAppButton />
      </Suspense>

      <Suspense fallback={<LoadingOverlay fullScreen label="Chargement" />}>
        <RoutesWithTransitions />
      </Suspense>

      <Suspense fallback={null}>
        <StickyAppointmentBar />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
