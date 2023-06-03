import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <h1>This is login page</h1>
      <Link to="/signup">Go to signup page</Link>
    </section>
  );
};

export default Login;
