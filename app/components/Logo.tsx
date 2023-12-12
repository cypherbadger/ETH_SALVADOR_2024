import Image from "next/image";

const Logo = () => {
  const textStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" // Sombra más oscura
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-full mb-12">
      <div className="flex flex-col mt-[25vw]">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-bold font-pixelized text-white" style={textStyle}>
          ETH Salvador <span className="whitespace-nowrap">2024</span>
        </h1>
      </div>
      <h1 className="text-2xl md:text-4xl text-center font-bold font-pixelized text-white" style={textStyle}>
        Marzo <span className="whitespace-nowrap">09</span>
      </h1>
    </div>
  );
};

export default Logo;
