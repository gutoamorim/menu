import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";

import burguer from "../../../assets/burguers/burger-1.jpg";

export default function Items() {
  return (
    <div className="flex items-center justify-center gap-6 py-5 border-b border-zinc-300 last:border-none">
      <div>
        <img className="w-24 rounded-xl" src={burguer} alt="" />
      </div>
      <div className="flex-1">
        <p className="text-xl font-bold">Nome do produto</p>
        <p className="text-yellow-500 text-2xl font-bold">R$ 39,90</p>
      </div>
      <div className="flex items-center justify-center h-8 gap-4">
        <div className="flex">
          <span className="border border-black rounded-l-lg flex items-center py-1 px-2 cursor-pointer">
            <FaMinus />
          </span>
          <span className="font-bold border border-black flex items-center py-1 px-2">
            1
          </span>
          <span className="border border-black rounded-r-lg flex items-center py-1 px-2 cursor-pointer">
            <FaPlus />
          </span>
        </div>
        <span className="flex items-center justify-center p-2 bg-red-500 rounded-lg cursor-pointer">
          <FaRegTrashAlt size={20} className="inline text-white" />
        </span>
      </div>
    </div>
  );
}
