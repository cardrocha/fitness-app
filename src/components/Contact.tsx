"use client";

import React from "react";
import InputMask from "react-input-mask";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);

  const removeDigits = (value: any) => {
    return value.replace(/\D/g, "");
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(phone.length);
    const phoneMask = removeDigits(phone);
    if (phoneMask.length !== 11) {
      alert("O telefone deve conter onze dígitos");
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setName("");
        setPhone("");
      }, 5000);
    }
  };

  return (
    <section className="container mx-auto bg-secondary mt-[138px] pb-28 relative">
      <div className="container mx-auto text-primary">
        <h3 className="font-bebas text-7xl ml-8 pt-16">ENTRE EM CONTATO</h3>
        <p className="font-mont text-2xl ml-8 mt-5">
          Matricule-se agora mesmo! Fale com um de nossos atendentes
        </p>
      </div>
      <form onSubmit={submitForm}>
        <div>
          <div
            className="bg-no-repeat bg-contain bg-center h-fit inline-flex items-center ml-8 mt-7 p-1"
            style={{
              backgroundImage: `url(/Rectangle_20.png)`,
            }}
          >
            <input
              className="bg-secondary clip-path-mypolygon outline-none px-1 font-mont text-lg text-primary mt-1"
              type="text"
              placeholder="NOME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={13}
              size={15}
              required
            />
          </div>
          <div
            className="bg-no-repeat bg-contain bg-center h-fit inline-flex items-center ml-8 mt-1 p-1"
            style={{
              backgroundImage: `url(/Rectangle_20.png)`,
            }}
          >
            <InputMask
              className="bg-secondary clip-path-mypolygon outline-none px-1 font-mont text-lg text-primary mt-1"
              type="text"
              placeholder="TELEFONE"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size={15}
              required
              mask="99 99999 9999"
            />
          </div>
        </div>
        <input
          className="font-mont text-primary text-base font-semibold clip-path-mypolygon bg-button hover:bg-secondaryBackground py-2 pl-3 pr-5 mt-7 ml-8 cursor-pointer hover:brightness-150"
          type="submit"
          value="SOLICITAR CONTATO"
        ></input>
      </form>
      <Image
        className="absolute bottom-0 right-24 z-10"
        src="/pngwing_3.png"
        width={405}
        height={300}
        alt="mulher treinando com duas anilhas nas mãos"
      />
      {showMessage && (
        <div className="bg-primary p-2 mt-7 animate-fade-in-out">
          <p className="font-mont text-xl ml-16 font-semibold">
            Entraremos em contato o mais breve possível, obrigado!
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
