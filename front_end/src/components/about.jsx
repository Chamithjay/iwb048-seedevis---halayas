import React, { useEffect, useState } from "react";
import "./CSS/about.css";
import imgVision from "./images/vision.jpg";
import imgMission from "./images/mission.jpg";
import imgImpact from "./images/impact.jpg";
import imgJoin from "./images/join.jpg";
import NavBar from "./navbar";

const AboutPage = () => {
  const [aboutUsVisible, setAboutUsVisible] = useState(true);

  useEffect(() => {
    const blocks = document.querySelectorAll(".block");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    blocks.forEach((block) => {
      observer.observe(block);
    });
  }, []);

  return (
    <div>
        <NavBar />
    <div className="about-page">
        
      <div className="about-us-container">
        <h1 className="about-heading">About Us</h1>
      </div>

      <div className="block left">
        <div className="text-content">
          <h2 className="section-heading">Our Vision</h2>
          <p className="about-description">
            We envision a world where no one has to suffer due to a lack of
            blood. By fostering a community of generous donors, we aim to create
            a reliable supply of blood for hospitals and patients in need.
          </p>
        </div>
        <div className="image-content">
          <img src={imgVision} alt="Vision" />
        </div>
      </div>

      <div className="block right">
        <div className="text-content">
          <h2 className="section-heading">Our Mission</h2>
          <p className="about-description">
            Our mission is to educate and inspire people to donate blood
            regularly and to provide a seamless experience for both donors and
            recipients. Through our platform, we aim to make blood donation a
            simple and rewarding experience.
          </p>
        </div>
        <div className="image-content">
          <img src={imgMission} alt="Mission" />
        </div>
      </div>

      <div className="block left">
        <div className="text-content">
          <h2 className="section-heading">How We Are Making an Impact</h2>
          <p className="about-description">
            We work tirelessly to create awareness and encourage blood donation.
            Our outreach programs and partnerships with hospitals help ensure
            that blood reaches those who need it most.
          </p>
        </div>
        <div className="image-content">
          <img src={imgImpact} alt="Impact" />
        </div>
      </div>

      <div className="block right">
        <div className="text-content">
          <h2 className="section-heading">We Can't Do It Alone</h2>
          <p className="about-description">
            Your support is crucial. We encourage everyone to join us in our
            mission and contribute to saving lives through blood donation.
          </p>
        </div>
        <div className="image-content">
          <img src={imgJoin} alt="Support" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;