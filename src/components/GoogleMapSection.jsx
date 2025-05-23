const GoogleMapSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl text-[#ad9d64] font-bold text-center mb-6">
        Nous trouver
      </h2>
      <div className="w-full h-96 max-w-6xl mx-auto">
        <iframe
          className="w-full h-full rounded-lg shadow"
          src="https://www.google.com/maps?q=Clinique-Dentaire-Dabia,+Liberté+6,+Dakar,+Senegal&output=embed"
          allowFullScreen
          loading="lazy"
          title="Localisation"
        />
      </div>
    </section>
  );
};

export default GoogleMapSection;
