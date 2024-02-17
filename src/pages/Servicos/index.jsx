import Title from "../../components/Title";
import Card from "../../components/Card";

import pedido from "../../assets/icone-pedido.svg";
import delivery from "../../assets/icone-delivery.svg";
import qualidade from "../../assets/icone-qualidade.svg";

import style from "./servicos.module.css";

export default function Servicos() {
  return (
    <section className={style.servicos}>
      <div className="container mx-auto py-40">
        <Title title="Serviços" subtitle="Como são nossos serviços?" />
        <div className="mx-auto grid grid-cols-3 items-center justify-center py-20">
          <div>
            <Card
              img={pedido}
              width={150}
              title="Fácil de pedir"
              subtitle="Você só precisa de alguns passos para fazer o seu pedido."
            />
          </div>
          <div>
            <Card
              img={delivery}
              width={250}
              title="Entrega rápida"
              subtitle="Nossa entrega é sempre pontual, rápida e segura."
            />
          </div>
          <div>
            <Card
              img={qualidade}
              width={250}
              title="Melhor qualidade"
              subtitle="Não só a rapidez na entrega. A qualidade também é o nosso forte."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
