import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { img, title, time, contactNumber, id, cost } = props.service;
  return (
    <div className="col-lg-6">
      <div className="border rounded p-2 shadow">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-dark fs-4">{title}</h2>

            <span className="fs-6 d-block">
              <i className="far fa-clock text-color"></i> {time}
            </span>
            <span className="fs-6 d-block">
              <span className="text-color">
                <i className="fas fa-phone-alt"></i>
              </span>{" "}
              {contactNumber}
            </span>
            <span className="fs-6 d-block">
              <span className="text-color">
                <i className="fas fa-dollar-sign"></i>
              </span>{" "}
              {cost}
            </span>
            <Link
              to={`/services/${id}`}
              className="btn btn-services mt-3 rounded-3 text-color"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
