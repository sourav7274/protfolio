const SectionMarker = ({ index, label, title }) => (
  <div className="mb-12">
    <p className="kicker mb-3">
      // {index} — {label}
    </p>
    <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary">
      {title}
    </h2>
  </div>
);

export default SectionMarker;
