import React, { useEffect, useState } from "react";
import "/src/styles/Portfolio.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


interface ExperienceCard {
  logo: string;
  title: string;
  product: string;
  description: string[];
  skills: string[];
}

const Portfolio: React.FC = () => {
  const [, setSlideOut] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  const handleHomeRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setSlideOut(true);

    setTimeout(() => {
      navigate("/");
    }, 1000); // Adjust the duration to match your AOS animation duration
  };
  

  const experiences: ExperienceCard[] = [
    {
      logo: "/src/assets/logos/kindr-logo.png",
      title: "Full-Stack Developer",
      product: "Kindr",
      description: ["", "", "", "", ""],
      skills: [
        "ReactJS",
        "HTML",
        "CSS",
        "Tailwind",
        "Vite",
        "TypeScript",
        "Flask",
        "SQLAlchemy",
        "Python",
      ],
    },
    {
      logo: "/src/assets/logos/wink-transparent.png",
      title: "Full-Stack Developer",
      product: "Wink",
      description: [
        "Enhanced user experiences on Wink by resolving bugs & reduced load time by 40%.",
        "Built the API and database using Flask, SQLAlchemy, and Python.",
        "Refactored previous code to TypeScript.",
        "Created the frontend design and graphical interface using React",
        "Integrated payment plans through PayPal for seamless transactions.",
      ],
      skills: [
        "ReactJS",
        "HTML",
        "CSS",
        "TypeScript",
        "Flask",
        "SQLAlchemy",
        "Python",
      ],
    },
    {
      logo: "/src/assets/logos/av-high.png",
      title: "Frontend Engineer",
      product: "AnimeVerse",
      description: [
        "A Comprehensive Anime and Manga Information Portal.",
        "Built AnimeVerse portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query.",
      ],
      skills: ["ReactJS", "HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <><div className="home-container">
      <div className="right-section">
      <Header onHomeRedirect={handleHomeRedirect} />
        <div
          className="about-container"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          <LineHead title="portfolio" />
          <div className="portfolio">
            <h1>From Concept to Reality: My Project Portfolio</h1>

            <div className="timeline">
              {experiences.map((exp) => (
                <div
                  className="experience-card">
                  <div className="card-content">
                    <div className="logo-container">
                      <img
                        src={exp.logo}
                        alt={`${exp.product} logo`}
                        className="logo"
                      />
                    </div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.product}</h4>
                    {exp.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                    <div className="skills">
                      <h3>Skills:</h3>
                      <p>{exp.skills.join(" • ")}</p>
                    </div>
                  </div>
                  <div className="timeline-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="left-section">
        <div className="tag"></div>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
