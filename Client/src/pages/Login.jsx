import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useUserAuth } from "../contexts/UserAuthProvider";
import Form from "../components/Form/Form";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/ThirdPartyLoginButton/GoogleLogin";
import GithubLogin from "../components/ThirdPartyLoginButton/GithubLogin";
import {Helmet} from "react-helmet"
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, setUser, user } = useUserAuth();

  const handleOnSubmit = (data) => {
    console.log("react hook form ", data);
    setLoading(true);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(location?.state || "/");
        toast.success(`${user.displayName} Login Successfully`);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => {
        setLoading(false);
        reset();
      });
  };

  return (
    <Form title="Login">
      <Helmet>
        <title>{`Login || Acre Dreams`}</title>
      </Helmet>
      <form
        className="card-body bg-base-300 rounded-xl"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered"
            required
            {...register("email")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            required
            {...register("password")}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary ">Login</button>
        </div>
        <div className="divider">OR</div>
        <div className="form-control space-y-3">
          <GoogleLogin title="Login" />
          <GithubLogin title="Login" />
        </div>
        <div className="divider"></div>
        <label className="label label-text-alt justify-center text-sm">
          Don't have any account? &nbsp;
          <Link to="/registration" className=" link link-hover link-secondary">
            Register
          </Link>
        </label>
      </form>
    </Form>
  );
};

export default Login;
