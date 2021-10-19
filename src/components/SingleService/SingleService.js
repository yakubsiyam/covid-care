import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleService = () => {
  const { serviceId } = useParams();
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);
  const singleId = parseInt(serviceId);
  const result = singleService.find(({ id }) => id === singleId);
  return (
    <div className="container">
      <div className="row justify-content-between border rounded-3 py-3 m-4">
        <div className="col-md-6">
          <img className="img-fluid" src={result?.img} alt="img" />
        </div>
        <div className="col-md-6 row justify-content-center align-items-center">
          <div>
            <h2 className="text-color">{result?.title}</h2>
            <p className="text-secondary my-2 fs-6">{result?.description}</p>
            <span className="fs-6 me-3">
              <i className="far fa-clock text-color"></i> {result?.time}
            </span>
            <span className="fs-6">
              <span className="text-color">
                <i className="fas fa-dollar-sign"></i>
              </span>{" "}
              {result?.cost}
            </span>
            <br />
            <Link
              to="/notfound"
              className="error-btn btn mt-3 rounded-3 text-color"
            >
              <i className="fas fa-phone-alt"></i> {result?.contactNumber}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
