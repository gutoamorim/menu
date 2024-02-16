import logo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";

export default function App() {
  return (
    <header className="container mx-auto  flex items-center justify-between">
      <img src={logo} alt="Logo Menu Online" width={160} />
      <ul className="flex gap-10">
        <li>
          <a href="#reservas" className="font-semibold hover:text-orange-500">
            Reservas
          </a>
        </li>
        <li>
          <a href="#servicos" className="font-semibold hover:text-orange-500">
            Serviços
          </a>
        </li>
        <li>
          <a href="#cardapio" className="font-semibold hover:text-orange-500">
            Cardápio
          </a>
        </li>
        <li>
          <a
            href="#depoimentos"
            className="font-semibold hover:text-orange-500"
          >
            Depoimentos
          </a>
        </li>
      </ul>
      <a
        href=""
        className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2 shadow-lg font-semibold"
      >
        Meu carrinho
        <div className="flex items-center justify-center bg-yellow-400 w-11 h-11 rounded-2xl">
          <FiShoppingCart size={24} />
        </div>
      </a>
    </header>
  );
}
