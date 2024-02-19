import { createBrowserRouter } from "react-router-dom";

import Cardapio from "../pages/Cardapio";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
]);

export default router;
