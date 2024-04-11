import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useUserAuth } from "../contexts/UserAuthProvider";
import Form from "../components/Form/Form";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/ThirdPartyLoginButton/GoogleLogin";
import GithubLogin from "../components/ThirdPartyLoginButton/GithubLogin";


const Registration = () => {
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, setUser, user } = useUserAuth();

  const handleOnSubmit = (data) => {
    console.log("react hook form ", data);
    setLoading(true);

    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(data.password)) {
      toast.error(
        "Password must be a lower and upper case letter and minimum 6 char long"
      );
      return
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
      .finally(() => {setLoading(false)
      reset()
      });
  };

  return (
    <Form title="Sign Up">
      <form
        className="card-body bg-base-300 rounded-xl"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Photo URL"
            className="input input-bordered"
            {...register("photoUrl")}
          />
        </div>
        <div className="form-control">
          <label className="label flex-col items-start">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary ">Sign Up</button>
        </div>
        <div className="divider">OR</div>
        <div className="form-control space-y-3">
          <GoogleLogin title="Sign Up" />
          <GithubLogin title="Sign Up" />
        </div>
        <div className="divider"></div>
        <label className="label label-text-alt justify-center text-sm">
          Already have an account?&nbsp;
          <Link to="/login" className=" link link-hover link-secondary">
            Login
          </Link>
        </label>
      </form>
    </Form>
  );
};

export default Registration;
