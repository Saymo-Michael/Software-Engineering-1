import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import Style from "../css modules/ConfidentAssesment.module.css";
import slightly_frowning_face from "../Images/Emoji/slightly-frowning-face.png";
import grinning_face_with_big_eyes from "../Images/Emoji/grinning-face-with-big-eyes.png";
import beaming_face_with_smiling_eyes from "../Images/Emoji/beaming-face-with-smiling-eyes.png";

const DigitalGapApp = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate("/connect-to-phone");
  };

  const handleOrangeClick = () => {
    navigate("/");
  };

  const handleBlueClick = () => {
    navigate("/");
  };

  const handleYellowClick = () => {
    navigate("/");
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      {/* Top Row: Only two squares (Square 1 and Square 2) */}
      <Row className="p-0 m-0" style={{ backgroundColor: "" }}>
        <Col className={clsx(Style.logo_container, "d-sm-none p-0 m-0")}>
          <div className={Style.logo}></div>
        </Col>
        <Col
          className={clsx(
            Style.background_designTop,
            "d-none d-md-block p-0 m-0"
          )}
          style={{ backgroundColor: "" }}
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
          className="d-flex flex-column justify-content-center align-items-end p-0 m-0 me-2"
          style={{ backgroundColor: "" }}
        >
          <Button
            className={Style.getStarted}
            type="button"
            onClick={handleGoBackClick}
          >
            <FaArrowLeft className={Style.arrowLeft} />
            GO BACK
          </Button>
          {/* Line - Hide on md and smaller */}
          <div className={`${Style.backbutton_line} d-none d-md-block`}></div>
        </Col>
      </Row>

      <Row className="p-0 m-0" style={{ backgroundColor: "" }}>
        <div
          className={`${Style.question_top_line} d-block d-md-none p-0 m-0 mt-2 ms-3`}
        ></div>
        <Col
          className={clsx(
            Style.question,
            "d-flex justify-content-center text-center p-0"
          )}
        >
          {`How confident 
          are you in using your 
          smartphone?`}
        </Col>
      </Row>

      <Row
        xs="auto"
        className="d-flex align-items-start p-0 m-0 mb"
        style={{ backgroundColor: "" }}
      >
        <Col
          md={4}
          className={clsx(
            Style.emoji_container,
            "d-flex flex-column justify-content-center align-items-center p-0 m-0 mt-3 mb-3"
          )}
          style={{ backgroundColor: "" }}
        >
          <Image
            src={slightly_frowning_face}
            fluid
            className={clsx(
              Style.slightly_frowning_face,
              Style.emoji,
              "p-0 m-0"
            )}
            style={{ backgroundColor: "" }}
          />
          <Button
            type="button"
            className={clsx(
              Style.emoji_text,
              Style.emoji_button,
              Style.emoji_button_orange,
              "mt-3"
            )}
          >
            {`I struggle with
             most task`}
          </Button>
        </Col>

        <Col
          md={4}
          className={clsx(
            Style.emoji_container,
            "d-flex flex-column justify-content-center align-items-center p-0 m-0 mt-3 mb-3"
          )}
          style={{ backgroundColor: "" }}
        >
          <Image
            src={grinning_face_with_big_eyes}
            fluid
            className={clsx(
              Style.slightly_frowning_face,
              Style.emoji,
              "p-0 m-0"
            )}
            style={{ backgroundColor: "" }}
          />
          <Button
            type="button"
            className={clsx(
              Style.emoji_text,
              Style.emoji_button,
              Style.emoji_button_blue,
              "mt-3"
            )}
          >
            {`I can perform 
            some tasks but
              need help with others`}
          </Button>
        </Col>

        <Col
          md={4}
          className={clsx(
            Style.emoji_container,
            "d-flex flex-column justify-content-center align-items-center p-0 m-0 mt-3"
          )}
          style={{ backgroundColor: "" }}
        >
          <Image
            src={beaming_face_with_smiling_eyes}
            fluid
            className={clsx(
              Style.slightly_frowning_face,
              Style.emoji,
              "p-0 m-0"
            )}
            style={{ backgroundColor: "" }}
          />
          <Button
            type="button"
            className={clsx(
              Style.emoji_text,
              Style.emoji_button,
              Style.emoji_button_yellow,
              "mt-3"
            )}
          >
            {`I feel comfortable
             using my phone`}
          </Button>
        </Col>
      </Row>

      <Row
        className={clsx(
          Style.mobile_margin,
          "flex-grow-1 justify-content-between p-0"
        )}
        style={{ backgroundColor: "" }}
      >
        <Col
          md={4}
          className={clsx(
            Style.logo_container,
            "d-none d-md-block d-flex align-self-end p-0 m-0"
          )}
          style={{ backgroundColor: "" }}
        >
          <div className={clsx(Style.logo, "p-0 mb-4 ms-4")}></div>
        </Col>
        <Col
          md={4}
          className={clsx(
            Style.background_designBot,
            "d-none d-md-flex d-md-block justify-content-end align-items-end p-0 m-0"
          )}
          style={{ backgroundColor: "" }}
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
    </Container>
  );
};

export default DigitalGapApp;
