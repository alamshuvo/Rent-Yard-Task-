import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Relator from "../utils/Relator";
import Condominiums from "../components/Condominiums";
import PropertyType from "../components/PropertyType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element:<PropertyType></PropertyType>
      },
      {
        path: "rent",
        element: <Condominiums />,
      },
    ],
  },
]);

export default router;
