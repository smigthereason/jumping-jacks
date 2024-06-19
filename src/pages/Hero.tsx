import React from "react";
import "/src/styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="top-nav">
          {/* Content for the top navigation */}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere est
            quos optio aspernatur quidem deserunt officiis id neque suscipit!
            Facere, aliquam. Perferendis esse, odit pariatur temporibus suscipit
            accusamus ea voluptates!
          </p>
        </div>
        <div className="content-section">
          <div className="vertical-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="other-content">{/* Content for the third div */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum earum autem reiciendis, dolor eum, exercitationem labore optio numquam debitis quisquam nisi culpa? Natus ducimus aut exercitationem eum laboriosam vel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
