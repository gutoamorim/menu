import styles from "./cart.module.css";

import { FaMotorcycle } from "react-icons/fa";
import Items from "./Items";
import Entrega from "./Entrega";
import Resumo from "./Resumo";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
  const [stage, setStage] = useState(1);

  const { toggleCart } = useContext(CartContext);

  function handleStage(e) {
    if (e.target.id === "next") {
      if (stage < 3) {
        setStage((stage) => stage + 1);
      }
    } else if (e.target.id === "previous") {
      if (stage > 1) {
        setStage((stage) => stage - 1);
      }
    }
  }

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 bg-white z-50 overflow-x-hidden flex flex-col`}
    >
      <div className="container mx-auto pt-4 flex flex-col h-full space-y-4">
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

          <a
            className="float-right font-semibold px-4 py-1 rounded-lg shadow-lg cursor-pointer"
            onClick={toggleCart}
          >
            Fechar
          </a>
        </div>

        <div className={`flex-1 overflow-auto overflow-x-hidden`}>
          {(stage === 1 && <Items />) ||
            (stage === 2 && <Entrega />) ||
            (stage === 3 && <Resumo />)}
        </div>

        <div className="border-t border-zinc-300 text-right py-5 space-y-5">
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
          <div className="flex items-center gap-5 float-right">
            {stage > 1 && (
              <a
                className="mr-3 cursor-pointer font-semibold"
                id="previous"
                onClick={handleStage}
              >
                Voltar
              </a>
            )}
            <a
              className="bg-yellow-400 inline-block py-2 px-4 rounded-lg cursor-pointer font-bold"
              id="next"
              onClick={handleStage}
            >
              Continuar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
