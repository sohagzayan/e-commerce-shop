import React, { Fragment } from "react";
import OurJourney from "../components/About/OurJourney";
import OurTeam from "../components/About/OurTeam";
import WatchStyle from "../components/About/WatchStyle";
import HeaderTwo from "../components/Header/HeaderTwo";
import Footer from "../components/Home/Footer";
import "../style/about/about.css";
const About = () => {
  return (
    <Fragment>
      <HeaderTwo />
      <div>
        <div>
          <h2 className="about-wrapper">ABOUT US</h2>
          <div>
            <WatchStyle />
            <OurJourney />
            <OurTeam />
          </div>
        </div>
      </div>
      <Footer />;
    </Fragment>
  );
};

export default About;
