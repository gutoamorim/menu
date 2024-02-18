import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import burguer from "../../assets/burguer.png";

export default function Banner() {
  return (
    <section className="container mx-auto grid grid-cols-2 pt-28">
      <div>
        <h1 className="text-6xl font-bold">
          Escolha sua comida <span className="text-yellow-400">favorita.</span>
        </h1>
        <p className="my-5 text-xl">
          Aproveite nosso cardápio! Escolha o que desejar e reba em sua casa de
          forma rápida e segura
        </p>
        <div className="flex gap-4">
          <a
            href="#cardapio"
            className="inline-block bg-yellow-400 text-white text-xl rounded-2xl py-4 px-6 shadow-lg"
          >
            Ver cardápio
          </a>
          <a
            href=""
            className="flex items-center justify-center gap-2 bg-white rounded-2xl px-4 py-2 shadow-lg font-semibold"
          >
            <span className="flex items-center justify-center bg-yellow-400 w-11 h-11 rounded-2xl">
              <FiPhone />
            </span>
            (27) 9999-9999
          </a>
        </div>
        <div className="flex gap-4 mt-8">
          <a href="" className="bg-white p-2 rounded shadow-lg">
            <FiFacebook size={20} />
          </a>
          <a href="" className="bg-white p-2 rounded shadow-lg">
            <FiInstagram size={20} />
          </a>
          <a href="" className="bg-white p-2 rounded shadow-lg">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
      <div>
        <img src={burguer} alt="" />
      </div>
    </section>
  );
}
