import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../images/hero-image.png";
import heroAbout from "../../images/hero-about.png";
import symptomImg from "../../images/symptoms-img.png";
import guideImg from "../../images/guide-img.png";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      {/* Showcase section */}
      <section className="row justify-content-between my-5">
        <div className="col-md-5 row align-items-center justify-content-between">
          <div>
            <span className="btn error-btn me-3 py-0">covid-19</span>
            <span className="text-color mt-1">Coronavirus</span>
            <h1 className="text-dark fw-bold mt-4">Prevent the Spread</h1>
            <p className="text-color mb-4">Stay at Home, Stay Safe</p>
            <small className="text-secondary">
              The best way to prevent and slow down transmission is be well
              informed about the COVID-19 virus.
            </small>
            <br />
            <Link
              className="btn rounded-pill btn-home btn-lg mt-3"
              to="/guidelines"
            >
              Learn More{" "}
              <i
                className="fas fa-chevron-right"
                style={{ fontSize: "12px" }}
              ></i>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={heroImage} alt="" />
        </div>
      </section>

      {/* About Section */}
      <section className="row justify-content-between my-5">
        <div className="col-md-6">
          <img className="img-fluid" src={heroAbout} alt="about img" />
        </div>
        <div className="col-md-6 row align-items-center justify-content-between">
          <div>
            <p className="text-color fs-5">About the disease</p>
            <h1 className="text-dark my-3">Coronavirus (COVID-19)</h1>
            <small className="text-secondary">
              Common signs of infection include respiratory symptoms, fever,
              cough, shortness of breath and breathing difficulties. In more
              severe cases, infection can cause pneumonia, severe acute
              respiratory syndrome, kidney failure and even death.
            </small>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="row justify-content-between my-5">
        <div className="col-md-6 row align-items-center justify-content-between">
          <div>
            <p className="text-color fs-5">
              What are the symptoms of COVID-19?
            </p>
            <h1 className="text-dark fs-1 my-3">Symptoms of Coronavirus</h1>
            <small className="text-secondary">
              The most common symptoms of COVID-19 are fever, tiredness, and dry
              cough. Some patients may have aches and pains, nasal congestion,
              runny nose, sore throat or diarrhea. These symptoms are usually
              mild and begin gradually. Also the symptoms may appear 2-14 days
              after exposure.
            </small>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={symptomImg} alt="about img" />
        </div>
      </section>

      {/* Home Services Section */}
      <section>
        <h1 className="text-color text-center pb-3">Services</h1>
        <div className="row mb-5 g-4">
          {services.map((service) => (
            <HomeServices key={service.id} service={service}></HomeServices>
          ))}
        </div>
      </section>

      {/* guidelines section */}
      <section className="row justify-content-between my-5">
        <div className="col-md-6">
          <img className="img-fluid" src={guideImg} alt="about img" />
        </div>
        <div className="col-md-6 row align-items-center justify-content-between">
          <div>
            <p className="text-color fs-5">Wash Your Hands Frequently</p>
            <h1 className="text-dark my-3">
              Protect yourself, wash your hands
            </h1>
            <small className="text-secondary">
              Regularly and thoroughly clean your hands with an alcohol-based
              hand rub or wash them with soap and water as it kills viruses that
              may be on your hands.
            </small>
            <br />
            <Link
              className="btn rounded-pill btn-home btn-lg mt-3"
              to="/guidelines"
            >
              Learn More{" "}
              <i
                className="fas fa-chevron-right"
                style={{ fontSize: "12px" }}
              ></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
