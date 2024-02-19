import logo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";

export default function App() {
  return (
    <header className="container mx-auto  flex items-center justify-between">
      <img src={logo} alt="Logo Menu Online" width={120} />
      <ul className="flex gap-5">
        <li>
          <a
            href="#servicos"
            className="font-semibold hover:text-orange-300 transition"
          >
            Criar conta
          </a>
        </li>
        <li>
          <a
            href="#depoimentos"
            className="font-bold bg-yellow-300 text-white py-2 px-5 rounded-md hover:bg-orange-300 transition"
          >
            Entar
          </a>
        </li>
      </ul>
      {/* <a
        href=""
        className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2 shadow-lg font-semibold"
      >
        Meu carrinho
        <span className="flex items-center justify-center bg-yellow-400 w-11 h-11 rounded-2xl">
          <FiShoppingCart size={24} />
        </span>
      </a> */}
    </header>
  );
}
