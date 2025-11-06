import React from "react";

const Footer = () => {
  return (
    <div className="mt-4 site-footer">
      <div className="container p-1 text-center">
        <h2>Cocktail Catalog</h2>
        <h6>&copy; {new Date().getFullYear()} All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
