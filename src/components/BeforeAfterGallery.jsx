// src/components/BeforeAfterCompare.jsx
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import avantApresImages from "../assets/avantApresImages";

export default function BeforeAfterGallery() {
  return (
    <section className="py-12 px-4 max-w-[100%] mx-auto">
      <h2 className="text-3xl text-[#ad9d64] font-bold text-center mb-8">
        Glissez pour comparer
      </h2>

      <div
        className=" grid gap-6
                      sm:grid-cols-1
                      md:grid-cols-2
                      lg:grid-cols-3"
      >
        {avantApresImages.map((pair, idx) => (
          <ReactCompareSlider
            key={idx}
            onlyHandleDraggable
            className={`
              rounded-lg shadow-md
              overflow-hidden
              h-48      /* mobile */
              md:h-64   /* tablette et plus */
              lg:h-80   /* desktop large */
              lg:w-150
            `}
            itemOne={
              <ReactCompareSliderImage
                src={pair.before}
                alt={`Avant ${idx + 1}`}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={pair.after}
                alt={`Après ${idx + 1}`}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            }
          />
        ))}
      </div>
    </section>
  );
}
