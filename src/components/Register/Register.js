import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    console.log(email, password);
    e.preventDefault();
  };
  return (
    <div className="container">
      <form className="my-3" onSubmit={handleRegistration}>
        <div className="my-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={handleEmailChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <Link to="/login" type="submit" className="btn btn-primary">
          Submit
        </Link>

        <p className="my-3">
          Already Register? <Link to="/login">Create Account</Link>
        </p>
        <p className="text-secondary text-center fs-4">or</p>
        <p className="fs-4 btn btn-color">
          <i className=" fab fa-google"></i> Login with Google
        </p>
      </form>
    </div>
  );
};

export default Register;
