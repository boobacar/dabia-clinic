import { Link } from "react-router-dom";
import competences from "../data/competences";

const Competences = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl text-[#ad9d64] font-bold text-center mb-8">
        Nos Compétences
      </h2>
      <div className="flex justify-center mb-10">
        <Link
          to="/rendez-vous"
          className="animate-bounce inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
        >
          Prendre un rendez-vous
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {competences.map((item, index) => (
          <Link
            to={`/competences/${item.slug}`}
            key={index}
            className="relative h-48 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.titre}
              className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition">
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{item.titre}</h3>
                <p className="text-sm">{item.description.slice(0, 50)}...</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Competences;
