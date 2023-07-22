import React from "react";
import hero from "../../public/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <p className="font-bungee text-7xl text-white mt-32">AQUI NÃO SE</p>
          <p className="font-bebas text-8xl text-white mt-7">TREINA FOFO</p>
          <p className="font-mont text-lg mt-7 text-white">
            Transforme-se na nossa academia! Oferecemos equipamentos modernos,
            <br />
            instrutores qualificados e aulas para todos os níveis. Alcance seus
            objetivos
            <br /> fitness conosco. Experimente hoje!
          </p>
          <div
            className="bg-no-repeat bg-contain bg-center h-fit inline-flex items-center gap-4 font-bebas text-3xl text-white mt-9 p-6 relative"
            style={{
              backgroundImage: `url(/Rectangle_2.png)`,
            }}
          >
            Começar
            <Image src="/Arrow.png" width={18} height={18} alt="icone seta" />
          </div>
        </div>
      </div>
      <div className="bg-black py-5 mt-14"></div>
    </>
  );
};

export default Hero;
