import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="pt-4">
          <Image
            src="/logo_fitness.svg"
            width={100}
            height={60}
            alt="logo da academia robust habit"
          />
        </h1>
        <nav className="relative z-30">
          <ul className="font-bebas flex items-center gap-8 mr-14 text-2xl text-primary font-bold pt-8">
            <li>
              <a href="#sobre">SOBRE</a>
            </li>
            <li>
              <a href="#sobre">SERVIÇOS</a>
            </li>
            <li>
              <a href="#sobre">PREÇOS</a>
            </li>
            <li>
              <a href="#sobre">EQUIPAMENTOS</a>
            </li>
            <li
              className="bg-no-repeat bg-contain bg-center p-7 h-fit"
              style={{
                backgroundImage: `url(/Rectangle_2.png)`,
              }}
            >
              <a href="#sobre">REGISTRE-SE</a>
            </li>
          </ul>
        </nav>
        <Image
          className="absolute top-0 right-0 z-0"
          src="/Rectangle.png"
          width={735}
          height={700}
          alt="seção hero"
        />
        <Image
          className="absolute top-28 right-40 z-20"
          src="/pngwing.png"
          width={473}
          height={626}
          alt="seção hero"
        />
      </div>
    </section>
  );
};

export default Menu;