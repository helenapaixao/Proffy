import React from "react";
import Logo from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={LandingImg} alt="landing" className="hero-image" />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="study" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="study" />
            Estudar
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coração" />
        </span>
      </div>
    </div>
  );
}

export default Landing;