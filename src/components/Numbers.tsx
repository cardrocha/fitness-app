import Image from "next/image";
import React from "react";

const Numbers = () => {
  return (
    <section id="equipamentos" className="container mx-auto relative">
      <div>
        <div className="absolute hidden md:block xl:block md:top-0 xl:top-0 left-0 z-0 w-[380px] md:h-[700px]">
          <Image src="/Rectangle_10.png" alt="fundo section numbers" fill />
        </div>
        <div className="absolute hidden md:block xl:block md:top-[288px] xl:top-[134px] left-10 z-10 md:w-[300px] xl:w-[400px] md:h-[400px] xl:h-[520px]">
          <Image
            src="/pngwing_2.png"
            alt="duas pessoas fazendo pose segurando pesos"
            fill
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center md:items-end xl:items-end md:h-[550px] xl:h-[516px]">
        <h3 className="font-bungee text-primary text-5xl xl:text-6xl text-center md:text-right xl:text-right p-2 md:pr-5 xl:pr-36 pt-10 xl:pt-48">
          faça parte{" "}
          <span className="font-bebas text-6xl md:text-5xl xl:text-[82px]">
            da família
          </span>
        </h3>
        <p className="font-mont text-lg text-primary text-center xl:text-left md:w-[700px] xl:w-[1280px] md:pl-40 xl:pl-[470px] p-2">
          Nossa academia tem milhares de clientes satisfeitos com resultados
          surpreendentes.
          <br /> Junte-se a nós e comece a transformar seu corpo agora!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 md:gap-4 xl:gap-12 place-items-center items-center xl:justify-end md:mr-0 xl:mr-20">
          <div className="text-primary text-left mt-20 md:mt-5 xl:mt-[70px]">
            <span className="font-bebas pl-6 text-5xl xl:text-6xl">+ 15</span>
            <p className="font-mont text-sm xl:text-lg">
              Unidades na cidade de
              <br /> São Paulo.
            </p>
          </div>
          <div className="text-primary text-left mt-20 md:mt-5 xl:mt-[70px]">
            <span className="font-bebas pl-3 text-5xl xl:text-6xl">+ 2000</span>
            <p className="font-mont text-sm xl:text-lg">
              Alunos matriculados
              <br /> em nossas unidades.
            </p>
          </div>
          <div className="text-primary text-left mt-20 md:mt-5 xl:mt-[70px]">
            <span className="font-bebas pl-4 text-5xl xl:text-6xl">+ 100</span>
            <p className="font-mont text-sm xl:text-lg">
              Professores altamente
              <br /> qualificados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
