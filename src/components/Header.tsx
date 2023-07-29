'use client'

import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row xl:flex-row text-center items-center md:w-[800px] lg:w-[1280px] xl:w-[1800px] justify-center md:justify-between xl:justify-between">
        <div className="flex items-center gap-56 justify-around">
          <h1 className="pt-4 ml-0 md:ml-3 lg:ml-10 xl:ml-4">
            <Image
              src="/logo_fitness.svg"
              width={100}
              height={60}
              alt="logo da academia robust habit"
            />
          </h1>
          <AiOutlineMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-4xl text-secondaryDark flex cursor-pointer sm:hidden xl:hidden"
          />
        </div>
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex md:flex xl:flex relative z-30 bg-secondaryDark w-full justify-center mt-2 md:mt-0 lg:mt-0 xl:mt-0 p-5 md:p-0 xl:p-0 md:bg-transparent xl:bg-transparent`}
        >
          <ul className="font-bebas sm:flex flex-col md:flex-row xl:flex-row items-center gap-8 sm:mr-0 md:mr-2 xl:mr-14 text-2xl text-primary font-bold pt-0 md:pt-8 xl:pt-8">
            <li>
              <a className="hover:text-gray-200" href="#sobre">
                SOBRE
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#servicos">
                SERVIÇOS
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#precos">
                PREÇOS
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#equipamentos">
                EQUIPAMENTOS
              </a>
            </li>
            <li className="mt-3 md:mt-0 xl:mt-0">
              <a
                className="bg-secondary hover:bg-secondaryVariation hover:text-primary py-2 px-8 clip-path-mypolygon"
                href="#sobre"
              >
                REGISTRE-SE
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute md:top-0 lg:top-0 xl:top-0 right-0 w-[735px] md:h-[864px] lg:h-[866px] xl:h-[812px] z-0">
        <Image src="/Rectangle.png" alt="fundo hero" fill />
      </div>
      <div className="absolute sm:hidden md:block xl:block md:top-[328px] lg:top-[329px] xl:top-[180px] md:w-[373px] md:h-[526px] xl:w-[473px] xl:h-[621px] md:right-5 xl:right-40 z-20">
        <Image src="/pngwing.png" alt="cara segurando peso nas mãos" fill />
      </div>
    </section>
  );
};

export default Menu;
