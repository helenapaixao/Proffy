import React from "react";
import Logo from "../../assets/images/logo.svg";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
