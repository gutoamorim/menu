import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import dylan from "../assets/dylan.jpg";

export default function CardDepo() {
  return (
    <div id="depoimento-1">
      <div className="flex gap-3">
        <div className="w-16 h-16">
          <img className="rounded-full" src={dylan} alt="" />
        </div>
        <div>
          <p className="text-xl mb-1">Dylan Fernandes</p>
          <p className="flex items-center text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            &nbsp;
            <span className="text-neutral-600">4.5</span>
          </p>
        </div>
      </div>
      <p className="flex">
        <FaQuoteLeft className="text-yellow-400 text-4xl ml-5" />
        <span className="pl-11">
          Muito bom! Recomendo demais... Comida muito bem feita, ótimo
          atendimento e entrega super rápida.
        </span>
        <FaQuoteRight className="text-yellow-400 text-4xl mt-8" />
      </p>
    </div>
  );
}
