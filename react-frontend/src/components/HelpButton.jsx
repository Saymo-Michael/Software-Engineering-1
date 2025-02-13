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
        // return { bottom: "50px", right: "30px" };
        
        if (window.innerWidth < 768) {
          return { bottom: "50px", right: "30px" };
        } else if (window.innerWidth < 1028) {
          return { bottom: "50px", right: "180px" };
        } else {
          return { bottom: "50px", right: "250px" };
        }
      case "/lessons":
        return { bottom: "20px", right: "20px" };
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
