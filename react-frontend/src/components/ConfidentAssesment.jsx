import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Style from "../css modules/ConfidentAssesment.module.css";

import slightly_frowning_face from "../Images/Emoji/slightly-frowning-face.png";
import grinning_face_with_big_eyes from "../Images/Emoji/grinning-face-with-big-eyes.png";
import beaming_face_with_smiling_eyes from "../Images/Emoji/beaming-face-with-smiling-eyes.png";

const ConfidentAssesment = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    if (window.innerWidth < 768) {
      navigate("/");
    } else {
      navigate("/connect-to-phone");
    }
  };

  // New helper: pass maxLesson state to /lessons
  const handleOptionClick = (maxLesson) => {
    navigate("/lessons", { state: { maxLesson } });
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      {/* Top Row */}
      <Row className="p-0 m-0">
        <Col className={clsx(Style.logo_container, "d-sm-none p-0 m-0")}>
          <div className={Style.logo}></div>
        </Col>
        <Col
          className={clsx(Style.background_designTop, "d-none d-md-block p-0 m-0")}
        >
          <div className={clsx(Style.BarShadow, Style.BarTop, Style.orangeTop)}></div>
          <div className={clsx(Style.BarShadow, Style.BarTop, Style.blueTop)}></div>
          <div className={clsx(Style.BarShadow, Style.BarTop, Style.yellowTop)}></div>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-end p-0 m-0">
          <div className={Style.goBack_container}>
            <Button
              className={Style.goBack}
              type="button"
              onClick={handleGoBackClick}
              id="backbtn_skillassesment"
            >
              <FaArrowLeft className={Style.arrowLeft} />
              GO BACK
            </Button>
            <div className={`${Style.backbutton_line} d-none d-md-block`}></div>
          </div>
        </Col>
      </Row>

      <Row className="p-0 m-0">
        <div
          className={`${Style.question_top_line} d-block d-md-none justify-content-center p-0 m-0 mt-2 ms-3`}
        ></div>
        <Col className={clsx(Style.question, "d-flex justify-content-center text-center p-0")}>
          {`How confident 
          are you in using your 
          smartphone?`}
        </Col>
      </Row>

      <Row
        xs="auto"
        className="d-flex align-items-center p-0 m-0 mb"
        id="skillassesment"
      >
        <Col
          md={4}
          className={clsx(
            Style.emoji_container,
            "d-flex flex-column justify-content-center align-items-center p-0 m-0 mt-3 mb-3"
          )}
        >
          <Image
            src={slightly_frowning_face}
            fluid
            className={clsx(Style.slightly_frowning_face, Style.emoji, "p-0 m-0")}
          />
          <Button
            type="button"
            className={clsx(
              Style.emoji_text,
              Style.emoji_button,
              Style.emoji_button_orange,
              "mt-3"
            )}
            // Only Lesson 1 unlocked
            onClick={() => handleOptionClick(1)}
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
        >
          <Image
            src={grinning_face_with_big_eyes}
            fluid
            className={clsx(Style.slightly_frowning_face, Style.emoji, "p-0 m-0")}
          />
          <Button
            type="button"
            className={clsx(
              Style.emoji_text,
              Style.emoji_button,
              Style.emoji_button_blue,
              "mt-3"
            )}
            // Lessons 1 and 2 unlocked
            onClick={() => handleOptionClick(2)}
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
        >
          <Image
            src={beaming_face_with_smiling_eyes}
            fluid
            className={clsx(Style.slightly_frowning_face, Style.emoji, "p-0 m-0")}
          />
          <Button
            type="button"
            className={clsx(
              Style.emoji_text,
              Style.emoji_button,
              Style.emoji_button_yellow,
              "mt-3"
            )}
            // All lessons unlocked
            onClick={() => handleOptionClick(3)}
          >
            {`I feel comfortable
             using my phone`}
          </Button>
        </Col>
      </Row>

      <Row
        className={clsx(Style.mobile_margin, "flex-grow-1 justify-content-between p-0")}
      >
        <Col
          md={4}
          className={clsx(
            Style.logo_container,
            "d-none d-md-block d-flex align-self-end p-0 m-0"
          )}
        >
          <div className={clsx(Style.logo, "p-0 mb-4 ms-4")}></div>
        </Col>
        <Col
          md={4}
          className={clsx(
            Style.background_designBot,
            "d-none d-md-flex justify-content-end align-items-end p-0 m-0"
          )}
        >
          <div className={clsx(Style.BarShadow, Style.BarBot, Style.orangeBot)}></div>
          <div className={clsx(Style.BarShadow, Style.BarBot, Style.blueBot)}></div>
          <div className={clsx(Style.BarShadow, Style.BarBot, Style.yellowBot)}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfidentAssesment;
