import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section className="container mx-auto">
      <div className="sm:flex flex-col md:flex-row xl:flex-row text-center items-center sm:justify-center md:justify-between xl:justify-between">
        <h1 className="pt-4 ml-5 md:ml-3 xl:ml-4">
          <Image
            src="/logo_fitness.svg"
            width={100}
            height={60}
            alt="logo da academia robust habit"
          />
        </h1>
        <nav className="relative z-30">
          <ul className="font-bebas sm:flex flex-col md:flex-row xl:flex-row items-center gap-8 sm:mr-0 md:mr-2 xl:mr-14 text-2xl text-primary font-bold pt-8">
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
                className="bg-secondary hover:text-gray-200 py-2 px-8 clip-path-mypolygon"
                href="#sobre"
              >
                REGISTRE-SE
              </a>
            </li>
          </ul>
        </nav>
      </div>
        <div className="absolute md:top-0 xl:top-0 right-0 w-[735px] md:h-[872px] xl:h-[730px] z-0">
          <Image
            src="/Rectangle.png"
            alt="fundo hero"
            fill
          />
        </div>
        <div className="absolute sm:hidden md:block xl:block md:top-[335px] xl:top-[95px] md:w-[373px] md:h-[526px] xl:w-[473px] xl:h-[626px] md:right-5 xl:right-40 z-20">
          <Image src="/pngwing.png" alt="cara segurando peso nas mãos" fill />
        </div>
    </section>
  );
};

export default Menu;
