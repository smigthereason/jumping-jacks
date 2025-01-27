import React from 'react';
import '../styles/Button.css';

const Button: React.FC = () => {
  const handleClick = () => {
    // Open the Steam link in a new tab
    window.open('https://store.steampowered.com/app/3205090/Jumping_Jack/', '_blank');
  };

  return (
    <button className="download-button" onClick={handleClick}>
      Play Game
    </button>
  );
};

export default Button;
