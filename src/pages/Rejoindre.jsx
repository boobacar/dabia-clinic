import { useState } from "react";
import { motion } from "framer-motion";

const Rejoindre = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    poste: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Candidature : ${formData.poste}`;
    const body = `Nom : ${formData.nom}%0D%0AEmail : ${formData.email}%0D%0APoste souhaité : ${formData.poste}%0D%0A%0D%0AMessage :%0D%0A${formData.message}%0D%0A%0D%0A(CV à joindre manuellement)`;

    const mailtoLink = `mailto:cliniquedentairedabia@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto mt-10">
      <motion.h2
        className="text-4xl font-bold text-center text-[#ad9d64] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Rejoindre la Clinique Dentaire Dabia
      </motion.h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        Nous accueillons avec plaisir toute candidature spontanée. Veuillez
        remplir le formulaire ci-dessous pour générer un e-mail prérempli.
        N'oubliez pas de joindre votre CV manuellement dans votre messagerie.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          required
          value={formData.nom}
          onChange={handleChange}
          className="border p-3 rounded w-full"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded w-full"
        />

        <select
          name="poste"
          required
          value={formData.poste}
          onChange={handleChange}
          className="border p-3 rounded w-full text-gray-700"
        >
          <option value="">Poste souhaité</option>
          <option value="Hygiéniste dentaire">Hygiéniste dentaire</option>
          <option value="Assistante dentaire">Assistante dentaire</option>
          <option value="Adjointe administrative">
            Adjointe administrative
          </option>
          <option value="Chirurgien dentaire">Chirurgien dentaire</option>
        </select>

        <textarea
          name="message"
          placeholder="Message / Motivation"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="border p-3 rounded w-full"
        />

        <p className="text-xs text-red-500 italic">
          * Veuillez joindre votre CV manuellement dans le mail qui s'ouvrira.
        </p>

        <button
          type="submit"
          className="bg-[#bb2988] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Envoyer ma candidature
        </button>
      </form>
    </section>
  );
};

export default Rejoindre;
