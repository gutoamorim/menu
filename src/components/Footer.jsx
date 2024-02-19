import { FiFacebook, FiInstagram } from "react-icons/fi";
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import CardSocial from "./CardSocial";

export default function Footer() {
  return (
    <footer className="bg-yellow-100">
      <div className="container mx-auto grid grid-cols-12 items-center justify-between py-3">
        <div className="col-span-3">
          <img src={logo} alt="" className="w-20" />
        </div>
        <div className="col-span-6 text-center">
          <p className="text-yellow-500">
            <span className="font-medium">Menu On-line</span> &copy; Todos os
            direitos reservados
          </p>
        </div>
        <div className="col-span-3">
          <div className="flex gap-4 justify-end">
            <CardSocial>
              <FiFacebook size={20} />
            </CardSocial>
            <CardSocial>
              <FiInstagram size={20} />
            </CardSocial>
            <CardSocial>
              <FaWhatsapp size={20} />
            </CardSocial>
          </div>
        </div>
      </div>
    </footer>
  );
}
