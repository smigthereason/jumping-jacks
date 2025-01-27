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
          objectFit: "cover", // Ensure the video covers the entire screen
          zIndex: -1, // Ensure the video stays behind other content
        }}
      >
        <source
          src="https://cdn.pixabay.com/video/2021/09/27/89894-616430996_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

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



