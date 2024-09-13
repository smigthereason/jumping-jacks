import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiArrowForwardOutline } from "react-icons/ti";
import "/src/styles/Header.css";

interface HeaderProps {
  onHomeRedirect: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeRedirect }) => {
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
            className="social-icons"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:victor.dmaina@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons"
          >
            <MdEmail  />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons"
          >
            <FaGithub />
          </a>
          <a
            href="/"
            onClick={onHomeRedirect}
            rel="noopener noreferrer"
            className="social-icons"
          >
            <TiArrowForwardOutline  />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
