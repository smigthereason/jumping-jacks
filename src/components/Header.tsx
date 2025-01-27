import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom"; 
import "/src/styles/Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate(); 

  const handleHomeRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault(); 
    navigate("/"); 
  };

  return (
    <nav className="head">
      <div className="name">
        <h2>Jumping Jack</h2>
      </div>
      <div className="top-nav">
        <div className="social-icons1">
        
         
          <a
            href="/start"
            onClick={handleHomeRedirect} 
            rel="noopener noreferrer"
            className="social-icons"
          >
            <TiArrowForwardOutline />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
