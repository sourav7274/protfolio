const SectionMarker = ({ label, title }) => (
  <div className="mb-12 lg:mb-16 max-w-5xl mx-auto">
    <p className="kicker editorial-rule mb-4">{label}</p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-[-0.035em] leading-none text-balance max-w-[15ch]">
      {title}
    </h2>
  </div>
);

export default SectionMarker;
