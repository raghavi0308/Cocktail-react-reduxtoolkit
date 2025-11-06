import React from "react";

const About = () => {
  return (
    <div className="container mt-4 page-section">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-2 page-title">About</h2>
          <p className="page-lead mb-3">
            Discover classic and modern cocktails, search by name, and view detailed
            ingredients and glassware. Built with React, Redux Toolkit, and Bootstrap.
          </p>
          <div className="mb-3">
            <h5 className="mb-2">What you can do</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">• Browse curated cocktail cards</li>
              <li className="mb-1">• Quick search with instant filtering</li>
              <li className="mb-1">• Detailed views with ingredients</li>
              <li className="mb-1">• Clean, responsive design</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="section-card p-3">
            <h5 className="mb-2">Tech stack</h5>
            <p className="mb-2 text-muted">React • Redux Toolkit • Bootstrap</p>
            <h6 className="mb-1">Data source</h6>
            <p className="mb-0 text-muted">TheCocktailDB public API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


