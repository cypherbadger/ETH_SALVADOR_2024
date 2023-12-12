const Intro = () => {
  const text = [
    "Un espacio único para aprender, hackear y visionar el futuro del web3 en un país que celebra la innovación digital con Ethereum como protagonista.",
    "Descubre el potencial de las DAOs, DeFi y NFTs, y cómo Ethereum está marcando la pauta en el nuevo internet.",
    "Conéctate con investigadores, desarrolladores y pioneros del ecosistema de Ethereum en un entorno vibrante y lleno de energía salvadoreña."
  ];

  return (
    <>
      <p className="max-w-2xl mx-auto px-2 text-center text-xl mb-12">
        ETH Salvador 2024: Aprende, innova y conecta en el corazón de la revolución digital en El Salvador. Un evento imperdible para entusiastas de Ethereum y la tecnología blockchain.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14 px-4">
        <a
          href="https://www.notion.so/826fca925faf4edeaa94f73b9561e606?pvs=21"
          target="_blank"
          rel="noopener noreferrer"
          title="Tickets"
          className="button"
        >
          Consigue tus entradas
        </a>
        <a href="#schedule" className="button">
          Agenda completa
        </a>
      </div>
      <div className="max-w-xl space-y-6 mx-auto px-2">
        {text.map((t, i) => (
          <div className="bg-white/10 backdrop-blur-md border-s-[#FFA479] border-4 sm:rounded-md p-4" key={i}> {/* Fondo difuminado con borde */}
            <p className="text-center text-base">
              {t}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Intro;
