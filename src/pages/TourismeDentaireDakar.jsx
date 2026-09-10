// src/pages/TourismeDentaireDakar.jsx
// Pilier « tourisme dentaire » : page d'entrée pour les patients qui viennent
// de l'étranger (diaspora Europe/Amérique du Nord + Afrique) se faire soigner
// les dents à Dakar. Elle relie les 34 hubs pays de l'usine géo.
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaPlane,
  FaFileInvoiceDollar,
  FaCalendarCheck,
  FaSyncAlt,
  FaHotel,
  FaUniversity,
} from "react-icons/fa";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQ from "../components/FAQ";
import Magnetic from "../components/Magnetic";
import { GEO_COUNTRIES } from "../data/geoData";

const CANONICAL = "https://www.cliniquedentairedabia.com/tourisme-dentaire-dakar";

// Fourchettes indicatives relevées à Dakar en 2026 (source : guides tarifs du
// site). Conversion au taux fixe du franc CFA : 1 € = 655,957 FCFA.
const TARIFS = [
  { soin: "Consultation (examen + devis)", dakar: "10 000 – 20 000 FCFA", eur: "15 – 30 €" },
  { soin: "Détartrage et polissage", dakar: "25 000 – 40 000 FCFA", eur: "38 – 61 €" },
  { soin: "Extraction dentaire simple", dakar: "à partir de 20 000 FCFA", eur: "à partir de 30 €" },
  { soin: "Plombage composite (carie)", dakar: "25 000 – 45 000 FCFA", eur: "38 – 69 €" },
  { soin: "Dévitalisation (traitement de canal)", dakar: "40 000 – 90 000 FCFA", eur: "61 – 137 €" },
  { soin: "Couronne céramo-métal ou zircone", dakar: "150 000 – 350 000 FCFA", eur: "229 – 534 €" },
  { soin: "Prothèse amovible partielle", dakar: "75 000 – 150 000 FCFA", eur: "114 – 229 €" },
  { soin: "Prothèse complète (haut ou bas)", dakar: "150 000 – 300 000 FCFA", eur: "229 – 457 €" },
  { soin: "Implant complet (implant + pilier + couronne)", dakar: "400 000 – 800 000 FCFA", eur: "610 – 1 220 €" },
  { soin: "Orthodontie complète", dakar: "600 000 – 1 200 000 FCFA", eur: "915 – 1 830 €" },
  { soin: "Aligneurs invisibles", dakar: "à partir de 1 500 000 FCFA", eur: "à partir de 2 290 €" },
];

const ETAPES = [
  {
    titre: "1. Devis à distance (avant de réserver)",
    texte:
      "Envoyez vos radios (panoramique ou CBCT) et quelques photos par WhatsApp. La clinique vous renvoie un devis écrit en FCFA et un planning de soins calé sur la durée de votre séjour.",
  },
  {
    titre: "2. Réservation du voyage",
    texte:
      "Une fois le planning validé, vous réservez vos billets en fonction du nombre de rendez-vous. Pour les soins prothétiques, comptez un premier séjour, puis un second plus court si la couronne définitive doit être posée après l'intégration de l'implant.",
  },
  {
    titre: "3. Arrivée et bilan sur place (J1)",
    texte:
      "Examen clinique complet, radiographie ou CBCT 3D si nécessaire : le plan de traitement est confirmé et le devis ajusté si l'examen révèle autre chose. Aucun soin ne démarre sans votre accord.",
  },
  {
    titre: "4. Soins regroupés sur le séjour",
    texte:
      "Les rendez-vous sont regroupés pour limiter les déplacements : détartrage, soins des caries, extractions, empreintes, poses d'implants ou de facettes selon le plan de traitement.",
  },
  {
    titre: "5. Contrôle avant le départ",
    texte:
      "Un contrôle final vérifie la guérison et l'occlusion. Un compte-rendu écrit vous est remis, utile pour votre dentiste (ou votre mutuelle) au retour.",
  },
  {
    titre: "6. Suivi à distance après le retour",
    texte:
      "La clinique reste joignable par téléphone et WhatsApp : photos de contrôle, questions sur la cicatrisation, coordination avec un praticien local si nécessaire.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Combien de jours faut-il prévoir à Dakar pour des soins dentaires ?",
    a: "Comptez 3 à 5 jours pour un bilan, un détartrage, des soins de caries ou des extractions. Pour un implant, prévoyez 7 à 10 jours lors du premier séjour (la couronne définitive est posée après 3 à 6 mois d'intégration, lors d'un second séjour). Pour des facettes ou une réhabilitation complète, comptez 8 à 12 jours.",
  },
  {
    q: "Peut-on obtenir un devis avant de partir ?",
    a: "Oui. Décrivez vos besoins et envoyez vos radios par téléphone ou WhatsApp : la clinique transmet un devis écrit en FCFA et un planning de soins avant votre départ, pour que vous sachiez exactement combien de temps rester sur place.",
  },
  {
    q: "Quels moyens de paiement sont acceptés ?",
    a: "Espèces en FCFA, carte bancaire, virement international et mobile money (Orange Money, Wave, MTN MoMo). Le devis est établi en FCFA ; le taux de conversion est fixe (1 € = 655,957 FCFA).",
  },
  {
    q: "Ma mutuelle ou mon assurance rembourse-t-elle des soins faits à Dakar ?",
    a: "Cela dépend de votre contrat. Demandez à votre organisme les conditions de prise en charge à l'étranger et faites-vous remettre un devis détaillé puis une facture acquittée : ce sont les documents demandés. Au Sénégal, l'IPM couvre une partie des soins pour les salariés.",
  },
  {
    q: "Où loger pendant un séjour de soins à Dakar ?",
    a: "La clinique est située à Sicap Foire, 2 voies Liberté 6 (à 150 m du Uno), un quartier central proche des Almadies, du Plateau et de l'aéroport. L'équipe peut vous orienter vers des hébergements à proximité pour limiter les trajets entre les rendez-vous.",
  },
  {
    q: "Faut-il un visa pour venir se faire soigner au Sénégal ?",
    a: "Les ressortissants de la CEDEAO, de l'Union européenne, des États-Unis, du Canada et du Royaume-Uni n'ont pas besoin de visa pour un séjour touristique court. Vérifiez les conditions à jour auprès du consulat du Sénégal de votre pays avant de réserver.",
  },
];

export default function TourismeDentaireDakar() {
  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceLD = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Tourisme dentaire à Dakar — séjour de soins dentaires au Sénégal",
    procedureType: "https://schema.org/NoninvasiveProcedure",
    bodyLocation: "Cavité buccale",
    howPerformed:
      "Bilan et devis à distance, séjour de soins organisé à Dakar (détartrage, soins des caries, extractions, couronnes, implants, orthodontie, esthétique), contrôle avant le départ et suivi à distance.",
    provider: {
      "@type": "Dentist",
      name: "Clinique Dentaire DABIA",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150 m du Uno)",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
    },
  };

  const breadcrumbLD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.cliniquedentairedabia.com/" },
      { "@type": "ListItem", position: 2, name: "Tourisme dentaire à Dakar", item: CANONICAL },
    ],
  };

  return (
    <section className="page-shell px-4 max-w-6xl mx-auto">
      <Seo
        title="Tourisme dentaire à Dakar : prix des soins au Sénégal et séjour | DABIA"
        description="Tourisme dentaire à Dakar : tarifs des implants, couronnes et prothèses au Sénégal, durée du séjour, organisation du voyage et suivi après le retour. Devis écrit avant le départ — Clinique DABIA."
        canonical={CANONICAL}
        url={CANONICAL}
        jsonLd={[faqLD, serviceLD, breadcrumbLD]}
      />

      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Tourisme dentaire à Dakar" }]} />

      {/* HERO */}
      <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#faf7ef] via-white to-[#fff9ea] border border-[#e7dcbc]">
        <p className="section-kicker mb-2">Patients internationaux</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#ad9d64] leading-tight">
          Tourisme dentaire à Dakar : se soigner au Sénégal pendant un séjour
        </h1>
        <p className="mt-3 text-gray-700 max-w-3xl leading-relaxed">
          Implants, couronnes, prothèses, orthodontie ou esthétique du sourire : la
          Clinique Dentaire DABIA, à Sicap Foire (Liberté 6), reçoit chaque mois des
          patients venus de France, de Belgique, de Suisse, du Canada, des États-Unis
          et de toute l'Afrique de l'Ouest. Vous arrivez avec un devis écrit et un
          planning de soins ; vous repartez avec un contrôle effectué et un suivi à
          distance organisé.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="tel:+221777039393" className="inline-flex items-center gap-2 btn-cta">
            <FaPhoneAlt /> Appeler la clinique
          </a>
          <a
            href="https://wa.me/221777039393"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-cta"
          >
            <FaWhatsapp className="text-green-600" /> Envoyer mes radios sur WhatsApp
          </a>
          <Magnetic>
            <Link to="/rendez-vous" className="ripple inline-flex items-center gap-2 btn-cta">
              Demander un devis
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* QUICK ANSWER (AEO) */}
      <div className="mt-6 rounded-2xl border border-[#e7dcbc] bg-[#fff9ea] p-5">
        <h2 className="text-lg font-bold text-[#ad9d64]">En résumé</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Un séjour de soins dentaires à Dakar se prépare en trois temps : un devis
          écrit et un planning établis à distance (avant de réserver les billets),
          3 à 10 jours de soins regroupés sur place selon le traitement, puis un
          contrôle avant le départ et un suivi à distance après le retour. Les tarifs
          sont annoncés en FCFA et confirmés par devis après l'examen clinique.
        </p>
      </div>

      {/* POURQUOI DAKAR */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#ad9d64]">Pourquoi se faire soigner à Dakar</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <FaFileInvoiceDollar className="text-[#bb2988]" />,
              titre: "Tarifs clairs en FCFA",
              texte:
                "Chaque plan de traitement est validé par un devis écrit avant le début des soins : pas de supplément découvert sur place.",
            },
            {
              icon: <FaPlane className="text-[#bb2988]" />,
              titre: "Vols directs depuis Paris",
              texte:
                "Environ 5 h 45 de vol depuis Paris, plusieurs fois par jour en saison. Les autres capitales sont reliées avec une escale.",
            },
            {
              icon: <FaCalendarCheck className="text-[#bb2988]" />,
              titre: "Rendez-vous regroupés",
              texte:
                "Le planning est construit autour de vos dates de séjour pour limiter les déplacements et les allers-retours inutiles.",
            },
            {
              icon: <FaSyncAlt className="text-[#bb2988]" />,
              titre: "Suivi après le retour",
              texte:
                "Compte-rendu écrit remis avant le départ et échanges par téléphone ou WhatsApp pour les contrôles à distance.",
            },
          ].map((c) => (
            <div key={c.titre} className="bg-white border rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 text-[#282426] font-semibold">
                {c.icon} {c.titre}
              </div>
              <p className="mt-2 text-sm text-gray-700">{c.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#ad9d64]">Prix des soins dentaires à Dakar (2026)</h2>
        <p className="mt-2 text-gray-700">
          Fourchettes indicatives relevées à Dakar pour chaque type de soin. Le
          montant exact dépend de l'examen clinique et des matériaux choisis : un
          devis écrit et détaillé est remis avant tout soin. Conversion effectuée au
          taux fixe du franc CFA (1 € = 655,957 FCFA).
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#faf7ef] text-left">
                <th className="border border-[#e7dcbc] px-3 py-2">Soin</th>
                <th className="border border-[#e7dcbc] px-3 py-2">Prix indicatif à Dakar</th>
                <th className="border border-[#e7dcbc] px-3 py-2">Équivalent €</th>
              </tr>
            </thead>
            <tbody>
              {TARIFS.map((t) => (
                <tr key={t.soin}>
                  <td className="border border-[#e7dcbc] px-3 py-2">{t.soin}</td>
                  <td className="border border-[#e7dcbc] px-3 py-2 font-semibold text-[#282426]">{t.dakar}</td>
                  <td className="border border-[#e7dcbc] px-3 py-2 text-gray-600">{t.eur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          À titre de repère, les soins prothétiques et implantaires facturés en Europe
          de l'Ouest ou en Amérique du Nord le sont généralement à un multiple de ces
          montants : demandez un devis écrit des deux côtés pour comparer à soins
          équivalents, puis vérifiez ce que votre mutuelle prend en charge à
          l'étranger. Vous pouvez aussi consulter notre{" "}
          <Link to="/blog/guide-tarifs-dentiste-dakar-2025" className="underline text-[#bb2988]">
            guide des tarifs dentaires à Dakar
          </Link>{" "}
          et la page{" "}
          <Link to="/blog/tarif-implant-dentaire-dakar-deroulement" className="underline text-[#bb2988]">
            tarif d'un implant dentaire à Dakar
          </Link>
          .
        </p>
      </section>

      {/* ETAPES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#ad9d64]">Comment se déroule un séjour de soins</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {ETAPES.map((e) => (
            <div key={e.titre} className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-[#282426]">{e.titre}</h3>
              <p className="mt-2 text-sm text-gray-700">{e.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGISTIQUE */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 font-semibold text-[#282426]">
            <FaHotel className="text-[#bb2988]" /> Où loger et comment se déplacer
          </div>
          <p className="mt-2 text-sm text-gray-700">
            La clinique se trouve à Sicap Foire, 2 voies Liberté 6 (à 150 m du Uno),
            à quelques minutes des Almadies, du Plateau et du quartier des affaires.
            Depuis l'aéroport international Blaise Diagne, comptez environ 45 à 60
            minutes de route. Privilégiez un hébergement proche de Liberté 6, de
            Mermoz ou des Almadies pour limiter les trajets entre les rendez-vous.
          </p>
        </div>
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 font-semibold text-[#282426]">
            <FaUniversity className="text-[#bb2988]" /> Paiement, mutuelle et assurance
          </div>
          <p className="mt-2 text-sm text-gray-700">
            Le devis et la facture sont établis en FCFA. Les paiements se font en
            espèces, par carte bancaire, par virement international ou par mobile
            money (Orange Money, Wave, MTN MoMo). Pour une prise en charge par votre
            mutuelle ou votre assurance, demandez avant le départ les documents
            exigés par votre contrat et faites-vous remettre un devis détaillé puis
            une facture acquittée.
          </p>
        </div>
      </section>

      {/* LIENS PAYS */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#ad9d64]">Vous venez d'un autre pays ?</h2>
        <p className="mt-2 text-gray-700">
          Chaque page pays détaille les vols, la durée de séjour conseillée et les
          soins les plus demandés par les patients qui viennent de là.
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {GEO_COUNTRIES.map((c) => (
            <Link
              key={c.slug}
              to={`/pays/${c.slug}`}
              className="flex items-center gap-2 rounded-xl border border-[#e7dcbc] bg-white px-3 py-2 text-sm hover:border-[#bb2988]"
            >
              <span aria-hidden="true">{c.flag}</span>
              <span>{c.nameShort || c.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link to="/soins/implant-dentaire-france" className="underline text-[#bb2988]">
            Implant dentaire pour les patients de France
          </Link>
          <Link to="/soins/implant-dentaire-belgique" className="underline text-[#bb2988]">
            Implant dentaire pour les patients de Belgique
          </Link>
          <Link to="/soins/implant-dentaire-etats-unis" className="underline text-[#bb2988]">
            Implant dentaire pour les patients des États-Unis
          </Link>
          <Link to="/soins/facettes-dentaires-france" className="underline text-[#bb2988]">
            Facettes dentaires pour les patients de France
          </Link>
          <Link to="/soins/tourisme-dentaire-france" className="underline text-[#bb2988]">
            Tourisme dentaire pour les patients de France
          </Link>
          <Link to="/pays" className="underline text-[#bb2988]">
            Tous les pays desservis →
          </Link>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} className="mt-12" title="Questions fréquentes sur le tourisme dentaire à Dakar" />

      {/* CTA FINAL */}
      <section className="mt-12 rounded-3xl bg-[#201d1f] text-white p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold">Préparez votre séjour de soins</h2>
        <p className="mt-2 text-white/80">
          Envoyez vos radios par WhatsApp : vous recevrez un devis écrit et un
          planning de soins avant de réserver votre billet.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href="tel:+221777039393" className="inline-flex items-center gap-2 btn-cta">
            <FaPhoneAlt /> Appeler
          </a>
          <a
            href="https://wa.me/221777039393"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-cta"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <Link to="/rendez-vous" className="inline-flex items-center gap-2 btn-cta">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </section>
  );
}
