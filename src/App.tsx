import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true); // Set initial state to show loading screen

  useEffect(() => {
    // Simulate a loading duration equal to the animation duration (e.g., 4 seconds)
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loading screen after the animation
    }, 10000); // Duration of the filling animation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loading />; // Show loading screen while `loading` is true
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Background video */}
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
          objectFit: "cover", // Ensures the video covers the entire screen
          zIndex: -1, // Ensure the video stays behind other content
        }}
      >
        <source
          src="https://cdn.pixabay.com/video/2021/11/20/98511-649310767_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/start" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;

