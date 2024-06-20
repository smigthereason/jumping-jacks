import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import "./App.css";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/about-us" element={<AboutUs />} /> */}
      {/* <Route path="/contacts" element={<Contacts />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
    </Routes>
  );
};

export default App;
