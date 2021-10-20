import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import registerImg from "../../images/register.jpg";

const Register = () => {
  const auth = getAuth();

  const { googleLogIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleRegister = () => {
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

  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <img className="img-fluid" src={registerImg} alt="" />
        </div>
        <div className="col-md-6 rounded shadow p-5">
          <p className="text-secondary fs-2 text-center">Register</p>
          <form onSubmit={handleRegistration}>
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
                required
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
                required
              />
            </div>
            <small className="text-danger">{erroR}</small>
            <button className="btn error-btn mb-2 col-12">
              <i className="fas fa-sign-in-alt"></i> Register
            </button>
            <p className="my-3">
              Already have an account?{" "}
              <Link className="text-decoration-none text-color" to="/login">
                Login
              </Link>
            </p>
            <p className="text-secondary text-center fs-4">or</p>
            <p className="fs-4 btn btn-color" onClick={handleGoogleRegister}>
              <i className=" fab fa-google"></i> Register with Google
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
