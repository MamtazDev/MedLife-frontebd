import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SIgnup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    navigate("/");

    console.log(data);
  };
  return (
    <section className="container mx-auto my-[150px]">
      <form className="max-w-[500px] mx-auto" onSubmit={handleSubmit}>
        <h1 className="font-[600] text-4xl text-center mb-10">Please Signup</h1>
        <div className="mb-5">
          <label>Name</label>
          <input
            type="name"
            placeholder="Type here"
            className="input input-bordered w-full "
            name="name"
            required
          />
        </div>
        <div className="mb-5">
          <label>Email</label>
          <input
            type="text"
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
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="confirmPassword"
            required
          />
        </div>
        <Link to="/login">
          <span className="text-sm text-[#081830]">Go to login page</span>
        </Link>
        <button className="block btn w-full mt-3" type="submit">
          Signup
        </button>
      </form>
    </section>
  );
};

export default SIgnup;
