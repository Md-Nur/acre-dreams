import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { useUserAuth } from "../../contexts/UserAuthProvider";
import GoogleLogin from "../ThirdPartyLoginButton/GoogleLogin";
import GithubLogin from "../ThirdPartyLoginButton/GithubLogin";

const Form = ({ children, title, data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, setUser, user } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (title === "Login") {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate(location?.state || "/");
          toast.success(`${user.displayName} Login Successfully`);
        })
        .catch((err) => toast.error(err.message))
        .finally(() => setLoading(false));
    } else if (title === "Sign Up") {
      const passwordRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      if (passwordRegex.test(data.password)) {
        toast.error(
          "Password must be a lower and upper case letter and minimum 6 char long"
        );
      }
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          // There have an issue to show the avatar in navbar without reloading
          updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: data.photoUrl,
          })
            .then(() => {
              toast.success(`Welcome ${user.displayName}!`);
              navigate(location?.state || "/");
              setUser({
                ...user,
                displayName: data.name,
                photoURL: data.photoUrl,
              });
            })
            .catch((e) => toast.error(e.message));
        })

        .catch((e) => toast.error(e.message))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="hero my-5">
      <div className="hero-content flex-col lg:flex-row justify-around w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{title} Now!</h1>
          <p className="py-6 max-w-[600px]">
            Are you dreaming of wide-open spaces, building your dream home from
            the ground up, or investing in the future potential of undeveloped
            land? Look no further than Acre Dreams, your trusted resource for
            all things land real estate.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            className="card-body bg-base-300 rounded-xl"
            onSubmit={handleSubmit}
          >
            {children}
            <div className="form-control mt-6">
              <button className="btn btn-primary ">{title}</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control space-y-3">
              <GoogleLogin title={title} />
              <GithubLogin title={title} />
            </div>
            <div className="divider"></div>
            <label className="label label-text-alt justify-center text-sm">
              {title === "Login"
                ? "Don't have any account? "
                : "Already have an account? "}
              &nbsp;
              <Link
                to={title === "Login" ? "/registration" : "/login"}
                className=" link link-hover link-secondary"
              >
                {title === "Login" ? "Register" : "Login"}
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
