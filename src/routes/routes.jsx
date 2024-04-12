import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import UpdateUser from "../pages/UpdateUser";
import Property from "../components/Property/Property";
import Favourite from "../pages/Favourite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateUser />
          </PrivateRoutes>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoutes>
            <Property />
          </PrivateRoutes>
        ),
      },
      {
        path: "/favourites",
        element: (
          <PrivateRoutes>
            <Favourite />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
