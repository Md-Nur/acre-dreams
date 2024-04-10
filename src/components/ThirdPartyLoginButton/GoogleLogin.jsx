import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserAuth } from "../../contexts/UserAuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import auth from "../../firebase/firebase.config";

const GoogleLogin = ({ title }) => {
  const provider = new GoogleAuthProvider();
  const { setLoading } = useUserAuth();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setLoading(true);
        signInWithPopup(auth, provider)
          .then((result) => {
            toast.success(`Welcome ${result.user}`);
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
