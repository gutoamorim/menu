import Title from "../../components/Title";
import pizzas from "../../assets/pizzas.png";
import CardDepo from "../../components/CardDepo";

import style from "./depoimentos.module.css";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className={style.depoimntos}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <div>
              <img src={pizzas} alt="" />
            </div>
          </div>
          <div className="col-span-7">
            <>
              <h1 className="text-yellow-400 text-base uppercase tracking-widest text-left font-semibold">
                Depoimentos
              </h1>
              <span className="block text-left text-4xl font-bold mb-8">
                O que dizem sobre nós
              </span>
            </>
            <CardDepo />

            <div className="flex gap-2">
              <a
                href=""
                className="flex items-center justify-center font-semibold w-6 h-6 bg-yellow-400 shadow-lg hover:bg-yellow-400 rounded "
              >
                1
              </a>
              <a
                href=""
                className="flex items-center justify-center font-semibold w-6 h-6 bg-white shadow-lg hover:bg-yellow-400 rounded "
              >
                2
              </a>
              <a
                href=""
                className="flex items-center justify-center font-semibold w-6 h-6 bg-white shadow-lg hover:bg-yellow-400 rounded "
              >
                3
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
