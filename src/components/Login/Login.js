import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.jpg";

const Login = () => {
  const auth = getAuth();
  const { googleLogIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    googleLogIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroR, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
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
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                onBlur={handleEmailChange}
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
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Your password"
              />
            </div>
            <small className="text-danger">{erroR}</small>
            <button className="btn error-btn mb-2 col-12">
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
            <p className="my-3">
              new to Covid Care?{" "}
              <Link className="text-decoration-none text-color" to="/register">
                Create Account
              </Link>
            </p>
            <p className="text-secondary text-center fs-4">or</p>
            <p className="fs-4 btn btn-color" onClick={handleGoogleLogin}>
              <i className=" fab fa-google"></i> Login with Google
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
