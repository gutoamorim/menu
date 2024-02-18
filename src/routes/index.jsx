import { createBrowserRouter } from "react-router-dom";

import Cardapio from "../pages/Cardapio";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
