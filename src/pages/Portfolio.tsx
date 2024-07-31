import React, { useEffect } from "react";
import "/src/styles/About.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectCard {
  icon: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures this runs once on mount

  const projects: ProjectCard[] = [
    {
      icon: '🚀',
      title: 'Project 1',
      description: 'Description of Project 1',
    },
    {
      icon: '💡',
      title: 'Project 2',
      description: 'Description of Project 2',
    },
    {
      icon: '🌟',
      title: 'Project 3',
      description: 'Description of Project 3',
    },
  ];

  return (
    <div className="home-container">
      <div className="right-section">
        <Header />
        <div
          className="about-container"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          <LineHead title="portfolio" />
          <div className="portfolio">
            <h1>Let's get in touch and embark on new endeavours!</h1>
            <div className="project-container">
              {projects.map((project, index) => (
                <React.Fragment key={index}>
                  <div className="project-card">
                    <div className="project-icon">{project.icon}</div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                  {index < projects.length - 1 && <div className="vertical-line"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="left-section">
        <div className="tag"></div>
      </div>
    </div>
  );
};

export default Portfolio;