import React from "react";
import { Link } from "react-router-dom";

const Doctor = (props) => {
  const { name, speciality, img } = props.doctor;

  return (
    <div className="col-lg-6">
      <div className="border rounded p-2 shadow">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-dark fs-4">{name}</h2>
            <small className="text-color">{speciality}</small>
            <br />
            <Link
              to="/notfound"
              className="btn btn-color mt-3 rounded-3 text-color"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
