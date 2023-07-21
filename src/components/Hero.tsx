import React from "react";
import hero from '../../public/hero.png'
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div>
        <p className="font-bungee text-7xl text-white mt-52">AQUI NÃO SE</p>
        <p className="font-bebas text-8xl text-white mt-7">TREINA FOFO</p>
        <p className="font-mont text-lg mt-7 text-white">
          Transforme-se na nossa academia! Oferecemos equipamentos modernos,
          <br />
          instrutores qualificados e aulas para todos os níveis. Alcance seus
          objetivos
          <br /> fitness conosco. Experimente hoje!
        </p>
        <p className="flex items-center gap-4 font-bebas text-3xl text-white bg-black p-1">
          Começar
          <Image src="/Arrow.png" width={18} height={18} alt="icone seta" />
        </p>
      </div>
    </div>
  );
};

export default Hero;
