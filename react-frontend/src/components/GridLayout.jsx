import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import Style from "../css modules/GridLayout.module.css";

const GridLayout = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/connect-to-phone");
  };

  return (
    <Container
      Container
      fluid
      className="d-flex flex-column min-vh-100 p-0 m-0"
    >
      {/* First Row - 2 Equal Columns */}
      <Row className="p-0 m-0">
        <Col className={Style.logo_container}>
          <div className={Style.logo}></div>
        </Col>
        <Col
          className={clsx(
            Style.background_designTop,
            "align-items-end p-0 m-0"
          )}
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
      </Row>

      {/* Second Row - Nested Layout */}
      <Row
        className="d-flex flex-grow-1 p-0 m-0"
        style={{ backgroundColor: "black" }}
      >
        {/* Left side with 3 stacked rows */}
        <Col
          lg={4}
          md={6}
          xs={12}
          className="d-flex flex-column flex-grow-1 p-0 m-0"
        >
          <Row className="p-0 pt-4 pb-5 m-0">
            <Col className="d-flex flex-column align-items-center p">
              <div className={Style.quote}>
                {"\u00A0"} "Bridging the Digital Gap"
              </div>
              <Button
                className={Style.getStarted}
                type="button"
                onClick={handleGetStartedClick}
              >
                GET STARTED
                <FaArrowRight className={Style.arrowRight} />
              </Button>
            </Col>
          </Row>

          <Row className="p-0 m-0">
            <Col
              className={clsx(
                Style.background_designBot,
                "justify-content-end p-0 m-0"
              )}
            >
              <div
                className={clsx(Style.BarShadow, Style.BarBot, Style.orangeBot)}
              ></div>
              <div
                className={clsx(Style.BarShadow, Style.BarBot, Style.blueBot)}
              ></div>
              <div
                className={clsx(Style.BarShadow, Style.BarBot, Style.yellowBot)}
              ></div>
            </Col>
          </Row>
          <Row className="p-0 m-0">
            <Col className={clsx(Style.square, Style.square5, "p-0 m-0")}>
              i
            </Col>
          </Row>
        </Col>

        {/* Right side - Single merged row */}
        <Col className={clsx(Style.square, Style.square6, "p-0 m-0")}>6</Col>
      </Row>

      {/* Third Row - 2 Equal Columns */}
      <Row className="d-flex p-0 m-0">
        <Col className={clsx(Style.square, Style.square7, "p-0 m-0")}>7</Col>
        <Col className={clsx(Style.square, Style.square8, "p-0 m-0")}>8</Col>
      </Row>
    </Container>
  );
};

export default GridLayout;
