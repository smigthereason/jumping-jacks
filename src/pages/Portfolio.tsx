import React from "react";
import "/src/styles/Portfolio.css"; 
import Header from "../components/Header";


const Portfolio: React.FC = () => {
  return (
    <div className="home-container"> {/* Added a container class for styling */}
      <div className="right-section"> {/* Reversed: Left to Right */}
        
      <Header />
      </div>
      <div className="left-section">
        {/* Placeholder for content that was originally in the left section */}
        
        
      </div>
    </div>
  );
};

export default Portfolio;
