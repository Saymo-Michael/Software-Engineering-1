// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Modal from "react-modal";
import ImageCarouselModal from "./components/ImageCarouselModal";
import LandingPage from "./components/LandingPage";
import ConnectToPhone from "./components/ConnectToPhone";
import ConfidentAssesment from "./components/ConfidentAssesment";
import Lessons from "./components/Lessons";
import HelpButton from "./components/HelpButton";

import "./App.css";

import linny from "./Images/linny.webp";
import mingming from "./Images/mingming.webp"; 
import tuck from "./Images/tuck.jpg";


Modal.setAppElement("#root");

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getHelpImages = (pathname) => {
    switch (pathname) {
      //just change the image names to match the ones in the folder
      case "/":
        return [linny, mingming, tuck]; 
      case "/connect-to-phone":
        return ["/images/help_phone_1.jpg", "/images/help_phone_2.jpg", "/images/help_phone_3.jpg"];
      case "/confident-assesment":
        return ["/images/help_confident_1.jpg", "/images/help_confident_2.jpg", "/images/help_confident_3.jpg"];
      case "/lessons":
        return ["/images/help_lessons_1.jpg", "/images/help_lessons_2.jpg", "/images/help_lessons_3.jpg"];
      default:
        return ["/images/help_default_1.jpg", "/images/help_default_2.jpg", "/images/help_default_3.jpg"];
    }
  };

  const helpImages = getHelpImages(location.pathname);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/connect-to-phone" element={<ConnectToPhone />} />
        <Route path="/confident-assesment" element={<ConfidentAssesment />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>

      {/* Floating Help Button */}      
      <HelpButton openModal={openModal} />

      {/* Modal for Image Carousel */}      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Carousel Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ImageCarouselModal closeModal={closeModal} images={helpImages} />
      </Modal>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
