import React from "react";

import { Container } from "react-bootstrap";
import logo from "./logo.JPG"; 
import phoneQR from "./phoneQR.JPG";

import "./ConnectToPhone.css";

const ConnectToPhone = () => {
  return (
    <Container fluid className="ConnectToPhone">

        <div className="logoCTP-container">
            <img src={logo} alt="DigitalGap LogoCTP" className="logoCTP" draggable="false"/>
        </div>

        <div className="background-designTopCTP">
            <div className="layer orangeTopCTP"></div>
            <div className="layer blueTopCTP"></div>
            <div className="layer yellowTopCTP"></div>
        </div>

        <div className="quoteCPT">Connect your smartphone.</div> 

        <button className="continue" > Continue </button>

        <div className="phoneQR-container">
            <img src={phoneQR} alt="DigitalGap PhoneQR" className="phoneQR-display" draggable="false"/>
        </div>

        <div className="background-designBotCTP">
            <div className="layer orangeBotCTP"></div>
            <div className="layer blueBotCTP"></div>
            <div className="layer yellowBotCTP"></div>
        </div>

    </Container>
  );
};

export default ConnectToPhone;
