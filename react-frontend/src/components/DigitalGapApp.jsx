import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import Style from "../css modules/DigitalGapApp.module.css";
import phone from "../Images/phoneCropped.png";

const DigitalGapApp = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/connect-to-phone");
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      {/* Top Row: Only two squares (Square 1 and Square 2) */}
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

      {/* Second Grouped Row: Left nested grid and right merged square */}
      <Row className="d-flex flex-grow-1 p-0 m-0">
        {/* Left side: Nested grid */}
        <Col
          lg={4}
          md={6}
          xs={12}
          className="d-flex flex-column flex-grow-1 p-0 m-0"
        >
          {/* Top nested row: Merged rectangle for Square 4 and 5 */}
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

          <Row xs={9} className="flex-grow-1 p-0 m-0">
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

            <Col
              className={clsx(
                Style.followUs_container,
                "d-flex flex-column justify-content-end ps-3 m-0"
              )}
            >
              <p className={clsx(Style.followUs, "p-0 m-0")}>Follow Us On:</p>
              <div className={clsx(Style.social_icons, "ps-2 pb-5 m-0")}>
                <a
                  className="p-0"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LuFacebook />
                </a>
                <a
                  className="p-0"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiInstagram />
                </a>
                <a
                  className="p-0"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  className="p-0"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiYoutube />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
        {/* Right side: Merged square for Square 6/9 */}
        <Col
          lg={5}
          md={6}
          className="d-none d-md-block align-self-end p-0 m-0 d-flex"
        >
          <Container
            className={clsx(
              Style.phone_display,
              "d-flex justify-content-center align-items-center"
            )}
          >
            <Image src={phone} fluid alt="Phone Display" className="p-0 m-0" />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default DigitalGapApp;
