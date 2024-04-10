import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserAuth } from "../../contexts/UserAuthProvider";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import auth from "../../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const GithubLogin = ({ title }) => {
  const provider = new GithubAuthProvider();
  const { setLoading } = useUserAuth();
  const location = useLocation()
  const navigate = useNavigate()
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
      className="btn btn-neutral flex items-center"
    >
      <FaGithub /> <span>{title} with Github</span>
    </button>
  );
};

export default GithubLogin;
