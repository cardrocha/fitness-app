import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section id="sobre" className="container mx-auto z-30 relative">
        <div>
          <p className="font-bungee text-6xl md:text-7xl xl:text-7xl p-3 text-primary mt-32">
            AQUI NÃO SE
          </p>
          <p className="font-bebas text-7xl md:text-8xl xl:text-8xl p-3 leading-3 text-primary mt-7">
            TREINA FOFO
          </p>
          <p className="font-mont text-lg mt-7 p-3 text-primary md:w-[410px] xl:w-[1280px]">
            Transforme-se na nossa academia! Oferecemos equipamentos modernos,
            <br />
            instrutores qualificados e aulas para todos os níveis. Alcance seus
            objetivos
            <br /> fitness conosco. Experimente hoje!
          </p>
          <a
            href="#precos"
            title="clique aqui"
            className="bg-secondary py-2 px-8 clip-path-mypolygon inline-flex items-center gap-4 font-bebas text-3xl text-primary mt-9 ml-3 cursor-pointer"
          >
            Começar
            <Image src="/Arrow.png" width={18} height={18} alt="icone seta" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
