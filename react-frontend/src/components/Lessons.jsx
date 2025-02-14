import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaLock, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Style from "../css modules/Lessons.module.css";
import backhandIndexPointingLeft from "../Images/Emoji/backhand-index-pointing-left.png";

// Images for Lessons
import onOff1 from "../Images/Lesson1/Topic1/Step1.gif";
import onOff2 from "../Images/Lesson1/Topic1/Step2.gif";
import onOff3 from "../Images/Lesson1/Topic1/Step3.gif";
import onOff4 from "../Images/Lesson1/Topic1/Step4.png";

import powerSave1 from "../Images/Lesson1/Topic2/Step1.gif";
import powerSave2 from "../Images/Lesson1/Topic2/Step2.gif";
import powerSave3 from "../Images/Lesson1/Topic2/Step3.gif";
import powerSave4 from "../Images/Lesson1/Topic2/Step4.JPG";
import powerSave5 from "../Images/Lesson1/Topic2/Step5.JPG";
import powerSave6 from "../Images/Lesson1/Topic2/Step6.JPG";

// New placeholders for other lessons
const dialerStep =
  "https://via.placeholder.com/400x300.png?text=Lesson2-Calls-Step1";
const messagesStep1 =
  "https://via.placeholder.com/400x300.png?text=Lesson2-Texts-Step1";
const messagesStep2 =
  "https://via.placeholder.com/400x300.png?text=Lesson2-Texts-Step2";
const wallpaperStep1 =
  "https://via.placeholder.com/400x300.png?text=Lesson3-Wallpaper-Step1";
const wallpaperStep2 =
  "https://via.placeholder.com/400x300.png?text=Lesson3-Wallpaper-Step2";
const ringtoneStep1 =
  "https://via.placeholder.com/400x300.png?text=Lesson3-Ringtones-Step1";
const ringtoneStep2 =
  "https://via.placeholder.com/400x300.png?text=Lesson3-Ringtones-Step2";

const Lessons = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIndex(selectedIndex);

      // Match animation duration with CSS transition
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  function handleGoBackClick() {
    if (selectedLesson) {
      setSelectedLesson(null); // Go back to lesson list
      setSelectedTopic(null); // Go back to lesson list
    } else {
      navigate("/confident-assesment"); // Go back to the previous page
    }
  }

  // 1. Create helper functions for lesson structure
  const createStep = (image, text) => ({ image, text });
  const createTopic = (title, steps) => ({ title, steps });
  const createLesson = (id, title, topics, locked = true) => ({
    id,
    title,
    locked,
    topics,
  });

  // 2. Define reusable steps (if any steps repeat across topics)
  const commonSteps = {
    basicAction: (stepNumber, action) =>
      createStep(`Follow these instructions to ${action} your device`),
  };

  // 3. Build your lessons
  const lessons = [
    createLesson(
      1,
      "Getting Started with Your Smartphone",
      [
        createTopic("Turning phone on/off", [
          createStep(
            onOff1,
            "To turn your phone ON, press and hold the PWR/LOCK key until the screen lights up."
          ),
          createStep(
            onOff2,
            "To turn your phone OFF, press and hold the PWR/LOCK key until you see the options menu."
          ),
          createStep(onOff3, "Tap 'Power off.'"),
          createStep(onOff4, "Congratulations, you've finished this tutorial."),
        ]),
        createTopic("Turn Power Save Mode On/Off", [
          createStep(
            powerSave1,
            "From the main screen, slide the screen up to display your apps."
          ),
          createStep(powerSave2, "Locate and tap the 'Settings' icon."),
          createStep(
            powerSave3,
            "Locate and tap 'Smart Manager.' Then, tap 'Battery'"
          ),
          createStep(
            powerSave4,
            <>
              Tap the slider next to 'Normal saving mode.' If necessary, tap
              'Normal saving mode' to change when your power save mode turns on.
              <br />
              <br />
              Note: You can also tap 'Super saving mode' to extend your battery
              life even more.
            </>
          ),

          createStep(
            powerSave5,
            "To return to the main screen, tap the HOME key."
          ),
          createStep(
            powerSave6,
            "Congratulations, you've finished this tutorial."
          ),
        ]),
      ],
      false // First lesson unlocked
    ),
    createLesson(2, "Essential Functions", [
      createTopic("Making Calls", [
        commonSteps.basicAction(1, "open dialer"),
        createStep(dialerStep, "Enter number and press call"),
      ]),
      createTopic("Sending Texts", [
        createStep(messagesStep1, "Open messaging app"),
        createStep(messagesStep2, "Compose new message"),
      ]),
    ]),
    createLesson(3, "Personalization", [
      createTopic("Wallpaper", [
        createStep(wallpaperStep1, "Open settings"),
        createStep(wallpaperStep2, "Choose wallpaper"),
      ]),
      createTopic("Ringtones", [
        createStep(ringtoneStep1, "Sound settings"),
        createStep(ringtoneStep2, "Select tone"),
      ]),
    ]),
  ];
  const lessonColors = [
    "rgba(247, 140, 107, 1)",
    "rgba(164, 192, 192, 1)",
    "rgba(255, 209, 102, 1)",
  ];

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      {/* Top Row: Header Section (Unchanged) */}
      <Row className="p-0 m-0" style={{ backgroundColor: "" }}>
        {/* Top Row Design */}
        <Col
          className={clsx(
            Style.background_designTop,
            "d-none d-md-block p-0 m-0 flex-grow-1"
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
        <Col className={clsx(Style.logo_container, "d-sm-none p-0 m-0")}>
          <div className={Style.logo}></div>
        </Col>

        {/* Back Button */}
        <Col
          className="d-flex flex-column justify-content-center align-items-end p-0 m-0"
          style={{ backgroundColor: "" }}
        >
          <Button
            className={Style.getStarted}
            type="button"
            onClick={() => handleGoBackClick()}
          >
            <FaArrowLeft className={Style.arrowLeft} /> GO BACK
          </Button>
          <div className={`${Style.backbutton_line} d-none d-md-block`}></div>
        </Col>
      </Row>

      {/* Middle Section */}
      <Row
        className={clsx(
          Style.mobile_margin,
          "d-flex flex-grow-1 justify-content-between p-0 m-0"
        )}
      >
        {/* Logo (Unchanged) */}
        <Col
          md={1}
          lg={1}
          className="d-flex flex-column d-none d-lg-block justify-content-between align-self-end p-0 m-0"
          style={{ backgroundColor: "" }}
        >
          <div className={clsx(Style.logo, "p-0 m-0 mb-2 ms-2")}></div>
        </Col>

        {/* Select Topics (Cleaned) */}
        {selectedLesson ? (
          /* Specific Topics View */
          <Col
            md={4}
            lg={3}
            xs={12}
            className={clsx(
              Style.lesson_container,
              "p-3 m-0 d-flex flex-column align-self-start",
              {
                "d-none": selectedTopic,
                "d-md-flex": selectedTopic,
              }
            )}
            style={{
              backgroundColor: "",
            }}
          >
            <div
              className={`${Style.question_top_line} d-md-none d-inline p-0 m-0`}
            ></div>
            <h2
              className={Style.lessonTitle}
              style={{
                color:
                  lessonColors[(selectedLesson.id - 1) % lessonColors.length],
              }}
            >
              Lesson {selectedLesson.id}: {selectedLesson.title}
            </h2>
            {selectedLesson.topics.map((topic, index) => (
              <Card key={index} className={`${Style.topicCard} p-0 mt-3`}>
                <Button
                  className={`${Style.topicButton} w-100 p-2 m-0`}
                  variant="light"
                  onClick={() => {
                    setSelectedTopic(topic);
                    setIndex(0); // Reset step index when selecting new topic
                  }}
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  {topic.title} {/* Render just the title string */}
                </Button>
              </Card>
            ))}
          </Col>
        ) : (
          /* Main Lessons View  */
          <Col
            md={4}
            lg={5}
            xs={12}
            className={`${Style.lesson_container} p-3 m-0 d-flex flex-column align-self-start`}
          >
            {lessons.map((lesson, index) => (
              <Card
                key={lesson.id}
                className={`${Style.lessonCard} ${
                  lesson.locked ? Style.locked : ""
                }`}
              >
                <Card.Body
                  style={{ backgroundColor: "transparent", textAlign: "start" }}
                >
                  <h4
                    className={Style.lessonTitle}
                    style={{ color: lessonColors[index % lessonColors.length] }}
                  >
                    LESSON {lesson.id}
                  </h4>
                  <p>{lesson.title}</p>
                  {lesson.locked ? (
                    <Button className={Style.lockedButton} disabled>
                      <FaLock />
                    </Button>
                  ) : (
                    <Button
                      className={Style.startButton}
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      <FaPlay /> Start
                    </Button>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        )}

        {/* Tutorial Images With Specific Images*/}
        {selectedTopic && (
          <Col
            md={3}
            lg={3}
            className={clsx(
              Style.emoji_container,
              "d-md-flex flex-column justify-content-start p-0 m-0",

              {
                "d-none": !selectedTopic,
                "d-flex": selectedTopic,
              }
            )}
            style={{
              backgroundColor: "white",
              padding: "10px",
              minHeight: "60vh",
              borderRadius: "20px",
              boxShadow:
                "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            }}
          >
            {selectedTopic && (
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                interval={null}
                touch={false} // Disable swipe if not needed
                className="d-flex justify-content-center h-100 w-100"
              >
                {selectedTopic?.steps?.map((step, idx) => (
                  <Carousel.Item key={idx} className="h-100">
                    <div className="d-flex h-100 w-100 justify-content-center align-items-center">
                      <img
                        src={step.image}
                        alt={`Step ${idx + 1}`}
                        className="img-fluid"
                        style={{
                          maxHeight: "75vh",
                          width: "auto",
                          maxWidth: "100%",
                          objectFit: "contain",
                          borderRadius: "8px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>
        )}

        {/* Text Section Main View*/}
        {selectedTopic && (
          <Col
            md={4}
            lg={3}
            className={clsx(
              Style.emoji_container,
              {
                "d-none": !selectedTopic,
                "d-flex": selectedTopic,
              },
              "d-md-flex",
              "d-flex",
              "flex-column",
              "justify-content-between",
              "p-0",
              "m-0"
            )}
            style={{
              backgroundColor: "white",
              padding: "20px",
              minHeight: "200px",
              textAlign: "center",
              overflow: "hidden", // Add overflow control
              borderRadius: "20px",
              boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Default View if No Lesson Selected */}
            {!selectedLesson ? (
              <div
                className="d-flex justify-content-center align-items-center pt-5"
                style={{ backgroundColor: "blue" }}
              >
                {/* <Image
                src={backhandIndexPointingLeft}
                alt="Lesson Icon"
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "15px",
                }}
              /> */}
                <p
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontSize: "35px",
                    fontWeight: "700",
                    margin: 0,
                    paddingLeft: "5px",
                  }}
                >
                  Select a lesson to start
                </p>
              </div>
            ) : (
              <>
                {/* Step Counter and Progress Bar */}
                {selectedTopic && (
                  <div className="text-center mb-3 w-100">
                    <div
                      className="mb-2"
                      style={{
                        fontFamily: "Big Shoulders Display",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive font
                        color: "#666",
                      }}
                    >
                      Step {index + 1} of {selectedTopic?.steps?.length}
                    </div>
                    <Row className="justify-content-center g-2">
                      {selectedTopic?.steps?.map((_, i) => (
                        <Col xs="auto" key={i}>
                          <div
                            style={{
                              width: "30px",
                              height: "5px",
                              borderRadius: "4px",
                              backgroundColor:
                                i <= index ? "#007bff" : "#dee2e6",
                              minWidth: "30px",
                            }}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}

                {/* Dynamic Step Text Section */}
                <p
                  className={clsx({
                    "d-none": !selectedTopic,
                    "d-flex flex-column align-items-center": selectedTopic,
                  })}
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontSize: "30px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    wordBreak: "break-word",
                    padding: "0 10px",
                  }}
                >
                  {selectedTopic?.steps[index]?.text}
                </p>

                {/* Navigation Buttons */}
                <div
                  className={clsx(
                    "justify-content-between w-100 mt-3 p-4 m-0",
                    {
                      "d-none": !selectedTopic,
                      "d-flex": selectedTopic,
                    }
                  )}
                >
                  <Button
                    variant="secondary"
                    style={{ fontSize: "1.2rem" }}
                    onClick={() => !isAnimating && handleSelect(index - 1)}
                    disabled={index === 0 || isAnimating}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="primary"
                    style={{ fontSize: "1.2rem" }}
                    onClick={() => !isAnimating && handleSelect(index + 1)}
                    disabled={
                      index === (selectedTopic?.steps?.length || 0) - 1 ||
                      isAnimating
                    }
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </Col>
        )}

        {/* Second Row (Bottom Section) */}
        <Col
          md={2}
          lg={1}
          className={clsx(
            Style.background_designBot,
            "d-none d-md-flex justify-content-end align-items-end p-0 m-0"
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
export default Lessons;
