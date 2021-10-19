import React from "react";
import guidelineImg from "../../images/guildeline-banner.jpg";

const Guidelines = () => {
  return (
    <div className="container">
      <div className="row my-5 justify-content-between">
        <div className="col-md-6 row align-items-center">
          <img src={guidelineImg} className="img-fluid" alt="guidelineImg" />
        </div>
        <div className="col-md-6">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  What can I do to protect myself and prevent the spread of
                  disease?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  Regularly and thoroughly clean your hands with an
                  alcohol-based hand rub or wash them with soap and water. Why?
                  Washing your hands with soap and water or using alcohol-based
                  hand rub kills viruses that may be on your hands. Maintain at
                  least 1 metre (3 feet) distance between yourself and anyone
                  who is coughing or sneezing.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  What should I do if I had close contact with someone who has
                  COVID-19?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  Household members, intimate partners, and caregivers in a
                  nonhealthcare setting may have close contact2 with a person
                  with symptomatic, laboratory-confirmed COVID-19 or a person
                  under investigation. Close contacts should monitor their
                  health; they should call their healthcare provider right away
                  if they develop symptoms suggestive of COVID-19 (e.g., fever,
                  cough, shortness of breath).
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Who is at higher risk for serious illness from COVID-19?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  Older adults and people of any age who have serious underlying
                  medical conditions may be at higher risk for more serious
                  complications from COVID-19. These people who may be at higher
                  risk of getting very sick from this illness.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
