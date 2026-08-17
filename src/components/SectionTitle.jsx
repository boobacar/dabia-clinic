const SectionTitle = ({ title, subtitle, center = true, className = "", id }) => (
  <header className={`section-heading ${center ? "section-heading--center" : ""} ${className}`}>
    {subtitle && <p className="section-kicker">{subtitle}</p>}
    <h2 id={id}>{title}</h2>
  </header>
);

export default SectionTitle;
