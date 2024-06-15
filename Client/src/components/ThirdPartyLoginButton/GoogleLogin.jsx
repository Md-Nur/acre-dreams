import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserAuth } from "../../contexts/UserAuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import auth from "../../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = ({ title }) => {
  const provider = new GoogleAuthProvider();
  const { setLoading } = useUserAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setLoading(true);
        signInWithPopup(auth, provider)
          .then((result) => {
            toast.success(`Welcome ${result.user.displayName}`);
            navigate(location?.state || "/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }}
      className="btn btn-warning flex items-center"
    >
      <FaGoogle /> <span>{title} with Google</span>
    </button>
  );
};

export default GoogleLogin;
