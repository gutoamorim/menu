import CardMenu from "../CardMenu";

import burguer from "../../assets/burguers/burger-1.jpg";

export default function Burguers() {
  return (
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
  );
}
