import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import TechScrolly from "../components/TechScrolly";
import technologies from "../data/technologies";

const Technologie = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title="Technologies dentaires à Dakar – Clinique Dentaire DABIA"
        description="Radiographie panoramique, CBCT 3D, scanner intra-oral, laser et autoclave classe B : découvrez le plateau technique de la Clinique Dentaire DABIA à Dakar."
        canonical="https://www.cliniquedentairedabia.com/infos/technologie"
        url="https://www.cliniquedentairedabia.com/infos/technologie"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Technologie" }]}
      />

      <motion.h1
        className="text-4xl font-bold text-center text-[#ad9d64] mb-5"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos technologies dentaires
      </motion.h1>

      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
        À la Clinique Dentaire DABIA, la technologie est au service de décisions
        plus fiables, de soins plus confortables et d’un meilleur suivi dans le
        temps. Notre objectif est de réduire les approximations : mieux voir,
        mieux diagnostiquer, mieux traiter.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <article className="bg-white border border-gray-100 shadow rounded-xl p-5">
          <h2 className="font-bold text-[#bb2988] mb-2">Précision diagnostique</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Imagerie 2D/3D, analyse clinique assistée et visualisation intra-orale
            pour détecter plus tôt les problèmes dentaires et planifier les soins
            avec davantage de précision.
          </p>
        </article>

        <article className="bg-white border border-gray-100 shadow rounded-xl p-5">
          <h2 className="font-bold text-[#bb2988] mb-2">Confort patient</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Scanner intra-oral sans pâte d’empreinte, protocoles optimisés et
            traitements mieux anticipés pour réduire le stress et la durée des
            rendez-vous.
          </p>
        </article>

        <article className="bg-white border border-gray-100 shadow rounded-xl p-5">
          <h2 className="font-bold text-[#bb2988] mb-2">Sécurité & hygiène</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Chaîne de stérilisation conforme et matériel contrôlé pour maintenir un
            haut niveau de sécurité, notamment en chirurgie orale et implantologie.
          </p>
        </article>
      </div>

      <div className="flex justify-center mb-10">
        <Link to="/rendez-vous" className="btn-cta">
          Prendre un rendez-vous
        </Link>
      </div>

      <TechScrolly items={technologies} />

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <article className="bg-[#ad9d64]/10 border border-[#ad9d64]/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 text-[#ad9d64]">
            Pourquoi investir dans ces équipements ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Parce qu’un bon traitement commence par un bon diagnostic. En
            implantologie, orthodontie, endodontie ou parodontologie, une
            planification précise limite les retouches, réduit les incertitudes et
            améliore la stabilité du résultat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cette approche permet aussi de mieux expliquer votre situation : vous
            visualisez vos radios et scans, vous comprenez les étapes et vous prenez
            vos décisions avec plus de sérénité.
          </p>
        </article>

        <article className="bg-[#bb2988]/5 border border-[#bb2988]/10 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 text-[#bb2988]">Questions fréquentes</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Les examens sont-ils douloureux ?</strong>
              <br />
              Non. La plupart des examens d’imagerie et de scan sont rapides,
              non invasifs et généralement bien tolérés.
            </p>
            <p>
              <strong>Pourquoi un CBCT plutôt qu’une radio simple ?</strong>
              <br />
              Le CBCT est utilisé dans des cas précis (implants, chirurgie,
              anatomie complexe) quand une vue 3D apporte une vraie valeur clinique.
            </p>
            <p>
              <strong>Ces technologies remplacent-elles l’expertise du dentiste ?</strong>
              <br />
              Non. Elles complètent l’examen clinique et renforcent la qualité des
              décisions prises par le praticien.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Technologie;
