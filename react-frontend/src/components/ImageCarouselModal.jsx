// src/components/ImageCarouselModal.jsx
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from "react-bootstrap";
import clsx from "clsx";
import Style from "../css modules/ImageCarouselModal.module.css";

const ImageCarouselModal = ({ closeModal, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={Style.carouselModalContainer} onClick={closeModal}>
      <div className={Style.carousel} onClick={(e) => e.stopPropagation()}>
        {/* Close Button (Upper Right) */}
        <button className={Style.closeModalButton} onClick={closeModal}>
          X
        </button>

        <Carousel
          selectedItem={selectedIndex}
          onChange={(index) => setSelectedIndex(index)}
          showThumbs={true}
          infiniteLoop
          useKeyboardArrows
        >
          {images.map((src, index) => (
            <div key={index}>
              <Image src={src} className={Style.picture} alt={`Help guide ${index + 1}`} />
            </div>
          ))}
        </Carousel>

        {/* Navigation buttons (Next and Previous) inside the modal */}
        <div className={clsx(Style.carouselControls)}>
          <button className={Style.prevButton} onClick={handlePrev}>
            Previous
          </button>
          <button className={Style.nextButton} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
