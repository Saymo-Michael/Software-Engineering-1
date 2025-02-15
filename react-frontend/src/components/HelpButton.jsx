// src/HelpButton.js
import React, { useState } from "react";
import Joyride from "react-joyride";
import { useLocation } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { Button } from "react-bootstrap";

//import gifs
import getstarted_step from "../Images/NeedHelp/getstarted_step.gif";

const HelpButton = ({ openModal }) => {
  const location = useLocation();
  const [runTour, setRunTour] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getTourSteps = () => {
    switch (location.pathname) {
      case "/":
        return [
          {
            target: "#getstarted_btn", // CSS selector for the element to highlight
            content: (
              <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
                This is your GET STARTED button. Click it to go to the next
                page.
                <img
                  src={getstarted_step}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            ),
            placement: "right",
          },
          {
            target: "#learnmore_link",
            content:
              "This is the LEARN MORE link. Click it to discover additional details about our service.",
            placement: "right",
          },
          {
            target: "#aboutus_section",
            content:
              "Here in the ABOUT US section, learn more about our mission, values, and what we do.",
            placement: "top",
          },
          {
            target: "#development_team",
            content:
              "Meet our DEVELOPMENT TEAM. These are the dedicated professionals behind our platform.",
            placement: "top",
          },
          {
            target: "#followus",
            content:
              "Follow us on social media! Stay updated by connecting with us on Facebook, Instagram, X, and YouTube.",
            placement: "top",
          },
        ];
      case "/connect-to-phone":
        return [
          {
            target: ".connect-button", // CSS selector for the element to highlight
            content: "Click this button to connect to your phone.",
            placement: "top",
          },
        ];
      // Add more cases for other routes
      default:
        return [];
    }
  };

  const handleHelpClick = () => {
    setRunTour(true);
    setShowButton(false);

    const targetElement = document.querySelector(getTourSteps()[0].target);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

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
    <div>
      {/* Help Button */}
      {showButton && (
        <Button
          className="help-button"
          onClick={handleHelpClick}
          style={getHelpButtonPosition()}
        >
          <TiMessages size={30} className="icon" />
          <p>Need Help?</p>
        </Button>
      )}

      {/* Joyride component for guided tour */}
      <Joyride
        steps={getTourSteps()}
        run={runTour}
        continuous={true}
        showSkipButton={true}
        callback={(data) => {
          if (
            data.action === "close" ||
            data.status === "finished" ||
            data.status === "skipped"
          ) {
            setRunTour(false);
            setShowButton(true);
          }
        }}
        styles={{
          tooltip: {
            width: "65vw",
            padding: "20px",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Big Shoulders Display",
          },
          buttonNext: {
            fontSize: "30px !important",
            fontWeight: "700",
            fontFamily: "Big Shoulders Display !important",
          },
          buttonBack: {
            fontSize: "30px !important",
            fontWeight: "700",
            fontFamily: "Big Shoulders Display !important",
          },
          buttonSkip: {
            fontSize: "30px !important",
            fontWeight: "700",
            fontFamily: "Big Shoulders Display !important",
          },
        }}
      />
    </div>
  );
};

export default HelpButton;
