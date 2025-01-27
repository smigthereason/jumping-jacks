import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "/src/styles/Home.css";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import jj from "../assets/jj.png";
import vid from "../assets/jumpingjacklanding.mp4";
import one from "../assets/1.jpeg";
import two from "../assets/2.jpeg";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="home-container" data-aos="zoom-out">
        <video
          autoPlay
          muted
          loop
          className="background-video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the video covers the entire screen
            zIndex: -1, // Ensure the video stays behind other content
          }}
        >
          <source src="https://cdn.pixabay.com/video/2021/09/27/89894-616430996_large.mp4" 
          type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="right-section1">
          <Header />
          <div className="scrollable-container">
            <div className="home_block" data-aos="fade-up" data-aos-delay="300">
              <div className="title_block">
                <h2 className="title">
                  Bounce, fall, repeat! Guide Jack, our clumsy pogo stick rider,
                  through tricky obstacles on his way up. Jack's only goal to
                  climb higher but no one knows what awaits at the top -a way
                  out or an even greater mystery. But remember, one mistake
                  could send you tumbling all the way down!
                </h2>
              </div>
              <div className="house">
                <div className="info-box-container">
                  <Button1 />
                  <Button2 />
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
                <img src={jj} alt="Slide 1" className="slide1" />
              </SplideSlide>
              <SplideSlide>
                <video
          src={vid}
                  
                  autoPlay
                  loop
                  muted
                  className="slide-video"
                ></video>
              </SplideSlide>
              <SplideSlide>
                <img src={one} alt="Slide 2" className="slide3" />
              </SplideSlide>

              <SplideSlide>
                <img src={two} alt="Slide 3" className="slide4" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
