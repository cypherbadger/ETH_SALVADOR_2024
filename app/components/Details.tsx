const Details = () => {
  const reasons = [
    {
      title: "Why?",
      copy: "To help people understand DAOs, design DAOs, build DAOs & grow DAOs",
    },
    {
      title: "What's going down?",
      copy: "2 weeks of talks, panels, demos, workshops & more - all about DAOs",
    },
    {
      title: "Who's it for?",
      copy: "Anyone who wants to learn about DAOs, or build a DAO",
    },
    { title: "When?", copy: "09 Marzo 2024" },
    { title: "Where?", copy: "San Salvador, El Salvador" },
    {
      title: "How much?",
      copy: "TBA",
    },
  ];
  return (
    <div className="flex flex-col space-y-4 text-center mt-8 md:mt-10 px-2 mb-8">
      {reasons.map((t, i) => (
        <dl key={i} className="mb-2">
          <dt className="text-xl font-bold font-pixelized">{t.title}</dt>
          <dd className="text-base">{t.copy}</dd>
        </dl>
      ))}
    </div>
  );
};

export default Details;
