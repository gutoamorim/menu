import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../Banner";
import Depoimentos from "../Depoimentos";
import Servicos from "../Servicos";

export default function Home() {
  return (
    <>
      <div className="space-y-20">
        <Header />
        <Banner />
        <Servicos />
        <Depoimentos />
        <Footer />
      </div>
    </>
  );
}
