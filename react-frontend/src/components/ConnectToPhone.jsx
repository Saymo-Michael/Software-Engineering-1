import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { LuFacebook } from "react-icons/lu";
// import { FaArrowLeft } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import Style from "../css modules/ConnectToPhone.module.css";
import phone from "../Images/phoneQR.png";

const ConnectToPhone = () => {
  const navigate = useNavigate();

  // const handleGoBackClick = () => {
  //   navigate("/");
  // };

  const handleContinueClick = () => {
    navigate("/confident-assesment");
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      {/* Top Row: Only two squares (Square 1 and Square 2) */}
      <Row className="p-0 m-0">
        <Col
          className={clsx(
            Style.background_designBot,
            "justify-content-end p-0 m-0"
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
        <Col
          className={clsx(
            Style.logo_container,
            "d-flex justify-content-end pe-5"
          )}
        >
          <div className={Style.logo}></div>
        </Col>
      </Row>

      {/* Second Grouped Row: Left nested grid and right merged square */}
      <Row className="d-flex flex-grow-1 p-0 m-0">
        {/* Phone Grid: Nested grid */}
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

        {/* Right nested grid: Nested grid */}
        <Col
          lg={4}
          md={6}
          xs={12}
          className="d-flex flex-column flex-grow-1 p-0 m-0"
        >
          {/* Top nested row: Merged rectangle for Square 4 and 5 */}
          <Row className="p-0 pt-4 pb-3 m-0">
            <Col className="d-flex flex-column align-items-center">
              <div className={Style.quote}>Connect your smartphone.</div>

              <div className="d-flex flex-column align-items-end ">
                <Button
                  className={clsx(Style.getStarted, "mb-3")}
                  type="button"
                  onClick={handleContinueClick}
                >
                  Continue
                </Button>
                {/* <a className={Style.goBack} onClick={handleGoBackClick}>
                  <FaArrowLeft className={Style.arrowLeft} />
                  Go Back
                </a> */}
              </div>
            </Col>
          </Row>

          <Row xs={9} className="flex-grow-1 p-0 m-0">
            <Col
              xs="auto"
              className={clsx(
                Style.followUs_container,
                "d-flex flex-column justify-content-end align-items-end pe-3 m-0"
              )}
            >
              <p className={clsx(Style.followUs, "pe-5 m-0")}>Follow Us On:</p>
              <div className={clsx(Style.social_icons, "pe-2 pb-5 m-0")}>
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

            <Col
              className={clsx(
                Style.background_designTop,
                "justify-content-end  align-items-end p-0 m-0"
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
        </Col>
      </Row>
    </Container>
  );
};

export default ConnectToPhone;
