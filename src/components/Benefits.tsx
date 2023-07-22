import Image from 'next/image'
import React from 'react'

const Benefits = () => {
  return (
    <section>
      <div>
        <h2 className="font-bungee text-6xl text-center text-primary mt-40">
          Nossos <span className="font-bebas text-7xl">diferenciais</span>
        </h2>
        <div className="flex p-20 mt-24">
          <div className="text-primary p-6">
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
            <a className="bg-secondary leading-5 py-2 pl-4 pr-7 mt-5 clip-path-mypolygon inline-flex items-center gap-6 font-bebas text-base text-primary p-8 cursor-pointer">
              conheça nossos
              <br /> profissionais
              <Image src="/Arrow.png" width={20} height={20} alt="icone seta" />
            </a>
          </div>
          <div className="text-primary p-6">
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
            <a className="bg-secondary leading-5 py-2 pl-4 pr-7 mt-5 clip-path-mypolygon inline-flex items-center gap-10 font-bebas text-base text-primary p-8 cursor-pointer">
              Faça um tour
              <br /> virtual
              <Image src="/Arrow.png" width={20} height={20} alt="icone seta" />
            </a>
          </div>
          <div className="text-primary p-6">
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
              className="bg-no-repeat bg-contain bg-center h-fit inline-flex items-center gap-4 font-bebas text-base text-primary p-8 cursor-pointer relative"
              style={{
                backgroundImage: `url(/Rectangle_2.png)`,
              }}
            >
              conheça nossos
              <br /> profissionais
              <Image src="/Arrow.png" width={18} height={18} alt="icone seta" />
            </a>
          </div>
          <div className="text-primary p-6">
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
              className="bg-no-repeat bg-contain bg-center h-fit inline-flex items-center gap-4 font-bebas text-base text-primary p-8 cursor-pointer relative"
              style={{
                backgroundImage: `url(/Rectangle_2.png)`,
              }}
            >
              conheça nossos
              <br /> profissionais
              <Image src="/Arrow.png" width={18} height={18} alt="icone seta" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits