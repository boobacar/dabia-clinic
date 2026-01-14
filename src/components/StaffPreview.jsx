import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sao from "../assets/sao.webp";

const StaffPreview = () => {
  return (
    <section className="relative py-10 px-4 overflow-hidden">
      {/* Background decor (optional subtle gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#bb2988] font-semibold tracking-wider text-sm uppercase">
            Excellence & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl text-[#ad9d64] font-bold mt-2">
            Notre Équipe
          </h2>
          <div className="h-1 w-20 bg-[#ad9d64] mx-auto mt-4 rounded-full opacity-60" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Image Column */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            className="relative group mx-auto w-full max-w-md md:max-w-full"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-[2rem] border-5 border-[#ad9d64]/30 rotate-3 transition-transform duration-500 group-hover:rotate-0" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
              <img
                src={sao}
                alt="Dr. Fatoumata Sao - Dentiste Dakar"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[#ad9d64]/20 shadow-lg relative">
              {/* Quote icon decoration */}
              <div className="absolute top-6 right-8 text-[#ad9d64]/10 text-8xl font-serif leading-none select-none">
                ”
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#bb2988] mb-1">
                Dr Fatoumata SAO
              </h3>
              <p className="text-[#ad9d64] font-medium tracking-wide text-sm mb-6 uppercase">
                Fondatrice & Chirurgien-Dentiste
              </p>

              <div className="text-gray-700 space-y-4 leading-relaxed relative z-10">
                <p>
                  Passionnée par l'excellence et le bien-être de ses patients,{" "}
                  <strong>Dr Sao</strong> incarne l’âme de la clinique DABIA.
                  Forte de plusieurs années d'expérience, elle maîtrise les
                  techniques de pointe en <em>implantologie</em>,{" "}
                  <em>orthodontie</em> et <em>esthétique dentaire</em>.
                </p>
                <p>
                  Son approche humaine, alliée à une rigueur technique, garantit
                  des soins sur mesure où précision rime avec douceur. Sa vision
                  ? Redonner le sourire en toute confiance.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <Link to="/personnel" className="btn-cta btn-cta-base group">
                  Rencontrer l'équipe
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffPreview;
