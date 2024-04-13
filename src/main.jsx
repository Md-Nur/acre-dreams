import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import UserAuthProvider from "./contexts/UserAuthProvider";
import { FavProvider } from "./contexts/FavourtieProvide";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthProvider>
      <FavProvider>
        <RouterProvider router={router} />
      </FavProvider>
    </UserAuthProvider>
  </React.StrictMode>
);
