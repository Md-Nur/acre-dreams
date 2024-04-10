import { useState } from "react";
import Form from "../components/Form/Form";

const Registration = () => {
  const [data, setData] = useState({});
  

  return (
    <Form title="Sign Up" data={data}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Your name"
          className="input input-bordered"
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
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
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
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
          onChange={(e) => setData({ ...data, photoUrl: e.target.value })}
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
          required
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
    </Form>
  );
};

export default Registration;
