import React, { useEffect } from "react";
import "/src/styles/Hero.css";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="hero-container" data-aos="zoom-out">
      <div className="left-section">
        <img src="/src/assets/06.png" alt="Me" />
      </div>
      <div className="right-section">
        <video autoPlay muted loop className="background-video">
          <source src="https://cdn.pixabay.com/video/2021/11/20/98511-649310767_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-section">
          <div className="vertical-links">
            <Link to="/home" data-aos="fade-up" data-aos-delay="100">Home</Link>
            <Link to="/about" data-aos="fade-up" data-aos-delay="200">About</Link>
            <Link to="/portfolio" data-aos="fade-up" data-aos-delay="300">Portfolio</Link>
            <Link to="/contact" data-aos="fade-up" data-aos-delay="400">Contact</Link>
          </div>
          <div className="other-content" data-aos="fade-in" data-aos-delay="500">
            <p>P.O.Box 25773-00100 NBI,GPO</p>
            <p><a href="mailto:victor.dmaina@gmail.com">victor.dmaina@gmail.com</a></p>
            <p><a href="mailto:prodbysmig@gmail.com">prodbysmig@gmail.com</a></p>
            <p>+254 707 098723</p>
            <p>+254 704 542321</p>
          </div>
        </div>
        <div className="tag-1">
          <h2>Victor Maina <FaRegCopyright /> 2024 </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;