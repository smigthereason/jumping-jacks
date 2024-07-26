import React from "react";
import "/src/styles/Home.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPowerOff,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Button from "../components/Button";
const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const categories = [
    "Designer",
    "Developer",
    "Lover",
    "Treasure",
    "Beauty",
    "Gift",
    "Darling",
  ];

  return (
    <div className="home-container">
      <div className="right-section">
        <div
          className="scrollable-container"
          style={{
            height: "auto",
            overflowY: "auto",
            padding: "10px",
          }}
        >
          <div className="name">
            <h2>Victor</h2>
          </div>
          <div className="top-nav">
            <div className="social-icons1">
              <a
                href="https://www.facebook.com/victor.maina.77312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/smigthereason/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://x.com/SmigDs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/victor-maina-389318301/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:victor.dmaina@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail size={24} />
              </a>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div
            className="home_block"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            <div className="contact_line">
              <div className="line"></div>
              <span className="section_subtitle">Home</span>
              <div className="line2"></div>
            </div>
            <div className="title_block">
              <h1 className="title">
                My name is Stephy,
                <p>
                  I am a <br /> <TypedJS strings={categories} />
                </p>
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
       <Button/>
      </div>
    </div>
          </div>
        </div>
      </div>
      <div className="left-section1">
        <div className="close">
          <a href="/" rel="noopener noreferrer">
            <FaPowerOff size={32} />
          </a>
        </div>
        <img src="/src/assets/50.png" alt="Me2" />
      </div>
    </div>
  );
};

export default Home;
