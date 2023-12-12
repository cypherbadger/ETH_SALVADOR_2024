const actInfo: ActCardInfo[] = [
  {
    id: crypto.randomUUID(),
    romanNumeral: "I",
    title: "Ethereum en El Salvador: Fundamentos",
    topics: [
      "Fundamentos de Ethereum y su impacto local",
      "Ley Bitcoin y uso de Ethereum",
      "Ley de Activos Digitales: Efectos en Ethereum",
      "Oportunidades de Ethereum en legislación local",
      "DeFi en El Salvador: Innovación con Ethereum",
      "Cultura digital: NFTs, DAOs con Ethereum",
      "Ethereum en negocios salvadoreños",
      "Ethereum: Herramienta de desarrollo"
    ],
  },
  {
    id: crypto.randomUUID(),
    romanNumeral: "II",
    title: "Ethereum: Casos de Uso y Desarrollo",
    topics: [
      "Desarrollo en Ethereum: Contratos y DApps",
      "Ethereum y sostenibilidad: Proyectos regenerativos",
      "Gobernanza digital y DAOs en contexto legal",
      "Tokenización en economía digital salvadoreña",
      "Educación y formación en Ethereum",
      "Adopción de Ethereum: Retos y soluciones",
      "Integración de Ethereum en sectores público y privado",
      "Futuro de Ethereum en El Salvador"
    ],
  },
  {
    id: crypto.randomUUID(),
    romanNumeral: "III",
    title: "Futuro: Ethereum y Regulación en El Salvador",
    topics: [
      "El Salvador: Modelo de adopción de cripto",
      "Desafíos y oportunidades regulatorias para Ethereum",
      "Legislación de activos digitales y Ethereum",
      "Colaboración público-privada en torno a Ethereum",
      "Ethereum en proyectos de impacto social",
      "Seguridad y privacidad en uso de Ethereum",
      "Ethereum en el panorama global",
      "Ethereum en economía y sociedad salvadoreña"
    ],
  },
];

const ActCard = ({ romanNumeral, topics, title }: ActCardInfo) => {
  return (
    <article className="sm:w-2/3 md:w-auto sm:flex flex-col mb-6">
      <h5 className="text-lg text-center font-bold font-pixelized text-[#FFA479] uppercase">
        Act {romanNumeral}
      </h5>
      <h2 className="text-lg md:text-xl text-center font-semibold font-pixelized mb-4">
        {title}
      </h2>
      <div className="flex-grow bg-white/10 backdrop-blur-md border-s-[#FFA479] border-s-4 sm:rounded-md p-4">
        <ul>
          {topics
            .map((topic) => {
              return { id: crypto.randomUUID(), topic };
            })
            .map(({ id, topic }) => (
              <li
                key={id}
                className="text-base text-center p-2 border-b-[1.5px] border-b-white/30 last-of-type:border-none"
              >
                {topic}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

const Acts = () => {
  return (
    <section className="sm:flex flex-col md:flex-row justify-center items-center md:items-stretch md:gap-10 py-10">
      {actInfo.map(({ id, romanNumeral, topics, title }) => (
        <ActCard
          id={id}
          key={id}
          romanNumeral={romanNumeral}
          topics={topics}
          title={title}
        />
      ))}
    </section>
  );
};

export default Acts;
