import React from "react";

import { Container } from "react-bootstrap";
import logo from "./logo.JPG"; 
import phone from "./phone.JPG";
import { FaArrowRight } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import "./DigitalGapApp.css"; 

const DigitalGapApp = () => {
  const navigate = useNavigate();  
  
  const handleGetStartedClick = () => {
    navigate("/connect-to-phone");
  };

  return (
    <Container fluid className="LandingPage">

        <div className="logo-container">
            <img src={logo} alt="DigitalGap Logo" className="logo" draggable="false"/>
        </div>

        <div className="background-designTop">
            <div className="layer orangeTop"></div>
            <div className="layer blueTop"></div>
            <div className="layer yellowTop"></div>
        </div>

        <div className="quote">"Bridging the Digital Gap"</div> 

        <button className="getStarted" onClick={handleGetStartedClick} >GET STARTED 
            <FaArrowRight className="arrowRight" /> 
        </button>
        
        <div className="background-designBot">
            <div className="layer orangeBot"></div>
            <div className="layer blueBot"></div>
            <div className="layer yellowBot"></div>
        </div>

        <div>
            <p className="followUs">Follow Us On:</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <LuFacebook />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <SiInstagram />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <FiYoutube />
                </a>                
            </div>
        </div>

        <div className="phone-container">
            <img src={phone} alt="DigitalGap Phone" className="phone-display" draggable="false"/>
        </div>
    </Container>
  );
};

export default DigitalGapApp;
