import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessModal from "../components/SuccessModal";
import { AnimatePresence, motion } from "framer-motion";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import imgrv from "../assets/rendezvous-dabia.png";

const RendezVous = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    if (form.current && date) {
      // Injecte la date dans un champ caché
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
      })
      .catch((err) => {
        console.error("EmailJS error:", err); // 🔍 pour déboguer dans la console
        setStatus("error");
      });
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto mt-20">
      <motion.h2
        className="text-4xl text-[#ad9d64] font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Prendre un rendez-vous
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image animée à gauche */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={imgrv} // <— place ton image ici
            alt="Illustration rendez-vous"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Formulaire animé à droite */}
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
              <label className="text-sm text-gray-600 mb-1">Nom</label>
              <input
                type="text"
                name="nom"
                className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Prénom</label>
              <input
                type="text"
                name="prenom"
                className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Date souhaitée</label>
            <DatePicker
              selected={date}
              onChange={(selectedDate) => setDate(selectedDate)}
              name="date"
              dateFormat="dd/MM/yyyy"
              placeholderText="Choisissez une date"
              locale={fr}
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
              minDate={new Date()}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Type de soin</label>
            <select
              name="soin"
              className="border p-3 rounded focus:ring-2 focus:ring-[#ad9d64]"
              required
            >
              <option value="">Sélectionner</option>
              <option value="Esthétique dentaire">Esthétique dentaire</option>
              <option value="Parodontologie">Parodontologie</option>
              <option value="Implantologie">Implantologie</option>
              <option value="Endodontie">Endodontie</option>
              <option value="Facettes dentaires">Facettes dentaires</option>
              <option value="Orthodontie">Orthodontie</option>
              <option value="Greffe osseuse">Greffe osseuse</option>
              <option value="Blanchiment dentaire">Blanchiment dentaire</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform disabled:opacity-50"
          >
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
