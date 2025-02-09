import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import ImageCarouselModal from "./components/ImageCarouselModal";
import LandingPage from "./components/LandingPage";
import ConnectToPhone from "./components/ConnectToPhone";
import ConfidentAssesment from "./components/ConfidentAssesment";
import Lessons from "./components/Lessons";
import HelpButton from "./components/HelpButton";  

import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router> {/* Router should wrap the entire app here */}
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect-to-phone" element={<ConnectToPhone />} />
          <Route path="/confident-assesment" element={<ConfidentAssesment />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>

        {/* Help Button - Always visible */}
        <HelpButton openModal={openModal} />

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
    </Router>  
  );
}

export default App;
