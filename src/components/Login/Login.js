import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.jpg";

const Login = () => {
  const { googleLogIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    googleLogIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="img-fluid" src={login} alt="login img" />
        </div>
        <div className="col-md-6 rounded shadow p-5">
          <p className="text-secondary fs-2 text-center">Login</p>
          <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your email"
            />
          </div>
          <div className="my-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Your password"
            />
          </div>
          <Link className="btn error-btn mb-2 col-12" to="/notfound">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
          <p className="my-3">
            new to Covid Care? <Link to="/register">Create Account</Link>
          </p>
          <p className="text-secondary text-center fs-4">or</p>
          <p className="fs-4 btn btn-color" onClick={handleGoogleLogin}>
            <i className=" fab fa-google"></i> Login with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
