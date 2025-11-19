import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessModal from "../components/SuccessModal";
import { AnimatePresence, motion } from "framer-motion";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import imgrv from "../assets/rendezvous-dabia.webp";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { addDays, startOfDay } from "date-fns";
import { sendEvent } from "../analytics/ga4";
import FancySelect from "../components/FancySelect";
// confetti (chargé à la demande)
let confetti;
import("canvas-confetti")
  .then((m) => (confetti = m.default))
  .catch(() => {});

const minSelectableDate = addDays(startOfDay(new Date()), 2);

const HorairesCard = ({ className = "" }) => (
  <div
    className={`rounded-2xl bg-white/90 border border-[#e7dcbc] p-5 shadow-sm ${className}`}
  >
    <p className="text-sm font-semibold text-[#ad9d64] mb-2">Nos horaires</p>
    <ul className="text-sm text-gray-700 space-y-1">
      <li>Lundi – 09:00–16:30</li>
      <li>Mardi – 09:00–16:30</li>
      <li>Mercredi – 09:00–16:30</li>
      <li>Jeudi – 09:00–16:30</li>
      <li>Vendredi – 09:00–13:00, 15:00–16:30</li>
      <li>Samedi – 09:00–14:00</li>
      <li>Dimanche – Fermé</li>
    </ul>
  </div>
);

const RendezVous = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      sendEvent("form_rendez_vous_submit", { step: "start" });
    } catch {}

    if (form.current && date) {
      const hiddenDateInput = document.createElement("input");
      hiddenDateInput.type = "hidden";
      hiddenDateInput.name = "date";
      hiddenDateInput.value = date.toLocaleDateString("fr-FR");
      form.current.appendChild(hiddenDateInput);
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setShowModal(true);
        form.current.reset();
        setDate(null);
        try {
          sendEvent("form_rendez_vous_submit", { step: "success" });
        } catch {}
        try {
          confetti &&
            confetti({ particleCount: 90, spread: 60, origin: { y: 0.3 } });
        } catch {}
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        try {
          sendEvent("form_rendez_vous_submit", { step: "error" });
        } catch {}
      });
  };

  return (
    <section className="relative mt-20 overflow-hidden">
      <Seo
        title="Prendre rendez-vous – Clinique Dentaire DABIA (Dakar)"
        description="Réservez votre consultation dentaire à Dakar en ligne en 1 minute : esthétique, urgence, orthodontie, implants. Clinique DABIA."
        canonical="https://www.cliniquedentairedabia.com/rendez-vous"
        url="https://www.cliniquedentairedabia.com/rendez-vous"
      />

      {/* Fond photo + overlay dégradé */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img src={imgrv} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 opacity-80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/60 p-6 md:p-10"
        >
          <Breadcrumbs
            items={[{ label: "Accueil", href: "/" }, { label: "Rendez-vous" }]}
          />
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mt-4 mb-3 bg-gradient-to-r from-[#ad9d64] to-[#bb2988] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Prendre un rendez-vous
          </motion.h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Quelques informations suffisent pour réserver votre consultation à
            la Clinique Dentaire DABIA. Nous vous recontactons rapidement pour
            confirmer l&apos;horaire exact.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-start">
            <motion.form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="text-xs text-red-500 text-right">
                Les champs marqués d&apos;une * sont obligatoires.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Nom*</label>
                  <input
                    type="text"
                    name="nom"
                    required
                    className="border border-[#e7dcbc] rounded-full px-4 py-3 text-sm bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Prénom*</label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    className="border border-[#e7dcbc] rounded-full px-4 py-3 text-sm bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Téléphone*</label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  className="border border-[#e7dcbc] rounded-full px-4 py-3 text-sm bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="border border-[#e7dcbc] rounded-full px-4 py-3 text-sm bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Date souhaitée*
                </label>
                <DatePicker
                  selected={date}
                  onChange={(selectedDate) => setDate(selectedDate)}
                  name="date"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Choisissez une date"
                  locale={fr}
                  minDate={minSelectableDate}
                  required
                  calendarClassName="dabia-datepicker"
                  className="border border-[#e7dcbc] rounded-full px-4 py-3 text-sm bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64] mb-1"
                />
              </div>

              {/* Nos horaires juste sous la date sur mobile */}
              <HorairesCard className="mt-3 lg:hidden" />

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Êtes-vous assuré(e) ?
                </label>
                <FancySelect
                  name="assurance"
                  placeholder="Sélectionner"
                  options={[
                    { value: "oui", label: "Oui" },
                    { value: "non", label: "Non" },
                  ]}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Types de soins
                </label>
                <FancySelect
                  name="soin"
                  placeholder="Sélectionner"
                  options={[
                    { value: "Consultation", label: "Consultation" },
                    { value: "Esthétique dentaire", label: "Esthétique dentaire" },
                    { value: "Parodontologie", label: "Parodontologie" },
                    { value: "Implantologie", label: "Implantologie" },
                    { value: "Endodontie", label: "Endodontie" },
                    { value: "Facettes dentaires", label: "Facettes dentaires" },
                    { value: "Orthodontie", label: "Orthodontie" },
                    { value: "Greffe osseuse", label: "Greffe osseuse" },
                    { value: "Blanchiment dentaire", label: "Blanchiment dentaire" },
                  ]}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Contact préféré
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contact" value="courriel" />
                    Par courriel
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contact" value="téléphone" />
                    Par téléphone
                  </label>
                </div>
              </div>

              <div className="">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Raison du rendez-vous :
                  </label>
                  <div className="space-y-2 text-sm text-gray-700">
                    <label className="flex gap-2">
                      <input
                        type="checkbox"
                        name="motif"
                        value="nouveau patient"
                      />
                      Nouveau patient
                    </label>
                    <label className="flex gap-2">
                      <input
                        type="checkbox"
                        name="motif"
                        value="déjà patient"
                      />
                      Déjà patient
                    </label>
                    <label className="flex gap-2">
                      <input type="checkbox" name="motif" value="modifier" />
                      Modifier un rendez-vous
                    </label>
                    <label className="flex gap-2">
                      <input type="checkbox" name="motif" value="enfant" />
                      Rendez-vous pour mon enfant
                    </label>
                    <label className="flex gap-2">
                      <input type="checkbox" name="motif" value="urgence" />
                      Urgence dentaire
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1">
                  Message ou précisions
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full border border-[#e7dcbc] rounded-2xl px-4 py-3 text-sm bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-cta disabled:opacity-50"
              >
                {status === "loading" ? "Envoi..." : "Envoyer"}
              </button>

              {status === "error" && (
                <p className="text-red-600 font-semibold text-center mt-2">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-[#faf7ef] border border-[#e7dcbc] p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-[#ad9d64] mb-2">
                  Informations pratiques
                </h3>
                <p className="text-sm text-gray-700">
                  Nos assistantes vous accompagnent pour trouver le créneau le
                  plus adapté à vos disponibilités et à votre type de soin.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 border border-[#e7dcbc] p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#ad9d64] mb-2">
                  Consultation d&apos;urgence
                </p>
                <p className="text-sm text-gray-700">
                  Pour toute urgence dentaire, merci de nous contacter au{" "}
                  <span className="font-semibold">+221 77 703 93 93</span>. Nous
                  sommes également joignables sur WhatsApp via ce même numéro.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 border border-[#e7dcbc] p-5 shadow-sm">
                <HorairesCard className="hidden lg:block" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RendezVous;
