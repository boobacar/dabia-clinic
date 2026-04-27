import { useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";

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
    <section className="py-36 px-4 max-w-6xl mx-auto mt-20">
      <Seo
        title="Recrutement dentaire à Dakar – Rejoindre la Clinique DABIA"
        description="Envoyez votre candidature à la Clinique Dentaire DABIA à Dakar : postes en dentisterie, assistance, secrétariat et administration."
        canonical="https://www.cliniquedentairedabia.com/rejoindre"
        url="https://www.cliniquedentairedabia.com/rejoindre"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Rejoindre" }]}
      />

      <motion.h1
        className="text-4xl font-bold text-center text-[#ad9d64] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Rejoindre la Clinique Dentaire DABIA
      </motion.h1>

      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
        Vous souhaitez intégrer une clinique dentaire à Dakar orientée qualité,
        innovation et accompagnement patient ? Nous étudions les candidatures
        spontanées pour des profils médicaux, paramédicaux, administratifs et
        support. Notre priorité : constituer une équipe engagée, rigoureuse et
        bienveillante.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
        <article className="bg-white shadow rounded-xl p-5 border border-gray-100">
          <h2 className="text-xl font-bold text-[#bb2988] mb-2">Profils recherchés</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Chirurgien-dentiste généraliste ou spécialisé</li>
            <li>Assistante dentaire / hygiéniste</li>
            <li>Secrétariat médico-dentaire</li>
            <li>Coordination administrative et relation patient</li>
          </ul>
        </article>

        <article className="bg-white shadow rounded-xl p-5 border border-gray-100">
          <h2 className="text-xl font-bold text-[#bb2988] mb-2">Ce que nous valorisons</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Excellente communication avec les patients</li>
            <li>Rigueur clinique et sens de l’hygiène</li>
            <li>Capacité à travailler en équipe pluridisciplinaire</li>
            <li>Volonté de formation continue</li>
          </ul>
        </article>
      </div>

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
          <option value="Adjointe administrative">Adjointe administrative</option>
          <option value="Chirurgien dentaire">Chirurgien dentaire</option>
        </select>

        <textarea
          name="message"
          placeholder="Message / Motivation"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="border p-3 rounded w-full"
        />

        <p className="text-xs text-red-500 italic">
          * Joignez votre CV (et éventuellement vos attestations) dans le mail qui
          s’ouvrira automatiquement.
        </p>

        <button type="submit" className="btn-cta">
          Envoyer ma candidature
        </button>
      </form>

      <div className="max-w-3xl mx-auto mt-10 bg-[#ad9d64]/10 border border-[#ad9d64]/20 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3 text-[#ad9d64]">Questions fréquentes</h2>
        <div className="text-gray-700 space-y-3">
          <p>
            <strong>Acceptez-vous les candidatures spontanées ?</strong>
            <br />
            Oui, toute l’année. Nous conservons les profils pertinents pour les
            ouvertures de poste.
          </p>
          <p>
            <strong>Quel est le délai de réponse ?</strong>
            <br />
            Selon le volume de candidatures, une première réponse peut intervenir
            sous 1 à 3 semaines.
          </p>
          <p>
            <strong>Puis-je postuler sans expérience en cabinet dentaire ?</strong>
            <br />
            Oui pour certains postes, si vous démontrez motivation, sens du service
            et capacité d’apprentissage rapide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rejoindre;
