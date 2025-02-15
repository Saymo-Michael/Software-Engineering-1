// src/HelpButton.js
import React from "react";
import { useLocation } from "react-router-dom";
import { TiMessages } from "react-icons/ti";

const HelpButton = ({ openModal }) => {
  const location = useLocation(); // This hook should now work properly within Router context

  // Function to return position based on current route
  const getHelpButtonPosition = () => {
    switch (location.pathname) {
      case "/connect-to-phone":
        return { bottom: "30px", left: "30px" };
      case "/confident-assesment":
        return { bottom: "30px", right: "12%" };
      case "/lessons":
        return { bottom: "50px", right: "4%" };
      default:
        return { bottom: "50px", right: "50px" };
    }
  };

  return (
    <div className="help-button" onClick={openModal} style={getHelpButtonPosition()}>
      <TiMessages size={30} className="icon" />
      <p>Need Help?</p>
    </div>
  );
};

export default HelpButton;
