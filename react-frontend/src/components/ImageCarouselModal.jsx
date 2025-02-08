import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Image } from 'react-bootstrap';

import tuck from '../Images/tuck.jpg';
import mingming from '../Images/mingming.webp';
import linny from '../Images/linny.webp';

import Style from '../css modules/ImageCarouselModal.module.css';

const ImageCarouselModal = ({ closeModal }) => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected index

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % 3); // Change to next image
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Change to previous image
  };

  return (
    <div className={Style.carouselModalContainer} onClick={closeModal}> {/* Close on outside click */}
      <div
        className={Style.carousel}
        onClick={(e) => e.stopPropagation()}  
      >
        {/* Close Button (Upper Right) */}
        <button className={Style.closeModalButton} onClick={closeModal}>X</button>

        <Carousel
          selectedItem={selectedIndex}  // Controlled component
          onChange={(index) => setSelectedIndex(index)} // Update state when carousel changes
        >
          <div>
            <Image src={linny} className={Style.picture} />
          </div>
          <div>
            <Image src={mingming} className={Style.picture} />
          </div>
          <div>
            <Image src={tuck} className={Style.picture} />
          </div>
        </Carousel>

        {/* Navigation buttons (Next and Previous) inside the modal */}
        <div className={Style.carouselControls}>
          <button className={Style.prevButton} onClick={handlePrev}>Previous</button>
          <button className={Style.nextButton} onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
