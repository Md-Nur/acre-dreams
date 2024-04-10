import React, { useState } from "react";
import Form from "../components/Form/Form";

const Login = () => {
  const [data, setData] = useState({});

  return (
    <Form title="Login" data={data}>
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
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered"
          required
          onChange={(e) => setData({...data, password: e.target.value })}
        />
      </div>
    </Form>
  );
};

export default Login;
