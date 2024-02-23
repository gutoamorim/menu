import styles from "./cart.module.css";

import burguer from "../../assets/burguers/burger-1.jpg";

import {
  FaMinus,
  FaPlus,
  FaPlusCircle,
  FaShoppingCart,
  FaRegTrashAlt,
  FaMotorcycle,
} from "react-icons/fa";

export default function Cart() {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 bg-white py-8 z-50 overflow-x-hidden overflow-y-auto flex flex-col ${styles.mOverflow}`}
    >
      <div className="container mx-auto flex flex-col max-h-full">
        <div className="flex items-center justify-between">
          <div className="space-y-5">
            <div className="flex">
              <div
                className={`w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center mr-5 ${styles.etapa} ${styles.active}`}
              >
                1
              </div>
              <div
                className={`w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center mr-5 ${styles.etapa}`}
              >
                2
              </div>
              <div
                className={`w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center mr-5 ${styles.etapa}`}
              >
                3
              </div>
            </div>

            <h1 className="text-xl font-bold">Seu carrinho:</h1>
          </div>

          <a className="float-right font-semibold px-4 py-1 rounded-lg shadow-lg cursor-pointer">
            Fechar
          </a>
        </div>

        <div
          className={`flex-1 overflow-auto overflow-x-hidden ${styles.mBody}`}
        >
          <div>
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
                    <FaPlusCircle />
                  </span>
                </div>
                <span className="flex items-center justify-center p-2 bg-red-500 rounded-lg cursor-pointer">
                  <FaRegTrashAlt size={20} className="inline text-white" />
                </span>
              </div>
            </div>
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
                    <FaPlusCircle />
                  </span>
                </div>
                <span className="flex items-center justify-center p-2 bg-red-500 rounded-lg cursor-pointer">
                  <FaRegTrashAlt size={20} className="inline text-white" />
                </span>
              </div>
            </div>
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
                    <FaPlusCircle />
                  </span>
                </div>
                <span className="flex items-center justify-center p-2 bg-red-500 rounded-lg cursor-pointer">
                  <FaRegTrashAlt size={20} className="inline text-white" />
                </span>
              </div>
            </div>
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
                    <FaPlusCircle />
                  </span>
                </div>
                <span className="flex items-center justify-center p-2 bg-red-500 rounded-lg cursor-pointer">
                  <FaRegTrashAlt size={20} className="inline text-white" />
                </span>
              </div>
            </div>
          </div>

          <div className="hidden"></div>

          <div className="hidden"></div>
        </div>

        <div className="border-t border-zinc-300 text-right py-5 space-y-1">
          <div>
            <p className="space-x-1">
              <span>Subtotal:</span>
              <span>R$ 95,00</span>
            </p>
            <p className="text-zinc-400 space-x-1">
              <span className="inline-flex items-center gap-1">
                <FaMotorcycle />
                Entrega:
              </span>
              <span>R$ 5,00</span>
            </p>
            <p className="text-xl font-bold space-x-1">
              <span>Total:</span>
              <span className="text-yellow-400 text-2xl">R$ 100,00</span>
            </p>
          </div>
          <a className="mr-3 hidden">Voltar</a>
          <a className="bg-yellow-400 inline-block py-2 px-4 rounded-lg cursor-pointer">
            Continuar
          </a>
        </div>
      </div>
    </div>
  );
}
