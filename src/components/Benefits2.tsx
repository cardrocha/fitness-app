"use client";

import Image from "next/image";
import React from "react";
import Cards from "@/models/cards";

type Props = {
  card: Cards[];
};

const Benefits = ({ card }: Props) => {
  const [hover, setHover] = React.useState<number | null>(null);

  const handlerMouseEnter = (cardId: number) => {
    setHover(cardId);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <section id="servicos" className="container mx-auto mb-36">
      <div>
        <h2 className="font-bungee text-6xl text-center text-primary mt-40">
          Nossos <span className="font-bebas text-7xl">diferenciais</span>
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-24 place-items-center">
          {card.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => handlerMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
              className={`${
                hover === card.id ? "bg-secondary" : ""
              } duration-300 text-primary p-6 `}
            >
              <Image
                src={card.image}
                width={76}
                height={76}
                alt="icone de diferenciais"
              />
              <h3 className="font-bebas text-3xl mt-3">{card.title}</h3>
              <p className="font-mont text-lg mt-3 w-[273px]">
                {card.description}
              </p>
              <a
                onMouseEnter={() => handlerMouseEnter(card.id)}
                onMouseLeave={handleMouseLeave}
                className={`${
                  hover === card.id ? "bg-secondaryBackground" : "bg-secondary"
                } duration-300 leading-5 py-2 pl-4 pr-7 mt-5 clip-path-mypolygon inline-flex items-center gap-6 font-bebas text-base text-primary p-8 cursor-pointer w-[178px] h-[56px]`}
              >
                {card.button}
                <Image
                  src="/Arrow.png"
                  width={20}
                  height={20}
                  alt="icone seta"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
