import React, { useEffect } from "react";
import "/src/styles/Hero.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import game from "../assets/jj.png"

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
        <img src={game} alt="Me" />
      </div>
      <div className="right-section">
        
        <div className="content-section">
          <div className="vertical-links">
            <Link to="/home" data-aos="fade-up" data-aos-delay="100"> Home</Link>
          </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Hero;