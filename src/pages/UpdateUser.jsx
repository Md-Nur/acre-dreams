import { useState } from "react";
import auth from "../firebase/firebase.config";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useUserAuth } from "../contexts/UserAuthProvider";

const UpdateUser = () => {
  const [user] = useState(auth.currentUser);

  const { register, handleSubmit, reset } = useForm();
  const { setLoading } = useUserAuth();
  const handleOnSubmit = (data) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: data.name,
      photoURL: data.photoUrl,
    })
      .then(() => {
        toast.success("Profile updated successfully");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
    reset();
  };
  return (
    <section className="w-full">
      <div className="text-center my-10">
        <h1 className="text-2xl font-bold text-center">
          Hi, {user.displayName}.
        </h1>
        <p className="font-semibold text-xl">Update your profile information</p>
      </div>
      <div className="my-10 card w-full md:w-3/4 mx-auto">
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
              defaultValue={user.displayName}
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
              defaultValue={user.email}
              disabled
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
              defaultValue={user.photoURL}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-secondary ">Update</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateUser;
