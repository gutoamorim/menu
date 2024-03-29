import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../../components/Title";

import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { FaIceCream } from "react-icons/fa";

import OptionMenu from "../../components/OptionMenu";
import Footer from "../../components/Footer";

import styles from "./cardapio.module.css";
import Cart from "../../components/Cart";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Cardapio() {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <Header />
      <Title title="Cardápio" subtitle="Conheça o nosso cardápio" />
      <div className={styles.bg}>
        <nav className="container mx-auto mt-10">
          <ul className="flex items-center justify-center gap-4">
            <OptionMenu to="burguers">
              <FaHamburger /> Burguers
            </OptionMenu>

            <OptionMenu to="pizzas">
              <FaPizzaSlice /> Pizzas
            </OptionMenu>

            <OptionMenu to="bebidas">
              <FaCocktail /> Bebidas
            </OptionMenu>

            <OptionMenu to="sobremesas">
              <FaIceCream /> Sobremesas
            </OptionMenu>
          </ul>
        </nav>
        <main className="py-10">
          <Outlet />
        </main>
      </div>
      <Footer />
      {cart && <Cart />}
    </>
  );
}
