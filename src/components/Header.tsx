import React from "react";
import "/src/styles/Header.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiArrowForwardOutline } from "react-icons/ti";


const Header: React.FC = () => {
  return (
    <nav className="head">
  
      <div className="name">
        <h2>Victor</h2>
      </div>
      <div className="top-nav">
        <div className="social-icons1">
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
          <a
            href="mailto:victor.dmaina@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a href="/" rel="noopener noreferrer">
          <TiArrowForwardOutline  size={24} />
          </a>
        </div>
        {/* <button className="subscribe-btn">GitHub</button> */}
        <div className="close"></div>
      </div>
      
    </nav>
  );
};

export default Header;
