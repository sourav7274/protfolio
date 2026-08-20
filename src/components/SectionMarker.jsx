const SectionMarker = ({ label, title }) => (
  <div className="text-center mb-12 lg:mb-16">
    <p className="kicker mb-4">{label}</p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-[-0.035em] leading-none text-balance">
      {title}
    </h2>
    <span className="block h-px w-12 mx-auto mt-7 bg-accent-green" />
  </div>
);

export default SectionMarker;
