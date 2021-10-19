import React from "react";
import hospital from "../../images/hospital.jpg";
import mission from "../../images/mission.jpg";

const About = () => {
  return (
    <div className="container">
      <section className="row justify-content-between my-5">
        <div className="col-md-5 row align-items-center justify-content-between">
          <div>
            <p className="text-color mb-4 fs-3">Covid Care</p>
            <h1 className="text-dark fw-bold mt-4">
              GET A WORLD CLASS HEALTH SERVICE
            </h1>
            <small className="text-secondary">
              Covid care has all the characteristics of a world-class hospital
              with wide range of services and specialists, equipments and
              technology, ambience and service quality. The hospital is a
              showcase of synergy of medical technology and advances in ICT
              Division through paperless medical records. The skilled nurses,
              technologists and administrators of Bangladesh Specialized
              Hospital, aided by state-of-the-art equipments, provide a
              congenial infrastructure for the medical professionals in
              providing healthcare of international standards.
            </small>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={hospital} alt="" />
        </div>
      </section>

      {/* About Section */}
      <section className="row justify-content-between my-5">
        <div className="col-md-6">
          <img className="img-fluid" src={mission} alt="about img" />
        </div>
        <div className="col-md-6 row align-items-center justify-content-between">
          <div>
            <p className="text-color fs-5">WHO WE ARE</p>
            <h1 className="text-dark my-3">Why Choose Covid Care?</h1>
            <small className="text-secondary">
              Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a
              robust presence across the healthcare ecosystem. From routine
              wellness & preventive health care to innovative life-saving
              treatments and diagnostic services, Apollo Hospitals has touched
              more than 120 million lives from over 120 countries, offering the
              best clinical outcomes.
            </small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
