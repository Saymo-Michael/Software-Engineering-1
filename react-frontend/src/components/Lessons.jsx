import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { LuFacebook } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import Style from "../css modules/Lessons.module.css";

const Lessons = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/lessons");
  };

  return (
    <Container
      fluid
      className="d-flex flex-column min-vh-100 p-0 m-0"
      style={{
        border: "2px solid blue",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row className="p-0 m-0">
        <Col
          className={clsx(
            Style.background_designBot,
            "justify-content-end p-0 m-0"
          )}
          style={{ backgroundColor: "green" }}
        >
          <div
            className={clsx(Style.BarShadow, Style.BarTop, Style.orangeTop)}
          ></div>
          <div
            className={clsx(Style.BarShadow, Style.BarTop, Style.blueTop)}
          ></div>
          <div
            className={clsx(Style.BarShadow, Style.BarTop, Style.yellowTop)}
          ></div>
        </Col>
        <Col
          className={clsx(
            Style.logo_container,
            "d-flex justify-content-start ps-5"
          )}
          style={{ backgroundColor: "violet" }}
        >
          <div className={Style.logo}></div>
        </Col>
        <Col>back button here</Col>
      </Row>{" "}
      {/* Top Section */}
      {/* Bottom Section with Columns */}
      <Row style={{ flexGrow: 1, display: "flex" }}>
        <Col
          className={clsx(
            Style.logo_container,
            "d-flex justify-content-end pe-5"
          )}
        >
          <div className={Style.logo}></div>
        </Col>
        <Col className="" style={{ backgroundColor: "lightblue" }}>
          <Container className="d-flex flex-column justify-content-start">
            <a>Lesson 1</a>
            <a>Getting Started with Your Smartphone</a>
            <Button variant="primary">Start</Button>
          </Container>

          <Container className="d-flex flex-column justify-content-start">
            <a>Lesson 2</a>
            <a>Essential Smartphone Functions</a>
            <Button variant="primary">Start</Button>
          </Container>

          <Container className="d-flex flex-column justify-content-start">
            <a>Lesson 3</a>
            <a>Personalization & Troubleshooting</a>
            <Button variant="primary">Start</Button>
          </Container>
        </Col>

        <Col
          style={{
            backgroundColor: "lightgreen",
          }}
        >
          <a>
            This course covers everything from basic tasks like making calls and
            sending messages to advanced features like camera and screen
            recording.
          </a>
        </Col>
        <Col
          style={{
            flexGrow: 1,
            border: "2px solid blue",
            backgroundColor: "lightcoral",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Column 3
        </Col>
        <Col
          style={{
            flexGrow: 1,
            border: "2px solid blue",
            backgroundColor: "lightsalmon",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Column 4
        </Col>
      </Row>
    </Container>
  );
};

export default Lessons;
