import React, { useEffect, useState } from "react";
import servicesImg from "../../images/services img.png";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      {/* service banner */}
      <div className="row justify-content-between my-5">
        <div className="col-md-6 row align-items-center justify-content-between">
          <div>
            <span className="btn error-btn me-3 py-0">covid-19</span>
            <span className="text-color mt-1">Coronavirus</span>
            <h1 className="my-3">Find Your Services</h1>
            <small className="text-secondary">
              If you develop a fever, cough, and have difficulty breathing,
              promptly seek medical care. Call in advance and tell your health
              provider of any recent travel or recent contact with
              travelers.Regularly and thoroughly clean your hands with an
              alcohol-based hand rub or wash them with soap and water as it
              kills viruses that may be on your hands.
            </small>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={servicesImg} alt="services img" />
        </div>
      </div>

      {/* services section */}
      <section>
        <h1 className="text-color text-center pb-3">Our Services</h1>
        <div className="row mb-5 g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
