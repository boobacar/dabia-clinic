// src/App.jsx
import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import ScrollManager from "./components/ScrollManager";
import RouteAnalytics from "./components/RouteAnalytics";
import CookieConsent from "./components/CookieConsent";
import ConversionTracker from "./components/ConversionTracker";
import RoutesWithTransitions from "./components/RoutesWithTransitions";
import ScrollTopButton from "./components/ScrollTopButton";
import LoadingOverlay from "./components/LoadingOverlay";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyAppointmentBar from "./components/StickyAppointmentBar";

const Footer = lazy(() => import("./components/Footer"));

function useDeferredMount(delay = 10000, scrollThreshold = 900) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let timeoutId;
    let done = false;

    const mount = () => {
      if (done) return;
      done = true;
      setMounted(true);
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (window.scrollY > scrollThreshold) mount();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    timeoutId = window.setTimeout(mount, delay);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [delay, scrollThreshold]);

  return mounted;
}

const App = () => {
  const showFooter = useDeferredMount();

  return (
    <>
      <ScrollManager />
      <RouteAnalytics />
      <ConversionTracker />
      <CookieConsent />
      <Header />
      <ScrollTopButton />
      <WhatsAppButton />
      <Suspense fallback={<LoadingOverlay fullScreen label="Chargement" />}>
        <RoutesWithTransitions />
      </Suspense>
      <StickyAppointmentBar />
      {showFooter && (
        <Suspense fallback={<div className="bg-gray-800 py-8" aria-hidden="true" />}>
          <Footer />
        </Suspense>
      )}
    </>
  );
};

export default App;
