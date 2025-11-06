import React from "react";

const Help = () => {
  return (
    <div className="container mt-4 page-section">
      <h2 className="mb-3 page-title">Help</h2>
      <div className="accordion section-card p-2" id="helpAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              How do I search for a cocktail?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#helpAccordion">
            <div className="accordion-body">
              Use the search box at the top to type a cocktail name. Results update as you type.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Where does the data come from?
            </button>
          </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#helpAccordion">
            <div className="accordion-body">
              Cocktail details are powered by TheCocktailDB public API.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Can I request a new feature?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#helpAccordion">
            <div className="accordion-body">
              Yes. Use the contact form to send feedback or feature requests.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;


