import Image from "next/image";
import React from "react";

const Plans = () => {
  return (
    <section className="mx-auto">
      <div className="bg-secondary pt-20">
        <h3 className="font-bebas text-7xl text-primary text-center">
          nossos planos
        </h3>
        <div className="container mx-auto flex items-end gap-10 py-20">
          <div className="mt-24 w-[400px]">
            <div className="flex flex-col">
              <Image
                src="/Rectangle_3.png"
                width={400}
                height={168}
                alt="pessoa levantando peso"
              />
              <p className="bg-black font-bebas text-primary text-[42px] whitespace-nowrap py-2 pl-5 pr-48">
                passe de 1 dia
              </p>
              <div className="inline-flex items-center justify-between px-6 py-3 font-light text-mont text-2xl text-secondaryText bg-secondaryGray">
                <p>
                  Teste
                  <br /> gratuitamente
                </p>
                <button className="text-lg border-secondaryText border-2 hover:bg-secondaryText hover:text-primary  duration-300 px-2 py-3 rounded-full font-bold">
                  SELECIONAR
                </button>
              </div>
            </div>
          </div>
          <div className="mt-24 w-[400px]">
            <p className="bg-secondaryBackground font-mont font-bold text-center text-primary text-lg whitespace-nowrap py-2 px-11">
              RECOMENDADO POR USUÁRIOS
            </p>
            <div className="flex flex-col">
              <Image
                src="/Rectangle_1.png"
                width={400}
                height={168}
                alt="pessoa levantando peso"
              />
              <p className="bg-secondaryBackground font-bebas text-primary text-[42px] whitespace-nowrap py-2 pl-5 pr-48">
                passe de 1 dia
              </p>
              <div className="inline-flex items-center justify-between px-6 py-3 font-light text-mont text-2xl text-primary bg-secondaryGray">
                <p>
                  À partir de
                  <br />{" "}
                  <span className="text-primary font-semibold">R$99,90</span>
                </p>
                <button className="text-lg border-secondaryBackground text-secondaryBackground border-2 hover:bg-secondaryBackground hover:text-primary  duration-300 px-2 py-3 rounded-full font-bold">
                  SELECIONAR
                </button>
              </div>
            </div>
          </div>
          <div className="mt-24 w-[400px]">
            <div className="flex flex-col">
              <Image
                src="/Rectangle_3.png"
                width={400}
                height={168}
                alt="pessoa levantando peso"
              />
              <p className="bg-black font-bebas text-primary text-[42px] whitespace-nowrap py-2 pl-5 pr-48">
                passe de 1 ano
              </p>
              <div className="inline-flex items-center justify-between px-6 py-3 font-light text-mont text-2xl text-secondaryText bg-secondaryGray">
                <p>
                  À partir de
                  <br />{" "}
                  <span className="text-primary font-semibold">R$999,00</span>
                </p>
                <button className="text-lg border-secondaryText border-2 hover:bg-secondaryText hover:text-primary  duration-300 px-2 py-3 rounded-full font-bold">
                  SELECIONAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
