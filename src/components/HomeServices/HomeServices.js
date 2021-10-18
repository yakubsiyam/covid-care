import React from "react";
import { Link } from "react-router-dom";

const HomeServices = (props) => {
  const { img, title, time, contactNumber } = props.service;
  return (
    <div className="col-md-6">
      <div className="border rounded p-2 shadow">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-dark fs-2">{title}</h2>
            <span className="fs-6 d-block">
              <i class="far fa-clock text-color"></i> {time}
            </span>
            <span className="fs-6 d-block">
              <span className="text-color">
                <i class="fas fa-phone-alt"></i>
              </span>{" "}
              {contactNumber}
            </span>
            <Link to="/services" className="btn btn-home mt-3">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
