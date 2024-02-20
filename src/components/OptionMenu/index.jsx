import { Link } from "react-router-dom";

export default function OptionMenu({ children, to }) {
  return (
    <li>
      <Link
        className="flex items-center gap-1 bg-white py-1 px-2 rounded-xl shadow-lg hover:bg-yellow-300 active:bg-yellow-300 transition-all"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}
