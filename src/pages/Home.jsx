import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlideshow from "../components/HeroSlideshow";
import Seo from "../components/Seo";
const FAQ = React.lazy(() => import("../components/FAQ"));
// Sections chargées en lazy pour alléger le bundle initial
const BeforeAfterGallery = React.lazy(() =>
  import("../components/BeforeAfterGallery")
);
const ClinicIntro = React.lazy(() => import("../components/ClinicIntro"));
const CompetencesGrid = React.lazy(() =>
  import("../components/CompetencesGrid")
);
const StaffPreview = React.lazy(() => import("../components/StaffPreview"));
const BlogListCompact = React.lazy(() =>
  import("../components/BlogListCompact")
);
const LatestBlogCards = React.lazy(() =>
  import("../components/LatestBlogCards")
);
const SectionWave = React.lazy(() => import("../components/SectionWave"));
const KeyMetrics = React.lazy(() => import("../components/KeyMetrics"));
const AssuranceMarquee = React.lazy(() =>
  import("../components/AssuranceMarquee")
);

// Logos assurances (pour la home marquee)
import logoSunu from "../assets/assurances/sunu.webp";
import logoAxa from "../assets/assurances/axa.webp";
import logoSonam from "../assets/assurances/sonam.webp";
import logoPrevoyance from "../assets/assurances/prevoyance.webp";
import logoMsh from "../assets/assurances/msh.webp";
import logoOlea from "../assets/assurances/olea.webp";
import logoAscoma from "../assets/assurances/ascoma.webp";
import logoWafa from "../assets/assurances/wafa.webp";
import logoAmsa from "../assets/assurances/amsa.webp";
import logoSanlam from "../assets/assurances/sanlam.webp";
import logoIpmSonatel from "../assets/assurances/ipm_sonatel.webp";
import logoIpmEiffage from "../assets/assurances/ipm_eiffage.webp";
import logoIpmBis from "../assets/assurances/ipm_bis.webp";
import logoIpmPoste from "../assets/assurances/ipm_poste.webp";
import logoIpmCentif from "../assets/assurances/ipm_centif.webp";
import logoIpmKingFahd from "../assets/assurances/ipm_kingfahd.webp";
import logoTransvie from "../assets/assurances/transvie.webp";
import logoIpmSenelec from "../assets/assurances/ipm_senelec.webp";
import logoDgid from "../assets/assurances/dgid.webp";

// Lazy-loaded sections (chargées en chunk séparé)
const TestimonialsCarousel = React.lazy(() =>
  import("../components/TestimonialsCarousel")
);
const GoogleMapSection = React.lazy(() =>
  import("../components/GoogleMapSection")
);

function useScrollOrDelay(delay, scrollThreshold) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (window.scrollY > scrollThreshold) show();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const id = window.setTimeout(show, delay);

    return () => {
      window.clearTimeout(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, [delay, scrollThreshold]);

  return visible;
}

const Home = () => {
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [showAssurance, setShowAssurance] = useState(false);
  const showAfterHero = useScrollOrDelay(10000, 280);
  const showBlogSections = useScrollOrDelay(15000, 2200);
  const assuranceLogos = useMemo(
    () => [
      logoAxa,
      logoSonam,
      logoSunu,
      logoPrevoyance,
      logoWafa,
      logoSanlam,
      logoOlea,
      logoMsh,
      logoAscoma,
      logoAmsa,
      logoIpmSenelec,
      logoIpmPoste,
      logoIpmSonatel,
      logoIpmBis,
      logoIpmEiffage,
      logoIpmKingFahd,
      logoDgid,
      logoIpmCentif,
      logoTransvie,
    ],
    []
  );

  useEffect(() => {
    // Compromis UX/perf: galerie affichée vite, mais après la fenêtre LCP la plus critique
    const id = setTimeout(() => setShowBeforeAfter(true), 5200);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    // Déférer le bandeau assurances pour réduire la concurrence initiale
    const id = setTimeout(() => setShowAssurance(true), 6200);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Seo
        title="Dentiste à Dakar — Urgence, Consultation, RDV rapide | Clinique DABIA"
        description="Dentiste à Dakar (Liberté 6, Sicap Foire) : urgence dentaire, consultation, implants, orthodontie, blanchiment, prothèses. Devis clair, prise en charge rapide. Prenez RDV en ligne ou par téléphone."
        canonical="https://www.cliniquedentairedabia.com/"
        url="https://www.cliniquedentairedabia.com/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Où trouver un bon dentiste à Dakar ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La Clinique Dentaire DABIA, située à Sicap Foire Liberté 6 (à 150m du Uno), propose consultations, urgences, implants, orthodontie et esthétique avec devis clair et RDV rapide.",
                },
              },
              {
                "@type": "Question",
                name: "Quels sont les tarifs d'un détartrage à Dakar ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le tarif d'un détartrage dépend de l'état gingival. Consultez notre guide des tarifs sur le blog ou prenez RDV pour un devis personnalisé après examen.",
                },
              },
              {
                "@type": "Question",
                name: "La clinique propose-t-elle des soins d'urgence dentaire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, la Clinique DABIA ouvre des créneaux sous 24h pour les urgences (rage de dent, abcès, dent cassée, gonflement). Appelez avant de vous déplacer.",
                },
              },
            ],
          },
        ]}
      />
      <HeroSlideshow />
      {showAfterHero && (
        <Suspense fallback={<div className="py-8" aria-hidden="true" />}>
          <ClinicIntro />
          <KeyMetrics />
          <SectionWave />
        </Suspense>
      )}
      {/* Liens rapides – style pills aux couleurs du site */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-600 mb-3">
            Vous cherchez un dentiste à Dakar ou une clinique dentaire moderne ?
            Accédez directement à nos pages clés :
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link to="/dentiste-dakar" className="btn-cta btn-cta-sm">
              Dentiste Dakar
            </Link>
            <Link to="/cabinet-dentaire-dakar" className="btn-cta btn-cta-sm">
              Cabinet dentaire
            </Link>
            <Link to="/clinique-dentaire-dakar" className="btn-cta btn-cta-sm">
              Clinique dentaire Dakar
            </Link>
            <Link to="/en/dental-clinic-dakar" className="btn-cta btn-cta-sm">
              Dental clinic Dakar (EN)
            </Link>
            <Link
              to="/infos/technologie/airflow-dentaire-prophylaxie"
              className="btn-cta btn-cta-sm"
            >
              AirFlow
            </Link>
            <Link to="/urgence-dentaire-dakar" className="btn-cta btn-cta-sm">
              Urgence
            </Link>
            <Link to="/all-competences" className="btn-cta btn-cta-sm">
              Compétences
            </Link>
            <Link to="/infos/technologie" className="btn-cta btn-cta-sm">
              Technologie
            </Link>
            <Link to="/infos/assurances" className="btn-cta btn-cta-sm">
              Assurances
            </Link>
            <Link
              to="/cabinet-dentaire-liberte-6"
              className="btn-cta btn-cta-sm"
            >
              Liberté 6
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4 mb-2">
            Nos guides les plus consultés :
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <Link to="/blog/guide-tarifs-dentiste-dakar-2025" className="text-[#bb2988] underline hover:text-[#9b2170]">
              Tarifs dentaires Dakar 2025
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/blog/appareil-dentaire-prix-dakar-guide-complet" className="text-[#bb2988] underline hover:text-[#9b2170]">
              Prix appareil dentaire
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/blog/urgence-dentiste-dakar-24-24-nuit-weekend" className="text-[#bb2988] underline hover:text-[#9b2170]">
              Urgence dentaire 24/24
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/blog/blanchiment-dents-prix-conseils-dakar" className="text-[#bb2988] underline hover:text-[#9b2170]">
              Blanchiment dentaire
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/blog/tarif-implant-dentaire-dakar-deroulement" className="text-[#bb2988] underline hover:text-[#9b2170]">
              Prix implant dentaire
            </Link>
          </div>
        </div>
      </section>
      {showAfterHero && showBeforeAfter ? (
        <Suspense fallback={<div className="py-12" aria-hidden="true" />}>
          <BeforeAfterGallery />
        </Suspense>
      ) : (
        <div className="py-12" aria-hidden="true" />
      )}
      {showAfterHero && (
        <Suspense fallback={<div className="py-10" aria-hidden="true" />}>
          <StaffPreview />
          <CompetencesGrid />
        </Suspense>
      )}
      {showAfterHero && showAssurance ? (
        <Suspense fallback={<div className="py-6" aria-hidden="true" />}>
          <AssuranceMarquee className="py-6" speed={45} logos={assuranceLogos} />
        </Suspense>
      ) : (
        <div className="py-6" aria-hidden="true" />
      )}
      {/* Pourquoi nous choisir */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#7d6d34]">
              Pourquoi nous choisir comme dentiste à Dakar ?
            </h2>
            <p className="mt-3 text-gray-700 text-base">
              Clinique DABIA, Sicap Foire (Liberté 6) : urgences, implants,
              orthodontie, esthétique et soins enfants, avec un plateau
              technique moderne.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Rendez-vous rapides (urgences sous 24h) et devis clairs",
              "CBCT 3D, scanner intra-oral, stérilisation Classe B",
              "Implants, facettes, aligneurs, blanchiment, parodontologie",
              "Soins pour enfants et adultes, approche douce et pédagogique",
              "Accès facile VDN/Corniche, parking devant la clinique",
              "Accompagnement post-soins : contrôles, hygiène, rappels",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#bb2988] text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-sm text-gray-800">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#eadfc1] bg-[#fff9ef] p-6 shadow-sm">
            <div className="max-w-4xl">
              <h3 className="text-xl font-bold text-[#ad9d64]">
                Une clinique moderne repose aussi sur un équipement fiable
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-700">
                Le confort du patient, la précision du diagnostic et la sécurité
                de stérilisation dépendent aussi de la qualité du matériel. Pour
                les chirurgiens-dentistes qui souhaitent comparer des solutions
                d&apos;équipement, AfriSmile propose des ressources utiles sur le
                fauteuil, le scanner intra-oral et la stérilisation.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.afrismile.net/materiel-dentaire-senegal"
                  className="btn-cta btn-cta-sm"
                >
                  Matériel dentaire au Sénégal
                </a>
                <a
                  href="https://www.afrismile.net/autoclave-dentaire-classe-b-senegal"
                  className="btn-cta btn-cta-sm"
                >
                  Autoclave Classe B
                </a>
                <a
                  href="https://www.afrismile.net/scanner-intra-oral-senegal"
                  className="btn-cta btn-cta-sm"
                >
                  Scanner intra-oral
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Home */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div>
            {showAfterHero ? (
              <Suspense fallback={<div className="py-8" aria-hidden="true" />}>
                <FAQ
                  asJsonLd={false}
                  title="Foire aux questions"
                  items={[
                    {
                      q: "Où se situe la clinique ?",
                      a: "À Sicap Foire, 150m des deux voies de Liberté 6, proche VDN/Corniche. Parking devant l’entrée.",
                    },
                    {
                      q: "Proposez-vous des urgences dentaires à Dakar ?",
                      a: "Oui, nous ouvrons des créneaux sous 24h. Appelez avant de venir pour organiser la prise en charge.",
                    },
                    {
                      q: "Quels soins sont proposés ?",
                      a: "Implants, facettes, orthodontie (aligneurs/bagues), parodontologie, soins enfants, détartrage et esthétique.",
                    },
                    {
                      q: "Proposez-vous des devis détaillés ?",
                      a: "Oui, après l’examen, un plan de traitement et un devis clairs sont expliqués avec des étapes et options.",
                    },
                    {
                      q: "Comment prendre rendez-vous ?",
                      a: "En ligne via la page Rendez-vous ou par téléphone/WhatsApp. Les devis sont expliqués avec des étapes claires.",
                    },
                    {
                      q: "Quels sont vos horaires ?",
                      a: "Lundi à jeudi 9h–16h30, vendredi 9h–13h et 15h–16h30, samedi 9h–14h. Pour une urgence, appelez avant de vous déplacer.",
                    },
                    {
                      q: "Acceptez-vous les IPM et assurances ?",
                      a: "Nous aidons à la préparation des dossiers. Un devis détaillé est fourni pour vos demandes de prise en charge.",
                    },
                    {
                      q: "Puis-je étaler les soins ou les paiements ?",
                      a: "Les plans de traitement peuvent être phasés. Selon le cas, un étalement des rendez-vous et des paiements est proposé.",
                    },
                  ]}
                />
              </Suspense>
            ) : (
              <div className="py-8" aria-hidden="true" />
            )}
          </div>
        </div>
      </section>

      {/* =========================
          Derniers articles (grille)
         ========================= */}
      {showBlogSections ? (
        <Suspense fallback={<div className="py-16 bg-gray-50" aria-hidden="true" />}>
          <LatestBlogCards />
        </Suspense>
      ) : (
        <div className="py-16 bg-gray-50" aria-hidden="true" />
      )}
      {/* ===================================
          Tous nos articles (liste de liens)
         =================================== */}
      {showBlogSections && (
        <Suspense fallback={<div className="py-8" aria-hidden="true" />}>
          <BlogListCompact />
        </Suspense>
      )}
      {showBlogSections && (
        <Suspense fallback={<div className="py-12" aria-hidden="true" />}>
          <TestimonialsCarousel />
          <GoogleMapSection />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
