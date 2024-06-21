import React from "react";
import "/src/styles/Contact.css";
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
// import Tag from "../components/Tag";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      {" "}
      {/* Added a container class for styling */}
      <div className="right-section">
        {" "}
        {/* Reversed: Left to Right */}
        <div className="name1">
          <h2>Stephy</h2>
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
          className="contact_block"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          <div className="contact_line">
            <div className="line"></div>
            <span className="section_subtitle">contact</span>
            <div className="line2"></div>
          </div>
          <div className="section_block">
            <h2 className="section_title">
              Let's get in touch and embark on new endavours!
            </h2>
            <p className="contact_text">
              I am geared and ready to to go! You can call or leave a request
              here. I am always glad to have you here from 0900Hrs to 1800Hrs.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="left-section">
        {/* Placeholder for content that was originally in the left section */}
        <div className="tag">
          <a href="/" rel="noopener noreferrer">
            <FaPowerOff size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
