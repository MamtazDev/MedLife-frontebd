import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const data = {
      email,
      password,
    };

    console.log(data, "data");
    navigate("/");
  };
  return (
    <section className="container mx-auto my-[150px]">
      <form className="max-w-[500px] mx-auto" onSubmit={handleSubmit}>
        <h1 className="font-[600] text-4xl text-center mb-10">Please Login</h1>
        <div className="mb-5">
          <label>Email</label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full "
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="password"
            required
          />
        </div>
        <Link to="/signup">
          <span className="text-sm text-[#081830]">Go to signup page</span>
        </Link>
        <button className="block btn w-full mt-3" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
