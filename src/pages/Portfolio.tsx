import React, { useEffect } from "react";
import "/src/styles/Portfolio.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";

interface ExperienceCard {
  logo: string;
  title: string;
  company: string;
  date: string;
  description: string[];
  skills: string[];
}

const Portfolio: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const experiences: ExperienceCard[] = [
    {
      logo: "../assets/kindr-logo-white.png",
      title: "Frontend Engineer Intern",
      company: "Neurobit",
      date: "June 2023 - Nov 2023",
      description: [
        "Enhanced user experiences on Neurobit PSG & Hybrid Portals by resolving bugs & reduced load time by 40%.",
        "Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query.",
        "Refactored previous code to TypeScript, updated with new dependency and integrated Vite with Jest for Unit Testing.",
      ],
      skills: [
        "ReactJS",
        "Redux",
        "NodeJs",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    // {
    //   logo: "../assets/winklogopic.png",
    //   title: "Frontend Engineer Intern",
    //   company: "Neurobit",
    //   date: "June 2023 - Nov 2023",
    //   description: [
    //     "Enhanced user experiences on Neurobit PSG & Hybrid Portals by resolving bugs & reduced load time by 40%.",
    //     "Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query.",
    //     "Refactored previous code to TypeScript, updated with new dependency and integrated Vite with Jest for Unit Testing.",
    //   ],
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "NodeJs",
    //     "Material UI",
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //   ],
    // },
    // Add more experiences as needed
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

            <div className="portfolio">
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div
                    className="experience-card"
                    key={index}
                    data-aos="slide-up" // Changed to slide-up for bottom-to-top animation
                    data-aos-delay={`${index * 1000}`} // Adjusting delay to 1 second intervals
                  >
                    <div className="card-content">
                      <div className="logo-container">
                        <img src={exp.logo} alt={`${exp.company} logo`} className="logo" />
                      </div>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <p className="date">{exp.date}</p>
                      {exp.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                      <div className="skills">
                        <strong>Skills:</strong> {exp.skills.join(" • ")}
                      </div>
                    </div>
                    <div className="timeline-dot"></div>
                  </div>
                ))}
              </div>
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
