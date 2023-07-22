import Image from "next/image";

import React from 'react'

const ScrollBar = () => {
  return (
    <div className="flex bg-secondary py-2 mt-14">
      <div className="font-bebas animate-marquee-infinite text-3xl flex items-center gap-11 break-words whitespace-nowrap text-primary h-auto">
        <Image
          src="/icon-barbell.png"
          width={45}
          height={45}
          alt="icone barra"
        />
        <span>consultoria individual</span>
        <Image
          src="/icon-barbell.png"
          width={45}
          height={45}
          alt="icone barra"
        />
        <span>+20 professores</span>
        <Image
          src="/icon-barbell.png"
          width={45}
          height={45}
          alt="icone barra"
        />
        <span>treine da sua forma</span>
        <Image
          src="/icon-barbell.png"
          width={45}
          height={45}
          alt="icone barra"
        />
        <span>+15 unidades</span>
        <Image
          src="/icon-barbell.png"
          width={45}
          height={45}
          alt="icone barra"
        />
        <span>montamos seu treino</span>
        <Image
          src="/icon-barbell.png"
          width={45}
          height={45}
          alt="icone barra"
        />
      </div>
    </div>
  );
}

export default ScrollBar
