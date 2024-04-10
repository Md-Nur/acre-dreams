import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserAuth } from "../../contexts/UserAuthProvider";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import auth from "../../firebase/firebase.config";

const GithubLogin = ({ title }) => {
  const provider = new GithubAuthProvider();
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
      className="btn btn-neutral flex items-center"
    >
      <FaGithub /> <span>{title} with Github</span>
    </button>
  );
};

export default GithubLogin;
