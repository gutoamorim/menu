import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Cardapio from "../pages/Cardapio";
import Burguers from "../components/Burguers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
    children: [
      {
        path: "burguers",
        element: <Burguers />,
      },
    ],
  },
]);

export default router;
