import React from "react";
import "/src/styles/About.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-container">
      {" "}
      {/* Added a container class for styling */}
      <div className="right-section">
        {" "}
        {/* Reversed: Left to Right */}
        <Header />
        <div
          className="about-container"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          <LineHead title="about me"/>
          <div className="main-content">
            <div className="content1">
              <p className="center-text">
                I'm a dedicated developer and current student at Moringa School,
                deeply passionate about web development and machine learning.{" "}
                <br /> I thrive on creating cutting-edge solutions and
                constantly expanding my knowledge of new technologies.
              </p>
            </div>

            <div className="skills-container">
              <div className="skills-box">
                <div className="skills-section">
                  <h2>🛠️ Skills and Tools</h2>
                  <h3>Technologies</h3>
                  <p>
                    <img
                      src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                      alt="React"
                    />
                    <img
                      src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white"
                      alt="Node.js"
                    />
                    <img
                      src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                      alt="Tailwind CSS"
                    />
                    <img
                      src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      alt="CSS"
                    />
                    <img
                      src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                      alt="Git"
                    />
                    <img
                      src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
                      alt="Flask"
                    />
                    <img
                      src="https://img.shields.io/badge/SQLAlchemy-1F1F1F?style=for-the-badge&logo=python&logoColor=white"
                      alt="SQLAlchemy"
                    />
                    <img
                      src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=sqlite&logoColor=white"
                      alt="SQL"
                    />
                  </p>
                </div>

                <div className="skills-section">
                  <h3>Languages</h3>
                  <p>
                    <img
                      src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                      alt="Python"
                    />
                    <img
                      src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                      alt="JavaScript"
                    />
                    <img
                      src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                      alt="TypeScript"
                    />
                  </p>
                </div>

                <div className="skills-section">
                  <h3>Tools</h3>
                  <p>
                    <img
                      src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                      alt="VSCode"
                    />
                    <img
                      src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                      alt="Postman"
                    />
                    <img
                      src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"
                      alt="Vite"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="content5">
              <h3 className="center-text">🌱 Current Focus</h3>
              <p className="center-text">
                I'm currently immersing myself in data structures and databases.
                My journey of learning is ongoing, and I'm always on the lookout
                for exciting new technologies to explore.
              </p>
            </div>

            <div className="content6">
              <h3 className="center-text">Stats</h3>
              <p className="center-text">
                <img
                  src="https://github-readme-stats.vercel.app/api/wakatime?username=smigthereason&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&range=all_time"
                  alt="WakaTime stats"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="left-section">
        {/* Placeholder for content that was originally in the left section */}
        <div className="tag"></div>
      </div>
    </div>
  );
};

export default About;
