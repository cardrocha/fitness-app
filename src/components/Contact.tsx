import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary mt-[138px]">
      <div className="container mx-auto text-primary">
        <h3 className="font-bebas text-7xl pt-16">ENTRE EM CONTATO</h3>
        <p className="font-mont text-2xl mt-5">
          Matricule-se agora mesmo! Fale com um de nossos atendentes
        </p>
      </div>
      <form>
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
              size={15}
            />
          </div>
          <div
            className="bg-no-repeat bg-contain bg-center h-fit inline-flex items-center ml-8 mt-1 p-1"
            style={{
              backgroundImage: `url(/Rectangle_20.png)`,
            }}
          >
            <input
              className="bg-secondary clip-path-mypolygon outline-none px-1 font-mont text-lg text-primary mt-1"
              type="text"
              placeholder="TELEFONE"
              size={15}
            />
          </div>
        </div>
        <input
          className="font-mont text-primary text-base font-semibold clip-path-mypolygon bg-button hover:bg-secondaryBackground py-2 pl-3 pr-5 mt-7 ml-8 cursor-pointer hover:brightness-150"
          type="submit"
          value="SOLICITAR CONTATO"
        ></input>
      </form>
    </section>
  );
};

export default Contact;
