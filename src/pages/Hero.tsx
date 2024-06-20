import React from "react";
import "/src/styles/Hero.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="top-nav">
          <button className="subscribe-btn">Subscribe</button>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/victor.maina.77312/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/smigthereason/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>

            <a
              href="https://x.com/SmigDs"
              target="_blank"
              rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/victor-maina-389318301/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:victor.dmaina@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <MdEmail size={24} />
            </a>
          </div>
        </div>
        <div className="content-section">
          <div className="vertical-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="other-content">
            <p>11 West 53 Street, New York, NY 10019</p>
            <p>P.O.Box 25773-00100 NBI,GPO</p>
            <p>+254 707 098723</p>
            <p>+254 704 542321</p>
            <p>
              <a href="mailto:victor.dmaina@gmail.com">
                victor.dmaina@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:prodbysmig@gmail.com">prodbysmig@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="tag">
          <h2>
            Victor Maina <FaRegCopyright />
            2024{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
