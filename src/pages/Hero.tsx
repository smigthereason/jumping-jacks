import React, { useEffect } from "react";
import "/src/styles/Hero.css";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="home-container"
      data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      <div className="left-section">
        <img src="/src/assets/06.png" alt="Me" />
      </div>
      <div className="right-section">
        <video autoPlay muted loop className="background-video">
          <source src="/src/assets/edium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-section">
          <div className="vertical-links">
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/home"
            >
              Home
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/about"
            >
              About
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div
            className="other-content"
            data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-delay="1000"
          >
            <p>P.O.Box 25773-00100 NBI,GPO</p>
            <p>
              <a href="mailto:victor.dmaina@gmail.com">
                victor.dmaina@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:prodbysmig@gmail.com">prodbysmig@gmail.com</a>
            </p>
            <p>+254 707 098723</p>
            <p>+254 704 542321</p>
          </div>
        </div>
        <div className="tag-1">
          <h2>
            Victor Maina <FaRegCopyright /> 2024{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
