import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessModal from "../components/SuccessModal";
import { AnimatePresence, motion } from "framer-motion";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import imgrv from "../assets/rendezvous-dabia.webp";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { useSearchParams } from "react-router-dom";
import { addDays, startOfDay, format } from "date-fns";
import { sendEvent } from "../analytics/ga4";
import FancySelect from "../components/FancySelect";
import { FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// confetti (chargé à la demande)
let confetti;
import("canvas-confetti").then((m) => (confetti = m.default)).catch(() => {});

const minSelectableDate = addDays(startOfDay(new Date()), 2);
const availableFromLabel = format(minSelectableDate, "dd MMMM", { locale: fr });

const HorairesCard = ({ className = "" }) => (
  <div
    className={`rounded-2xl bg-white/90 border border-[#e7dcbc] p-5 shadow-sm ${className}`}
  >
    <p className="text-sm font-semibold text-[#ad9d64] mb-2">Nos horaires</p>
    <ul className="text-sm text-gray-700 space-y-1">
      <li>Lundi à Jeudi – 09:00–16:30</li>
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
  const [date, setDate] = useState(minSelectableDate);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [abVariant, setAbVariant] = useState("A");
  const [searchParams] = useSearchParams();

  const defaults = useMemo(() => {
    const motif = (searchParams.get("motif") || "").toLowerCase();
    const soin = searchParams.get("soin") || "";
    return {
      urgence: motif === "urgence",
      soin,
    };
  }, [searchParams]);

  useEffect(() => {
    if (defaults.urgence || defaults.soin) {
      setShowAdvanced(true);
      try {
        sendEvent("rdv_urgence_prefill", {
          page_path: "/rendez-vous",
          urgence: defaults.urgence ? "yes" : "no",
          soin: defaults.soin || "none",
        });
      } catch {}
    }
  }, [defaults]);

  useEffect(() => {
    try {
      const key = "rdv_ab_variant_v1";
      let variant = localStorage.getItem(key);
      if (!variant) {
        variant = Math.random() < 0.5 ? "A" : "B";
        localStorage.setItem(key, variant);
      }
      setAbVariant(variant);
      sendEvent("rdv_ab_variant_view", {
        page_path: "/rendez-vous",
        ab_variant: variant,
      });
    } catch {}
  }, []);

  const variantCopy = {
    hero: "Prendre un rendez-vous",
    sub: "Quelques informations suffisent pour réserver votre consultation à la Clinique Dentaire DABIA. Nous vous recontactons rapidement pour confirmer l'horaire exact.",
    submit: "Confirmer mon rendez-vous",
  };

  const onFormStart = () => {
    if (hasStartedForm) return;
    setHasStartedForm(true);
    try {
      sendEvent("rdv_form_start", { page_path: "/rendez-vous", ab_variant: abVariant });
    } catch {}
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation supplémentaire : interdire toute date avant J+2
    if (!date || date < minSelectableDate) {
      setStatus("error");
      return;
    }

    if (form.current && date) {
      let hiddenDateInput = form.current.querySelector('input[name="date"]');
      if (!hiddenDateInput) {
        hiddenDateInput = document.createElement("input");
        hiddenDateInput.type = "hidden";
        hiddenDateInput.name = "date";
        form.current.appendChild(hiddenDateInput);
      }
      hiddenDateInput.value = format(date, "dd/MM/yyyy");
    }

    setStatus("loading");
    try {
      sendEvent("form_rendez_vous_submit", { step: "start", ab_variant: abVariant });
    } catch {}

    const emailInput = form.current?.querySelector('input[name="email"]');
    const emailValue = emailInput?.value?.trim() || "";
    const promises = [];

    // 1. Notification Admin (Toujours envoyer)
    promises.push(
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ),
    );

    // 2. Auto-Reply Client (Seulement si email présent)
    const autoReplyTemplateId = import.meta.env
      .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

    if (emailValue && autoReplyTemplateId) {
      promises.push(
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          autoReplyTemplateId,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
      );
    }

    Promise.all(promises)
      .then(() => {
        setStatus("success");
        setShowModal(true);
        form.current.reset();
        setDate(minSelectableDate);
        try {
          sendEvent("form_rendez_vous_submit", { step: "success", ab_variant: abVariant });
          sendEvent("rdv_form_submit_success", { page_path: "/rendez-vous", ab_variant: abVariant });
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
          sendEvent("form_rendez_vous_submit", { step: "error", ab_variant: abVariant });
        } catch {}
      });
  };

  return (
    <section className="relative mt-20 overflow-hidden">
      <Seo
        title="Rendez-vous dentiste Dakar – RDV rapide WhatsApp/Téléphone | DABIA"
        description="Prenez rendez-vous avec un dentiste à Dakar en 30 secondes : formulaire express, appel direct ou WhatsApp. Réponse rapide de la Clinique Dentaire DABIA (Liberté 6)."
        canonical="https://www.cliniquedentairedabia.com/rendez-vous"
        url="https://www.cliniquedentairedabia.com/rendez-vous"
      />

      {/* Fond photo + overlay dégradé */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={imgrv}
          alt="Clinique Dentaire DABIA - salle de soins"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
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
            {variantCopy.hero}
          </motion.h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            {variantCopy.sub}
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            <div className="rounded-xl border border-[#e7dcbc] bg-[#fff9ea] px-3 py-2 text-center text-gray-700 inline-flex items-center justify-center gap-2">
              <FaCheckCircle className="text-green-600" /> Réponse rapide de l&apos;équipe
            </div>
            <div className="rounded-xl border border-[#e7dcbc] bg-[#fff9ea] px-3 py-2 text-center text-gray-700 inline-flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-[#bb2988]" /> Liberté 6, accès simple depuis Dakar
            </div>
            <div className="rounded-xl border border-[#e7dcbc] bg-[#fff9ea] px-3 py-2 text-center text-gray-700 inline-flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#ad9d64]" /> WhatsApp & téléphone disponibles
            </div>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-start">
            <motion.form
              ref={form}
              onSubmit={handleSubmit}
              onFocusCapture={onFormStart}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="text-xs text-red-500 text-right">
                Formulaire express : seuls Nom, Prénom, Téléphone et Date sont obligatoires.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Nom*</label>
                  <input
                    type="text"
                    name="nom"
                    required
                    placeholder="Votre nom"
                    className="border border-[#e7dcbc] rounded-full px-4 py-3 text-base bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Prénom*</label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    placeholder="Votre prénom"
                    className="border border-[#e7dcbc] rounded-full px-4 py-3 text-base bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Téléphone*</label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  placeholder="Ex: +221 77 000 00 00"
                  className="border border-[#e7dcbc] rounded-full px-4 py-3 text-base bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Date souhaitée*
                </label>
                <DatePicker
                  selected={date}
                  onChange={(selectedDate) => setDate(selectedDate)}
                  name="date_display"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Choisissez une date"
                  locale={fr}
                  minDate={minSelectableDate}
                  filterDate={(d) => !d || d >= minSelectableDate}
                  required
                  calendarClassName="dabia-datepicker"
                  className="border border-[#e7dcbc] rounded-full px-4 py-3 text-base bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64] mb-1"
                  onChangeRaw={(event) => event.preventDefault()}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Dates de rendez-vous en ligne disponibles à partir du{" "}
                  <span className="font-semibold">{availableFromLabel}</span>.{" "}
                  Pour une demande plus rapide ou une urgence, merci de nous
                  contacter par téléphone.
                </p>
              </div>

              {/* Nos horaires juste sous la date sur mobile */}
              <HorairesCard className="mt-3 lg:hidden" />

              <div className="rounded-2xl border border-[#e7dcbc] bg-white/80 p-4">
                <button
                  type="button"
                  onClick={() => setShowAdvanced((v) => !v)}
                  className="w-full text-left text-sm font-semibold text-[#ad9d64]"
                >
                  {showAdvanced
                    ? "Masquer les informations complémentaires"
                    : "Ajouter des informations complémentaires (optionnel)"}
                </button>

                {showAdvanced && (
                  <div className="mt-4 space-y-5">
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="border border-[#e7dcbc] rounded-full px-4 py-3 text-base bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                      />
                    </div>

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
                        defaultValue={defaults.soin}
                        placeholder="Sélectionner"
                        options={[
                          { value: "Consultation", label: "Consultation" },
                          {
                            value: "Esthétique dentaire",
                            label: "Esthétique dentaire",
                          },
                          { value: "Parodontologie", label: "Parodontologie" },
                          { value: "Implantologie", label: "Implantologie" },
                          { value: "Endodontie", label: "Endodontie" },
                          {
                            value: "Facettes dentaires",
                            label: "Facettes dentaires",
                          },
                          { value: "Orthodontie", label: "Orthodontie" },
                          { value: "Greffe osseuse", label: "Greffe osseuse" },
                          {
                            value: "Blanchiment dentaire",
                            label: "Blanchiment dentaire",
                          },
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
                          <input type="checkbox" name="motif" value="déjà patient" />
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
                          <input
                            type="checkbox"
                            name="motif"
                            value="urgence"
                            defaultChecked={defaults.urgence}
                          />
                          Urgence dentaire
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600 mb-1">
                        Message ou précisions
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        className="w-full border border-[#e7dcbc] rounded-2xl px-4 py-3 text-base bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-cta disabled:opacity-50 w-full"
              >
                {status === "loading" ? "Envoi..." : "Envoyer"}
              </button>

              <p className="text-xs text-gray-600 -mb-2">
                Après envoi, notre équipe vous contacte rapidement pour confirmer l&apos;horaire.
              </p>

              {status === "error" && (
                <p className="text-red-600 font-semibold text-center mt-2">
                  Une erreur est survenue. Veuillez vérifier la date souhaitée
                  et réessayer.
                </p>
              )}

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="tel:+221777039393"
                  onClick={() => {
                    try {
                      sendEvent("click_tel", { page_path: "/rendez-vous", source: "after_form", ab_variant: abVariant });
                      sendEvent("cta_rendez_vous_click", { page_path: "/rendez-vous", cta_type: "call_after_form", ab_variant: abVariant });
                    } catch {}
                  }}
                  className="btn-cta text-center inline-flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt /> Appeler maintenant
                </a>
                <a
                  href="https://wa.me/221777039393?text=Bonjour%20Clinique%20DABIA%2C%20je%20souhaite%20prendre%20un%20rendez-vous."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    try {
                      sendEvent("click_whatsapp", { page_path: "/rendez-vous", source: "after_form", ab_variant: abVariant });
                      sendEvent("cta_rendez_vous_click", { page_path: "/rendez-vous", cta_type: "whatsapp_after_form", ab_variant: abVariant });
                    } catch {}
                  }}
                  className="btn-cta text-center inline-flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-green-600" /> WhatsApp
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-[#e7dcbc] bg-white/85 p-4">
                <p className="text-sm font-semibold text-[#ad9d64]">Guides utiles avant votre rendez-vous</p>
                <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                  <a href="/dentiste-dakar" className="underline text-[#bb2988]">Dentiste à Dakar (page principale)</a>
                  <a href="/urgence-dentaire-dakar" className="underline text-[#bb2988]">Urgence dentaire à Dakar</a>
                  <a href="/cabinet-dentaire-dakar" className="underline text-[#bb2988]">Cabinet dentaire à Dakar</a>
                  <a href="/blog/dentiste-dakar-prix-consultation-2026" className="underline text-[#bb2988]">Prix consultation dentiste à Dakar</a>
                  <a href="/blog/ramadan-dentiste-dakar-jeune-horaires-2026" className="underline text-[#bb2988]">Ramadan et dentiste à Dakar</a>
                  <a href="/blog/urgence-dentiste-dakar-24h-que-faire" className="underline text-[#bb2988]">Que faire en urgence dentaire 24h</a>
                </div>
              </div>
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

              <HorairesCard className="hidden lg:block" />
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
