import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthProvider";
import toast from "react-hot-toast";
import { useEffect } from "react";

const PrivateRoutes = ({ children }) => {
  const loacation = useLocation();
  const { user, loader } = useUserAuth();

  if (loader) {
    return <span className="loading loading-ball loading-lg"></span>;
  } else if (!user) {
    toast.dismiss();
    toast.error("You must be logged in");
    return <Navigate state={loacation.state} to="/login" />;
  }

  return children;
};

export default PrivateRoutes;
