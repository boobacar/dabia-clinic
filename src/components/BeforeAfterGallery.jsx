// src/components/BeforeAfterCompare.jsx
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import avantApresImages from "../assets/avantApresImages";

export default function BeforeAfterGallery() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl text-[#ad9d64] font-bold text-center mb-8 mx-auto items-center">
        Glissez pour comparer
      </h2>
      <div className=" space-y-8 grid md:grid-cols-2 lg:w-[100%] lg:grid-cols-3 gap-2 lg:gap-4">
        {avantApresImages.map((pair, idx) => (
          <ReactCompareSlider
            key={idx}
            itemOne={
              <ReactCompareSliderImage
                src={pair.before}
                alt={`Avant ${idx + 1}`}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={pair.after}
                alt={`Après ${idx + 1}`}
              />
            }
            className="rounded-lg shadow-md h-[100%] items-center"
          />
        ))}
      </div>
    </section>
  );
}
