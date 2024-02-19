import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemMenu from "../../components/ItemMenu";

import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { FaIceCream } from "react-icons/fa";

import burguer from "../../assets/burguers/burger-1.jpg";
import CardMenu from "../../components/CardMenu";

export default function Cardapio() {
  return (
    <section>
      <Header />
      <Title title="Cardápio" subtitle="Conheça o nosso cardápio" />
      <nav className="container mx-auto mt-10">
        <ul className="flex items-center justify-center gap-4">
          <ItemMenu>
            <FaHamburger /> Burguers
          </ItemMenu>

          <ItemMenu>
            <FaPizzaSlice /> Pizzas
          </ItemMenu>

          <ItemMenu>
            <FaCocktail /> Bebidas
          </ItemMenu>

          <ItemMenu>
            <FaIceCream /> Sobremesas
          </ItemMenu>
        </ul>
      </nav>

      <div className="container mx-auto flex flex-wrap gap-5 mt-10">
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
        <CardMenu img={burguer} name="Hamburguer" price="R$ 5,00" />
      </div>
    </section>
  );
}
