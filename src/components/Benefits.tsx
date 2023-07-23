"use client";

import Image from "next/image";
import React from "react";

const Benefits = () => {
  const [hover, setHover] = React.useState(false);
  const [hover2, setHover2] = React.useState(false);
  const [hover3, setHover3] = React.useState(false);
  const [hover4, setHover4] = React.useState(false);

  const handlerMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handlerMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };

  const handlerMouseEnter3 = () => {
    setHover3(true);
  };

  const handleMouseLeave3 = () => {
    setHover3(false);
  };

  const handlerMouseEnter4 = () => {
    setHover4(true);
  };

  const handleMouseLeave4 = () => {
    setHover4(false);
  };

  return (
    <section className="container mx-auto mb-36">
      <div>
        <h2 className="font-bungee text-6xl text-center text-primary mt-40">
          Nossos <span className="font-bebas text-7xl">diferenciais</span>
        </h2>
        <div className="flex mt-24">
          <div
            onMouseEnter={handlerMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${
              hover ? "bg-secondary" : ""
            } duration-300 text-primary p-6 `}
          >
            <Image
              src="/sport.png"
              width={76}
              height={76}
              alt="icone de diferenciais"
            />
            <h3 className="font-bebas text-3xl mt-3">Equipe qualificada</h3>
            <p className="font-mont text-lg mt-3 w-[273px]">
              Profissionais altamente capacitados e motivados a ajudá-lo a
              alcançar seus objetivos.
            </p>
            <a
              onMouseEnter={handlerMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`${
                hover ? "bg-background" : "bg-secondary"
              } duration-300 leading-5 py-2 pl-4 pr-7 mt-5 clip-path-mypolygon inline-flex items-center gap-6 font-bebas text-base text-primary p-8 cursor-pointer `}
            >
              conheça nossos
              <br /> profissionais
              <Image src="/Arrow.png" width={20} height={20} alt="icone seta" />
            </a>
          </div>
          <div
            onMouseEnter={handlerMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className={`${
              hover2 ? "bg-secondary" : ""
            } duration-300 text-primary p-6 `}
          >
            <Image
              src="/dumbbell.png"
              width={76}
              height={76}
              alt="icone de diferenciais"
            />
            <h3 className="font-bebas text-3xl mt-3">Ambiente motivador</h3>
            <p className="font-mont text-lg mt-3 w-[273px]">
              Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado
              durante seus treinos.
            </p>
            <a
              onMouseEnter={handlerMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className={`${
                hover2 ? "bg-background" : "bg-secondary"
              } duration-300 leading-5 py-2 pl-4 pr-7 mt-5 clip-path-mypolygon inline-flex items-center gap-6 font-bebas text-base text-primary p-8 cursor-pointer `}
            >
              Faça um tour
              <br /> virtual
              <Image src="/Arrow.png" width={20} height={20} alt="icone seta" />
            </a>
          </div>
          <div
            onMouseEnter={handlerMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            className={`${
              hover3 ? "bg-secondary" : ""
            } duration-300 text-primary p-6 `}
          >
            <Image
              src="/trainer.png"
              width={76}
              height={76}
              alt="icone de diferenciais"
            />
            <h3 className="font-bebas text-3xl mt-3">Aulas Diversas</h3>
            <p className="font-mont text-lg mt-3 w-[273px]">
              Oferecemos uma ampla variedade de aulas, desde musculação até
              dança, para atender a todos os interesses.
            </p>
            <a
              onMouseEnter={handlerMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className={`${
                hover3 ? "bg-background" : "bg-secondary"
              } duration-300 leading-5 py-4 pl-4 pr-7 mt-5 clip-path-mypolygon inline-flex items-center gap-6 font-bebas text-lg text-primary p-8 cursor-pointer `}
            >
              Ver modalidades
              <Image src="/Arrow.png" width={20} height={20} alt="icone seta" />
            </a>
          </div>
          <div
            onMouseEnter={handlerMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            className={`${
              hover4 ? "bg-secondary" : ""
            } duration-300 text-primary p-6 `}
          >
            <Image
              src="/gym.png"
              width={76}
              height={76}
              alt="icone de diferenciais"
            />
            <h3 className="font-bebas text-3xl mt-3">Equipamentos Modernos</h3>
            <p className="font-mont text-lg mt-3 w-[273px]">
              Mantemos nossos equipamentos atualizados para garantir a segurança
              e eficiência de nossos clientes.
            </p>
            <a
              onMouseEnter={handlerMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              className={`${
                hover4 ? "bg-background" : "bg-secondary"
              } duration-300 leading-5 py-2 pl-4 pr-7 mt-5 clip-path-mypolygon inline-flex items-center gap-6 font-bebas text-base text-primary p-8 cursor-pointer `}
            >
              Faça um tour
              <br /> virtual
              <Image src="/Arrow.png" width={20} height={20} alt="icone seta" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
