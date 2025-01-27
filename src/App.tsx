import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Track current location

  useEffect(() => {
    if (location.pathname === "/") {
      // Only run the timer if the current path is the root (initial loading)
      const timer = setTimeout(() => {
        setLoading(false); // Stop loading after 10 seconds
        navigate("/home"); // Redirect to `/start` after loading is done
      }, 10000); // 10 seconds for the loading screen

      return () => clearTimeout(timer); // Clean up the timer
    } else {
      // If not on the root path, immediately set loading to false
      setLoading(false);
    }
  }, [location.pathname, navigate]); // Run only when location changes

  if (loading && location.pathname === "/") {
    return <Loading />; // Show Loading screen only on root path
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Loading />} />
        {/* <Route path="/start" element={<Hero />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;



