import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Form = ({ children, title }) => {
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
          <form className="card-body bg-base-300 rounded-xl">
            {children}
            <div className="form-control mt-6">
              <button className="btn btn-primary ">{title}</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control space-y-3">
              <button className="btn btn-warning flex items-center ">
                <FaGoogle /> <span>{title} with Google</span>
              </button>
              <button className="btn btn-neutral flex items-center">
                <FaGithub />
                <span>{title} with GitHub</span>
              </button>
            </div>
            <div className="divider"></div>
            <label className="label label-text-alt justify-center text-sm">
              {title === "Login"
                ? "Don't have any account? "
                : "Already have an account? "}{" "}
              &nbsp;
              <Link
                to={title === "Login" ? "register" : "login"}
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
