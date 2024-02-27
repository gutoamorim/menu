import { FaMapMarkedAlt } from "react-icons/fa";

import burguer from "../../../assets/burguers/burger-1.jpg";

export default function Resumo() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="flex gap-3 justify-center py-5 border-b border-zinc-300 last:border-none">
          <div className="col-span-4">
            <img src={burguer} alt="" className="size-14 rounded-xl" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Nome do produto</h1>
            <h2 className="text-yellow-400 font-bold">R$ 100,00</h2>
          </div>
          <div>
            x <strong className="text-xl">3</strong>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold">Local da entrega</h2>
        <div className="flex items-center gap-3">
          <div className="size-12 bg-yellow-300 flex items-center justify-center text-2xl rounded-lg">
            <FaMapMarkedAlt />
          </div>
          <div>
            <p className="font-semibold">Rua teste, 200, bairro teste</p>
            <p className="text-sm">Cariacica-ES / 29140-230</p>
          </div>
        </div>
      </div>
    </div>
  );
}
