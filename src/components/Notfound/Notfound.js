import React from "react";
import { Link } from "react-router-dom";
import error from "../../images/error.jpg";

const Notfound = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={error} alt="error page" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="text-color">Oopss....</h1>
              <p className="text-secondary">
                Your Requested Page is Not Found!!!
              </p>
              <Link className="btn error-btn btn-lg my-4" to="/home">
                <i className="fas fa-arrow-right"></i> Want To Go Home ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
