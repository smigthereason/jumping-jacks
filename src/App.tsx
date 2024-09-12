import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Background video */}
      <video autoPlay muted loop className="background-video" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover", // Ensures the video covers the entire screen
        zIndex: -1, // Ensure the video stays behind other content
      }}>
        <source src="/src/assets/edium.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
