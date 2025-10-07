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
// confetti (chargé à la demande)
let confetti; import("canvas-confetti").then(m => confetti = m.default).catch(()=>{});

const minSelectableDate = addDays(startOfDay(new Date()), 2);

const RendezVous = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    try { sendEvent('form_rendez_vous_submit', { step: 'start' }); } catch {}

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
        try { sendEvent('form_rendez_vous_submit', { step: 'success' }); } catch {}
        try { confetti && confetti({ particleCount: 90, spread: 60, origin: { y: 0.3 } }); } catch {}
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        try { sendEvent('form_rendez_vous_submit', { step: 'error' }); } catch {}
      });
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto mt-20">
      <Seo
        title="Prendre rendez-vous – Clinique Dentaire DABIA (Dakar)"
        description="Réservez votre consultation dentaire à Dakar en ligne en 1 minute : esthétique, urgence, orthodontie, implants. Clinique DABIA."
        canonical="https://www.cliniquedentairedabia.com/rendez-vous"
        url="https://www.cliniquedentairedabia.com/rendez-vous"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Rendez-vous" }]}
      />
      <motion.h2
        className="text-4xl text-[#ad9d64] font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Prendre un rendez-vous
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={imgrv}
            alt="Dentiste Dakar - Clinique dentaire DABIA"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Nom*</label>
              <input
                type="text"
                name="nom"
                required
                className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Prénom*</label>
              <input
                type="text"
                name="prenom"
                required
                className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Téléphone*</label>
            <input
              type="tel"
              name="telephone"
              required
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
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
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64] mb-1"
            />
            <p className="text-xs text-gray-600">
              <span className="font-bold">Consultation d’urgence</span>
              <br />
              Pour toute urgence dentaire, merci de nous contacter au +221 77
              703 93 93. Nous sommes également joignables sur WhatsApp via ce
              même numéro.
            </p>
          </div>

          <div className="bg-red-50 border border-red-300 p-4 rounded">
            <p className="text-sm text-red-700 font-semibold mb-2">
              Nos horaires :
            </p>
            <ul className="text-sm text-red-600 space-y-1">
              <li>Lundi – 09:00–16:30</li>
              <li>Mardi – 09:00–16:30</li>
              <li>Mercredi – 09:00–16:30</li>
              <li>Jeudi – 09:00–16:30</li>
              <li>Vendredi – 09:00–13:00, 15:00–16:30</li>
              <li>Samedi – 09:00–14:00</li>
              <li>Dimanche – Fermé</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              Êtes-vous assuré(e) ?
            </label>
            <select
              name="assurance"
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
            >
              <option value="">Sélectionner</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Types de soins</label>
            <select
              name="soin"
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
            >
              <option value="">Sélectionner</option>
              <option>Consultation</option>
              <option>Esthétique dentaire</option>
              <option>Parodontologie</option>
              <option>Implantologie</option>
              <option>Endodontie</option>
              <option>Facettes dentaires</option>
              <option>Orthodontie</option>
              <option>Greffe osseuse</option>
              <option>Blanchiment dentaire</option>
            </select>
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
                  <input type="checkbox" name="motif" value="nouveau patient" />
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
              className="w-full border rounded p-3 focus:ring-2 focus:ring-[#ad9d64]"
            ></textarea>
          </div>

          <button type="submit" disabled={status === "loading"} className="btn-cta disabled:opacity-50">
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>

          {status === "error" && (
            <p className="text-red-600 font-semibold text-center mt-2">
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </motion.form>
      </div>

      <AnimatePresence>
        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default RendezVous;
