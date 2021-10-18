import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-light">
      <div className="container pb-2">
        <div className="row justify-content-between">
          <div className="col-md-4 pt-4">
            <Link className="navbar-brand text-color" to="/home">
              <img
                className="img-fluid me-2 pb-1"
                width="30"
                src={logo}
                alt="Logo here"
              />
              Covid Care
            </Link>
            <br />
            <small className="py-2 text-secondary">
              Covid Care has all the characteristics of a world-class hospital
              with wide range of services and specialists, equipments and
              technology, ambience and service quality.
            </small>
            <br />
            <div className="mt-5">
              <span className="text-secondary">
                All rights reserved. <br />
                &copy; 2021
                <span className="text-color"> Siyam Ali.</span>
              </span>
            </div>
          </div>
          <div className="col-md-4 pt-4">
            <span className="text-color fs-5 pb-3">Links</span>
            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/about"
            >
              <i className="fas fa-arrow-circle-right"></i> About
            </Link>
            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/services"
            >
              <i className="fas fa-arrow-circle-right"></i> Services
            </Link>
            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/guidelines"
            >
              <i className="fas fa-arrow-circle-right"></i> Guidelines
            </Link>
            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/contact"
            >
              <i className="fas fa-arrow-circle-right"></i> Contact
            </Link>

            <Link
              className="text-decoration-none d-block text-secondary hover-text mt-2"
              to="/notfound"
            >
              <i className="fas fa-arrow-circle-right"></i> Privacy Policy
            </Link>
          </div>
          <div className="col-md-4 pt-4">
            <span className="text-color fs-5">GET US</span>
            <span className="d-block text-secondary mt-2">
              <i className="fas fa-map-marker-alt"></i>{" "}
              Dhanmondi,Dhaka-1219,Bangladesh
            </span>
            <span className="d-block text-secondary mt-2">
              <i className="fas fa-phone-alt"></i> +880 1813729060
            </span>
            <span className="d-block text-secondary mt-2">
              <i className="fas fa-envelope"></i> siyam7178@gmail.com
            </span>
            <div className="mt-3">
              <span className="text-color pt-3">Follow Us</span>
              <div className="fs-5 pt-0">
                <i className="fab fa-facebook-f text-dark icon-color pe-4"></i>{" "}
                <i className="fab fa-twitter text-dark icon-color pe-4"></i>{" "}
                <i className="fab fa-youtube text-dark icon-color pe-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
