import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="pt-4">
          <Image
            src="/logo_fitness1.png"
            width={100}
            height={60}
            alt="logo da academia robust habit"
          />
        </h1>
        <nav className="relative z-30">
          <ul className="font-bebas flex gap-8 mr-14 text-2xl text-white font-bold pt-8">
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
            <li>
              <a href="#sobre">REGISTRE-SE</a>
            </li>
          </ul>
        </nav>
        <Image
          className="absolute top-0 right-0 z-0"
          src="/Rectangle.png"
          width={705}
          height={700}
          alt="seção hero"
        />
        <Image
          className="absolute top-20 right-24 z-20"
          src="/pngwing.png"
          width={474}
          height={626}
          alt="seção hero"
        />
      </div>
    </div>
  );
};

export default Menu;
