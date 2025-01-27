import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "/src/styles/Home.css";
import "/src/styles/Portfolio.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Omega from "../assets/logos/omega.png";
import Logo from "../assets/logos/kindr-logo.png";
import Tune from "../assets/logos/tune.png";
import WinkLogo from "../assets/logos/wink-transparent.png";
import TypedJS from "../components/TypedJS";
import Button from "../components/Button";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

 
  
    const categories = ["Full Stack Web-Developer.", "UI/UX Designer."];
    
  
   
  
    return (
      <>
      <div className="home-container" data-aos="zoom-out">
        <div className="right-section1">
          <Header />
          <div className="scrollable-container">
            <div className="home_block" data-aos="fade-up" data-aos-delay="300">
              <LineHead title="Home" />
              <div className="title_block">
                <h1 className="title">
                  My name is Victor.
                  <br />
                  I am a <br /> <TypedJS strings={categories} />
                </h1>
              </div>
              <div className="house">
                <div className="info-box-container">
                 
                  <Button />
                  <Button />
                </div>
                
              </div>
            </div>
          </div>
        </div>
          <div className="left-section">
            <div
              className="slides"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
            >
              <Splide
                options={{
                  type: "loop",
                  perPage: 1,
                  autoplay: true,
                  interval: 5000,
                  speed: 2500,
                }}
              >
                <SplideSlide>
                  <img src={Omega} alt="Slide 1" className="slide1" />
                </SplideSlide>
                <SplideSlide>
                  <img src={Logo} alt="Slide 2" className="slide2" />
                </SplideSlide>
                <SplideSlide>
                  <img src={Tune} alt="Slide 3" className="slide3" />
                </SplideSlide>
                <SplideSlide>
                  <h3>Passionate-Angels</h3>
                </SplideSlide>
                <SplideSlide>
                  <img src={WinkLogo} alt="Slide 5" className="slide4" />
                </SplideSlide>
                <SplideSlide>
                  <h2>Korda-Lavare</h2>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Home;