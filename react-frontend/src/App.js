import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import Modal from "react-modal";
import ImageCarouselModal from "./components/ImageCarouselModal";
import LandingPage from "./components/LandingPage";
import ConnectToPhone from "./components/ConnectToPhone";
import ConfidentAssesment from "./components/ConfidentAssesment";
import Lessons from "./components/Lessons";

import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect-to-phone" element={<ConnectToPhone />} />
          <Route path="/confident-assesment" element={<ConfidentAssesment />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>

      {/* Help Button - Always visible */}
      <div className="help-button" onClick={openModal}>
        <TiMessages size={30} />
        <p>Need Help?</p>
      </div>

      {/* Modal for Image Carousel */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Carousel Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ImageCarouselModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default App;
