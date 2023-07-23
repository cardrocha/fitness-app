import Image from "next/image";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="container mx-auto">
      <div
        className="flex items-center justify-around
      py-4"
      >
        <div className="flex flex-col text-primary gap-2">
          <a className="flex gap-2" title="Acesse nosso facebook" href="#">
            <AiFillFacebook className="text-primary text-2xl cursor-pointer" />
            Facebook
          </a>

          <a className="flex gap-2" title="Siga-nos no instagram" href="#">
            <AiFillInstagram className="text-primary text-2xl cursor-pointer" />
            Instagram
          </a>

          <a className="flex gap-2" title="Siga-nos no twitter" href="#">
            <AiFillTwitterSquare className="text-primary text-2xl cursor-pointer" />
            Twitter
          </a>

          <a className="flex gap-2" title="Se increva no nosso canal" href="#">
            <AiFillYoutube className="text-primary text-2xl cursor-pointer" />
            Youtube
          </a>
        </div>
        <Image
          src="/logo_fitness.svg"
          width={100}
          height={60}
          alt="logo da academia robust habit"
        />
        <div className="flex flex-col gap-2">
          <a
            title="clique aqui"
            className="font-bebas text-2xl text-primary"
            href="#sobre"
          >
            SOBRE
          </a>
          <a
            title="clique aqui"
            className="font-bebas text-2xl text-primary"
            href="#servicos"
          >
            SERVIÇOS
          </a>
          <a
            title="clique aqui"
            className="font-bebas text-2xl text-primary"
            href="#precos"
          >
            PREÇOS
          </a>
          <a
            title="clique aqui"
            className="font-bebas text-2xl text-primary"
            href="#equipamentos"
          >
            EQUIPAMENTOS
          </a>
        </div>
      </div>
      <span className="flex justify-center text-mont font-light text-xs text-primary">
        &copy; {currentYear} - Robust Habit - Todos direitos reservados
      </span>
    </section>
  );
};

export default Footer;
