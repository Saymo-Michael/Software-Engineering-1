import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaLock, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Style from "../css modules/Lessons.module.css";

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
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Helper functions for lesson structure
  const createStep = (image, text) => ({ image, text });
  const createTopic = (title, steps) => ({ title, steps });
  const createLesson = (id, title, topics, locked = true) => ({
    id,
    title,
    locked,
    topics,
  });

  // Reusable steps example
  const commonSteps = {
    basicAction: (stepNumber, action) =>
      createStep(
        `https://via.placeholder.com/400x300.png?text=Step${stepNumber}`,
        `Follow these instructions to ${action} your device`
      ),
  };

  // Build lessons
  const lessons = [
    createLesson(
      1,
      "Getting Started with Your Smartphone",
      [
        createTopic("Turning phone on/off", [
          createStep(
            onOff1,
            "Step 1: Press and hold the PWR/LOCK key until you see the screen light up."
          ),
          createStep(
            onOff2,
            "Step 2: To turn off your phone, press and hold the PWR/LOCK key until an options menu appears."
          ),
          createStep(
            onOff3,
            "Step 3: Tap 'Power off' on the screen."
          ),
          createStep(
            onOff4,
            "Step 4: Wait a few seconds for the phone to shut down completely. Congratulations, you've finished this tutorial."
          )
        ]),
        createTopic("Turn Power Save Mode On/Off", [
          createStep(
            powerSave1,
            "Step 1: From the main screen, slide up to display all your apps."
          ),
          createStep(
            powerSave2,
            "Step 2: Locate and tap the 'Settings' icon."
          ),
          createStep(
            powerSave3,
            "Step 3: Scroll to find 'Smart Manager' and tap it, then select 'Battery'."
          ),
          createStep(
            powerSave4,
            <>
              Step 4: Tap the slider next to 'Normal saving mode.' If needed, tap on 'Normal saving mode' to set the time when it should turn on.
              <br /><br />
              Note: For even longer battery life, you may also choose 'Super saving mode.'
            </>
          ),
          createStep(
            powerSave5,
            "Step 5: Tap the HOME key to return to the main screen."
          ),
          createStep(
            powerSave6,
            "Step 6: Your phone is now set. Well done on completing this tutorial."
          )
        ])
      ],
      false // Lesson 1 unlocked by default
    ),
    createLesson(2, "Essential Functions", [
      createTopic("Personalizing Your Settings", [
        createStep(
          "https://via.placeholder.com/400x300.png?text=Open+Settings",
          "Step 1: Locate and open the Settings app on your smartphone."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Change+Ringtone",
          "Step 2: Tap on 'Sound' or 'Ringtone' settings. Choose a ringtone that you like."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Adjust+Volume",
          "Step 3: Adjust the volume using the slider until it reaches a comfortable level."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Adjust+Brightness",
          "Step 4: Now tap on 'Display' settings to adjust the brightness and text size for better visibility."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Connect+WiFi",
          "Step 5: To connect to Wi-Fi, go back to the main Settings screen, tap on 'Wi-Fi', select your network, and enter the password if required."
        )
      ]),
      createTopic("Managing & Using Apps", [
        createStep(
          "https://via.placeholder.com/400x300.png?text=Open+Apps",
          "Step 1: Tap the Home button to view your app icons. Find the app you want to open and tap it."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Switch+Apps",
          "Step 2: To switch between apps, double-tap the Home button or swipe up from the bottom (depending on your phone model)."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Close+Apps",
          "Step 3: In the app switcher, swipe the app off the screen to close it and free up memory."
        )
      ]),
      createTopic("Exploring the Camera & Photos", [
        createStep(
          "https://via.placeholder.com/400x300.png?text=Open+Camera",
          "Step 1: Locate and open the Camera app on your smartphone."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Take+Photo",
          "Step 2: Tap the shutter button to take a photo. Hold steady for best results."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=View+Photo",
          "Step 3: Tap the thumbnail in the corner of the screen to view your photo."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Share+Photo",
          "Step 4: Tap the share icon to send the photo via message or email, or tap the trash icon to delete it."
        )
      ]),
      createTopic("Understanding & Managing Notifications", [
        createStep(
          "https://via.placeholder.com/400x300.png?text=View+Notifications",
          "Step 1: Swipe down from the top of the screen to open the notifications panel."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Customize+Notifications",
          "Step 2: To customize which notifications you see, open Settings, tap on 'Notifications,' and adjust your preferences."
        )
      ])
    ]),
    createLesson(3, "Personalization", [
      createTopic("Blocking Unwanted Calls & Messages", [
        createStep(
          "https://via.placeholder.com/400x300.png?text=Open+Phone+App",
          "Step 1: Open the Phone app on your smartphone."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Block+Number",
          "Step 2: Find an unwanted number in your call history, tap on it, and then tap 'Block Number.'"
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Block+Messages",
          "Step 3: Open the Messaging app, select the unwanted message, tap and hold, and choose 'Block Contact.'"
        )
      ]),
      createTopic("Advanced Camera & Media Features", [
        createStep(
          "https://via.placeholder.com/400x300.png?text=Open+Camera",
          "Step 1: Open the Camera app and tap the mode selector to see all available options."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Select+Portrait+Mode",
          "Step 2: Choose 'Portrait mode' for a focused subject effect."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Select+Night+Mode",
          "Step 3: For low-light conditions, switch to 'Night mode' by tapping the corresponding icon."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Apply+Filters",
          "Step 4: Tap on the filter icon to preview and apply different filters to your photo."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Edit+Photo",
          "Step 5: After taking a photo, tap 'Edit' to crop, adjust brightness, or enhance the image using built-in tools. Then, save your edits."
        )
      ]),
      createTopic("Voice Commands & Accessibility Features", [
        createStep(
          "https://via.placeholder.com/400x300.png?text=Use+Voice+Command",
          "Step 1: For voice commands, either press and hold the Home button or say 'Hey Siri' / 'Ok Google' if your phone supports it."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Give+Command",
          "Step 2: Clearly speak your command (for example, 'Call Mom' or 'Open Camera')."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Enable+Accessibility",
          "Step 3: To enable screen readers, go to Settings, tap 'Accessibility,' and turn on the screen reader (such as TalkBack on Android)."
        ),
        createStep(
          "https://via.placeholder.com/400x300.png?text=Customize+Accessibility",
          "Step 4: Adjust settings like text-to-speech speed, magnification, or hearing assistance as needed."
        )
      ])
    ])
  ];
  

  // --- State to track progress ---
  const initialTopicCompletion = {};
  lessons.forEach((lesson) => {
    initialTopicCompletion[lesson.id] = Array(lesson.topics.length).fill(false);
  });
  const [topicCompletion, setTopicCompletion] = useState(
    initialTopicCompletion
  );

  const location = useLocation();
  const maxLesson = location.state?.maxLesson || 1;

  const initialLockedLessons = {
    1: false, // Lesson 1 is always unlocked
    2: maxLesson >= 2 ? false : true,
    3: maxLesson >= 3 ? false : true,
  };

  const [lockedLessons, setLockedLessons] = useState(initialLockedLessons);

  const lessonColors = [
    "rgba(247, 140, 107, 1)",
    "rgba(164, 192, 192, 1)",
    "rgba(255, 209, 102, 1)",
  ];

  // --- Navigation Handlers ---
  const handleSelect = (selectedIndex, e) => {
    if (!isAnimating && selectedTopic) {
      setIsAnimating(true);
      setIndex(selectedIndex);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  function handleGoBackClick() {
    if (selectedLesson) {
      // When going back from topic view, reset topic state
      setSelectedTopic(null);
      setSelectedTopicIndex(null);
      setIndex(0);
      setSelectedLesson(null);
    } else {
      navigate("/confident-assesment");
    }
  }

  // Marks current topic as complete and unlocks next lesson if needed
  const markTopicComplete = () => {
    if (selectedLesson && selectedTopicIndex !== null) {
      const lessonId = selectedLesson.id;
      setTopicCompletion((prev) => {
        const updatedLessonTopics = [...prev[lessonId]];
        updatedLessonTopics[selectedTopicIndex] = true;
        if (updatedLessonTopics.every((completed) => completed)) {
          const nextLessonId = lessonId + 1;
          if (lockedLessons[nextLessonId] !== undefined) {
            setLockedLessons((prevLocked) => ({
              ...prevLocked,
              [nextLessonId]: false,
            }));
          }
        }
        return { ...prev, [lessonId]: updatedLessonTopics };
      });
      setSelectedTopic(null);
      setSelectedTopicIndex(null);
      setIndex(0);
    }
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      {/* Header Section */}
      <Row className="p-0 m-0">
        <Col
          className={clsx(
            Style.background_designTop,
            "d-none d-md-block p-0 m-0 flex-grow-1"
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
        <Col className={clsx(Style.logo_container, "d-sm-none p-0 m-0")}>
          <div className={Style.logo}></div>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-end p-0 m-0">
          <div className={Style.goBack_container}>
            <Button
              className={Style.goBack}
              type="button"
              onClick={handleGoBackClick}
              id="backbtn_easylevel"
            >
              <FaArrowLeft className={Style.arrowLeft} />
              GO BACK
            </Button>
            <div className={`${Style.backbutton_line} d-none d-md-block`}></div>
          </div>
        </Col>
      </Row>

      {/* Middle Section */}
      <Row
        className={clsx(
          Style.mobile_margin,
          "d-flex flex-grow-1 justify-content-between p-0 m-0"
        )}
      >
        <div
          className={`${Style.question_top_line} d-block d-md-none justify-content-center p-0 m-0 mt-2 ms-3`}
        ></div>
        <Col
          md={1}
          lg={1}
          className="d-flex flex-column d-none d-lg-block justify-content-between align-self-end p-0 m-0"
        >
          <div className={clsx(Style.logo, "p-0 m-0 mb-4 ms-4")}></div>
        </Col>

        {/* Lessons or Topics List */}
        {selectedLesson ? (
          <Col
            md={4}
            lg={3}
            xs={12}
            className={clsx(
              Style.lesson_container,
              "ps-3 m-0 d-flex flex-column align-self-start"
            )}
            id="lesson1"
          >
            <h2
              className={Style.lessonTitle}
              style={{
                color:
                  lessonColors[(selectedLesson.id - 1) % lessonColors.length],
              }}
            >
              Lesson {selectedLesson.id}: {selectedLesson.title}
            </h2>
            {selectedLesson.topics.map((topic, idx) => {
              const isLocked =
                idx > 0 && !topicCompletion[selectedLesson.id][idx - 1];
              return (
                <Card key={idx} className={`${Style.topicCard} p-0 mt-3`}>
                  <Button
                    className={`${Style.topicButton} w-100 p-2 m-0`}
                    variant="light"
                    onClick={() => {
                      setSelectedTopic(topic);
                      setSelectedTopicIndex(idx);
                      setIndex(0);
                    }}
                    disabled={isLocked}
                    style={{ borderRadius: "20px" }}
                  >
                    {topic.title}{" "}
                    {topicCompletion[selectedLesson.id][idx] && "✓"}
                  </Button>
                </Card>
              );
            })}
          </Col>
        ) : (
          <Col
            md={4}
            lg={5}
            xs={12}
            className={`${Style.lesson_container} p-3 m-0 d-flex flex-column align-self-start`}
            id="lesson1"
          >
            {lessons.map((lesson, idx) => (
              <Card
                key={lesson.id}
                className={`${Style.lessonCard} ${
                  lockedLessons[lesson.id] ? Style.locked : ""
                }`}
              >
                <Card.Body
                  style={{ backgroundColor: "transparent", textAlign: "start" }}
                >
                  <h4
                    className={Style.lessonTitle}
                    style={{ color: lessonColors[idx % lessonColors.length] }}
                  >
                    LESSON {lesson.id}
                  </h4>
                  <p>{lesson.title}</p>
                  {lockedLessons[lesson.id] ? (
                    <Button className={Style.lockedButton} disabled>
                      <FaLock />
                    </Button>
                  ) : (
                    <Button
                      className={Style.startButton}
                      onClick={() => setSelectedLesson(lesson)}
                      style={{
                        backgroundColor:
                          lessonColors[idx % lessonColors.length],
                      }}
                    >
                      <FaPlay /> Start
                    </Button>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        )}

        {/* Carousel and Topic Text */}
        {selectedTopic && (
          <>
            <Col
              md={3}
              lg={3}
              className={clsx(
                Style.emoji_container,
                "d-md-flex flex-column justify-content-start p-0 m-0"
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
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                interval={null}
                touch={false}
                className="d-flex justify-content-center h-100 w-100"
              >
                {selectedTopic.steps.map((step, idx) => (
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
            </Col>

            <Col
              md={4}
              lg={3}
              className={clsx(
                Style.emoji_container,
                "d-flex flex-column justify-content-between p-0 m-0"
              )}
              style={{
                backgroundColor: "white",
                padding: "20px",
                minHeight: "200px",
                textAlign: "center",
                overflow: "hidden",
                borderRadius: "20px",
                boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="text-center mb-3 w-100" id="topics">
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "Big Shoulders Display",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    color: "#666",
                  }}
                >
                  Step {index + 1} of {selectedTopic.steps.length}
                </div>
                <Row className="justify-content-center g-2">
                  {selectedTopic.steps.map((_, i) => (
                    <Col xs="auto" key={i}>
                      <div
                        style={{
                          width: "30px",
                          height: "5px",
                          borderRadius: "4px",
                          backgroundColor: i <= index ? "#007bff" : "#dee2e6",
                          minWidth: "30px",
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </div>

              <p
                className={clsx(Style.topicText, {
                  "d-none": !selectedTopic,
                  "d-flex flex-column align-items-center": selectedTopic,
                })}
              >
                {selectedTopic.steps[index].text}
              </p>

              <div className="justify-content-between w-100 mt-3 p-4 m-0 d-flex">
                <Button
                  variant="secondary"
                  style={{ fontSize: "1.2rem" }}
                  onClick={() => !isAnimating && handleSelect(index - 1)}
                  disabled={index === 0 || isAnimating}
                >
                  Previous
                </Button>
                {index < selectedTopic.steps.length - 1 ? (
                  <Button
                    variant="primary"
                    style={{ fontSize: "1.2rem" }}
                    onClick={() => !isAnimating && handleSelect(index + 1)}
                    disabled={isAnimating}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    style={{ fontSize: "1.2rem" }}
                    onClick={markTopicComplete}
                    disabled={isAnimating}
                  >
                    Mark as complete
                  </Button>
                )}
              </div>
            </Col>
          </>
        )}

        <Col
          md={2}
          lg={1}
          className={clsx(
            Style.background_designBot,
            "d-none d-md-flex justify-content-end align-items-end p-0 m-0"
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
    </Container>
  );
};

export default Lessons;
