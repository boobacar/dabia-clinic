import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import temoin1 from "../assets/temoin1.webp";
import temoin2 from "../assets/temoin2.webp";
import temoin3 from "../assets/temoin3.webp";
import temoin4 from "../assets/temoin4.webp";

const testimonials = [
  {
    nom: "Awa Ndiaye",
    photo: temoin1,
    texte: "Service exceptionnel !",
  },
  {
    nom: "Cheikh Diop",
    photo: temoin2,
    texte: "Le personnel est très professionnel.",
  },
  {
    nom: "Mamadou Ndiaye",
    photo: temoin3,
    texte: "Je recommande fortement Dabia.",
  },
  {
    nom: "Moussa Sarr",
    photo: temoin4,
    texte: "Ambiance très rassurante.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl text-[#ad9d64] font-bold mb-8">Témoignages</h2>
      <div className="max-w-2xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-md p-6 rounded-lg text-gray-700 flex flex-col items-center space-y-4">
                <img
                  src={t.photo}
                  alt={t.nom}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="text-lg italic text-center">“{t.texte}”</p>
                <p className="font-semibold text-dabiaYellow">{t.nom}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
