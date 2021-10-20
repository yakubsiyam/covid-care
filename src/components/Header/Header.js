import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand text-color" to="/home">
            <img
              className="img-fluid me-2 pb-1"
              width="30"
              src={logo}
              alt="Logo here"
            />
            Covid Care
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/guidelines">
                  Guidelines
                </Link>
              </li>

              <li className="nav-item my-auto">
                <span className="nav-link">
                  {" "}
                  {user?.email && (
                    <span className="nav-link">
                      <img
                        src={user.photoURL}
                        className="rounded-circle w-25 p-4 p-lg-2"
                        alt="user img"
                      />
                      <span className="text-color">
                        Hi, {user.displayName}{" "}
                      </span>
                    </span>
                  )}
                </span>
              </li>
              {user?.email ? (
                <li className="nav-item my-auto" onClick={logOut}>
                  <Link className="nav-link" to="/home">
                    <span className="btn btn-color">
                      Logout <i className="fas fa-sign-out-alt"></i>
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item my-auto">
                  <Link className="nav-link my-auto" to="/login">
                    <span className="btn btn-color">
                      Login <i className="fas fa-sign-in-alt"></i>
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
