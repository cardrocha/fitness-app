import Image from "next/image";
import React from "react";

const Numbers = () => {
  return (
    <section id="equipamentos" className="container mx-auto relative">
      <div>
        <Image
          className="absolute top-0 left-0 z-0"
          src="/Rectangle_10.png"
          width={368}
          height={300}
          alt="fundo section numbers"
        />
        <Image
          className="absolute top-36 left-20 z-10"
          src="/pngwing_2.png"
          width={380}
          height={300}
          alt="duas pessoas fazendo pose segurando pesos"
        />
      </div>
      <div className="container mx-auto">
        <h3 className="font-bungee text-primary text-6xl text-right pr-36 pt-48">
          faça parte <span className="font-bebas text-[82px]">da família</span>
        </h3>
        <p className="font-mont text-lg text-primary text-left pl-[470px]">
          Nossa academia tem milhares de clientes satisfeitos com resultados
          surpreendentes.
          <br /> Junte-se a nós e comece a transformar seu corpo agora!
        </p>
        <div className="flex gap-12 items-center justify-end mr-28">
          <div className="text-primary text-left mt-[70px]">
            <span className="font-bebas pl-6 text-6xl">+ 15</span>
            <p className="font-mont text-lg">
              Unidades na cidade de
              <br /> São Paulo.
            </p>
          </div>
          <div className="text-primary text-left mt-[70px]">
            <span className="font-bebas pl-3 text-6xl">+ 2000</span>
            <p className="font-mont text-lg">
              Alunos matriculados
              <br /> em nossas unidades.
            </p>
          </div>
          <div className="text-primary text-left mt-[70px]">
            <span className="font-bebas pl-4 text-6xl">+ 100</span>
            <p className="font-mont text-lg">
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
