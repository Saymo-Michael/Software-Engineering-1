import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import phone from "../Images/phone.JPG";
import linny from "../Images/linny.webp";
import tuck from "../Images/tuck.jpg";
import mingming from "../Images/mingming.webp";

import clsx from "clsx";

import Style from "../css modules/LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const aboutUsRef = useRef(null);

  const handleGetStartedClick = () => {
    if (window.innerWidth < 768) {
      navigate("/confident-assesment");
    } else {
      navigate("/connect-to-phone");
    }
  };

  const handleLearnMoreClick = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      {/* First Row - 2 Equal Columns */}
      <Row className="d-flex p-0 m-0">
        <Col className={Style.logo_container}>
          <div className={Style.logo}></div>
        </Col>
        <Col className={clsx(Style.background_designTop, "align-items-end p-0 m-0")}>
          <div className={clsx(Style.BarShadow, Style.BarTop, Style.orangeTop)}></div>
          <div className={clsx(Style.BarShadow, Style.BarTop, Style.blueTop)}></div>
          <div className={clsx(Style.BarShadow, Style.BarTop, Style.yellowTop)}></div>
        </Col>
      </Row>

      {/* Second Row - Nested Layout */}
      <Row className="d-flex p-0 m-0">
        {/* Left side with 3 stacked rows */}
        <Col lg={4} md={6} xs={12} className="d-flex flex-column flex-grow-1 p-0 m-0">
          <Row className="d-flex p-0 m-0">
            <Col className="d-flex flex-column">
              <div className={Style.quote}>
                {"\u00A0"} "Bridging the Digital Gap"
              </div>
              <Button className={Style.getStarted} type="button" onClick={handleGetStartedClick}>
                GET STARTED
                <FaArrowRight className={Style.arrowRight} />
              </Button>
              <div className={Style.learnMoreText_container} >
                <p className={Style.learnMoreText} onClick={handleLearnMoreClick}>Learn More</p>
              </div>
            </Col>
          </Row>
          <Row className="d-flex p-0 m-0">
            <Col className={clsx(Style.background_designBot, "justify-content-end p-0 m-0")}>
              <div className={clsx(Style.BarShadow, Style.BarBot, Style.orangeBot)}></div>
              <div className={clsx(Style.BarShadow, Style.BarBot, Style.blueBot)}></div>
              <div className={clsx(Style.BarShadow, Style.BarBot, Style.yellowBot)}></div>
            </Col>
          </Row>
          <Row className="d-flex p-0 m-0">
            <Col md={6} className={clsx(Style.aboutUs_container, "d-flex p-0 m-0")} ref={aboutUsRef}>
              <p className={Style.aboutUsText}>
                About Us
              </p>
              <p className={Style.aboutUsTextP}>
                DIGILIT is a learning platform designed to help middle-aged and elderly users confidently navigate their 
                smartphones. We believe technology should be accessible to everyone, regardless of experience. 
                Through easy-to-follow lessons with visual guides, we simplify essential smartphone skills.
                <br /> <br />
                Our goal is to empower users with the knowledge they need to stay connected, informed, and independent in today’s 
                digital world. Whether you're just starting or looking to improve your skills, DIGILIT is here to guide 
                you every step of the way.
              </p>
            </Col>
          </Row>
        </Col>

        {/* Right side - Single merged row */}
        <Col md={6} className={clsx(Style.phone_container, "p-0 m-0")}>
          <div>
            <Image src={phone} fluid alt="Phone Display" className={Style.phone} draggable="false" />
          </div>
        </Col>
      </Row>

      {/* Third Row - 2 Equal Columns */}
      <Row className={"d-flex align-items-center pm-0 m-0"}> 
        {/* Development Team Section */}
        <Col md={6} className={clsx(Style.devTeamSection, "d-flex pm-0 m-0")}>  
          <Col xs={12} className="d-flex align-items-center p-0 mb-0">
            <h6 className={Style.devTeamTitle}>Development Team</h6>
            <div className={Style.devTeamLine}></div>
          </Col>

          {/* Team Members - Row for Desktop, Column for Mobile */}
          <Container xs={12} lg={4} className={clsx(Style.devProfiles_container, "text-center")}> 
            <Col xs={12} lg={4} className={Style.devProfile}>
              <Image src={linny} roundedCircle className={Style.devPicture} />
              <div className="d-flex flex-column mt-3">
                <h6 className={Style.devName}>Rexie Ryl Nadela</h6>
                <p className={Style.devRole}>Student at University of Cabuyao</p>
              </div>
            </Col>

            <Col xs={12} lg={4} className={Style.devProfile}>
              <Image src={mingming} roundedCircle className={Style.devPicture} />
              <div className="d-flex flex-column mt-3">
                <h6 className={Style.devName}>Kerzania Macalde</h6>
                <p className={Style.devRole}>Student at University of Cabuyao</p>
              </div>
            </Col>

            <Col xs={12} lg={4} className={Style.devProfile}>
              <Image src={tuck} roundedCircle className={Style.devPicture} />
              <div className="d-flex flex-column mt-3">
                <h6 className={Style.devName}>Michael Saymo</h6>
                <p className={Style.devRole}>Student at University of Cabuyao</p>
              </div>
            </Col>
          </Container>
        </Col>

        {/* Follow Us Section */}
        <Col className={clsx(Style.followUs_container,"d-flex flex-column p-0 m-0")}>
          <p className={clsx(Style.followUs)}>Follow Us On:</p>
          <div className={clsx(Style.social_icons, "ps-2 pb-4 m-0")}>
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
    </Container>
  );
};

export default LandingPage;
