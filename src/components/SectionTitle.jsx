/**
 * SectionTitle
 * Standardized section heading component matching the "Notre Équipe" style.
 *
 * @param {string} title - Main heading text (Gold, H2)
 * @param {string} subtitle - Optional small pre-heading text (Pink, uppercase)
 * @param {boolean} center - Whether to center the text (default true)
 * @param {string} className - Additional classes
 */
const SectionTitle = ({ title, subtitle, center = true, className = "" }) => {
  return (
    <div
      className={`mb-5 ${center ? "text-center" : ""} ${className}`}
    >
      {subtitle && (
        <span className="text-[#bb2988] font-semibold tracking-wider text-sm uppercase block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl text-[#7d6d34] font-bold mt-2">
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-[#ad9d64] mt-4 rounded-full opacity-60 ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionTitle;
