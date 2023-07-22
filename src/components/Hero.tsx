import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="container mx-auto">
        <div>
          <p className="font-bungee text-7xl text-primary mt-32">AQUI NÃO SE</p>
          <p className="font-bebas text-8xl text-primary mt-7">TREINA FOFO</p>
          <p className="font-mont text-lg mt-7 text-primary">
            Transforme-se na nossa academia! Oferecemos equipamentos modernos,
            <br />
            instrutores qualificados e aulas para todos os níveis. Alcance seus
            objetivos
            <br /> fitness conosco. Experimente hoje!
          </p>
          <div
            className="bg-no-repeat bg-contain bg-center h-fit inline-flex items-center gap-4 font-bebas text-3xl text-primary mt-9 p-6 cursor-pointer relative"
            style={{
              backgroundImage: `url(/Rectangle_2.png)`,
            }}
          >
            Começar
            <Image src="/Arrow.png" width={18} height={18} alt="icone seta" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
