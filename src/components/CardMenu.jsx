import { FaShoppingCart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function CardMenu({ img, name, price, description }) {
  return (
    <div className="max-w-60 bg-white rounded shadow-lg cursor-pointer pb-4">
      <div>
        <img src={img} alt="" className="rounded-t" />
      </div>
      <div className="px-5">
        <div className="mt-4 text-center">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="text-lg font-bold text-yellow-400">{price}</p>
          <p className="text-sm leading-4 text-justify mt-2">{description}</p>
        </div>
        <div className="flex items-center gap-4 justify-around">
          <div className="flex">
            <span className="border border-black rounded-l-lg flex items-center py-1 px-2">
              <FaMinus />
            </span>
            <span className="border border-black flex items-center py-1 px-2">
              1
            </span>
            <span className="border border-black rounded-r-lg flex items-center py-1 px-2">
              <FaPlus />
            </span>
          </div>
          <FaShoppingCart size={20} className="inline" />
        </div>
      </div>
    </div>
  );
}
