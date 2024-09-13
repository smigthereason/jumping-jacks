import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Button from "../components/Button";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import "/src/styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const categories = ["Full Stack Web-Developer.", "UI/UX Designer."];

  const handleHomeRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Add AOS animation before navigating back to Hero
    document.querySelector(".home-container")?.setAttribute("data-aos", "zoom-out");

    // Wait for the AOS animation to complete before navigating
    setTimeout(() => {
      navigate("/"); // Navigate to the Hero route after animation
    }, 1000); // Ensure this matches the AOS duration
  };

  return (
    <div
      className="home-container"
      data-aos="zoom-out"
      data-aos-duration="3000"
      data-aos-delay="0"
    >
      <div className="right-section">
        <Header onHomeRedirect={handleHomeRedirect} />
        <div
          className="scrollable-container"
          style={{
            height: "auto",
            overflowY: "hidden",
            padding: "10px",
          }}
        >
          <div
            className="home_block"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            <LineHead title="Home" />
            <div className="title_block">
              <h1 className="title">
                My name is Victor.
                <br />
                I am a <br /> <TypedJS strings={categories} />
              </h1>
            </div>
            <div className="house">
              <div className="info-box-container">
                <div className="info-box">
                  <span className="info-number">7+</span>
                  <span className="info-text">Months of experience</span>
                </div>
                <div className="info-box">
                  <span className="info-number">1.5k+</span>
                  <span className="info-text">Hours of Waka Time</span>
                </div>
              </div>
              <div className="download-cv">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-section1">
        <div className="close">
          <img src="/src/assets/50.png" alt="Me2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
