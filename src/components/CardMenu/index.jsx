import { FaShoppingCart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import styles from "./cardmenu.module.css";

export default function CardMenu({ img, name, price, description }) {
  return (
    <div
      className={`max-w-60 h-80 bg-white rounded-lg shadow-lg pb-4 hover:bg-yellow-300 transition ${styles.cardMenu}`}
    >
      <div className="p-4">
        <img src={img} alt="" className="rounded-lg" />
      </div>
      <div className="px-5">
        <div className="text-center">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className={`text-lg font-bold text-yellow-400 ${styles.price}`}>
            {price}
          </p>
          <p className="text-sm leading-4 text-justify mt-2">{description}</p>
        </div>
        <div className={`items-center gap-4 justify-around ${styles.addCart}`}>
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
          <span className="flex items-center justify-center p-2 bg-black rounded-lg cursor-pointer">
            <FaShoppingCart size={20} className="inline text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}
