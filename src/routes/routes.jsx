import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    component: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
export default router;
