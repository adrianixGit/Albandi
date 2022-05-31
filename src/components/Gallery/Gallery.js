import './Gallery.scss';
import GalleryCard from '../GalleryCard/GalleryCard';
import React, { useState } from 'react';
import Modal from '../Modal/Modaj';
import images from '../../data/images.json';
import PropTypes from 'prop-types';
function Gallery({ colorTemp, orientation, color }) {
  const [modalState, setModalState] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);

  const takeModalStateAndSrc = (state, src) => {
    setModalState(state);
    setModalSrc(src);
  };

  const filteredList = () =>
    images.data.filter((image) => {
      return (
        (colorTemp ? image.light_color === colorTemp : true) &&
        (orientation ? image.orientation === orientation : true) &&
        (color ? image.color === color : true)
      );
    });

  return (
    <div className="gallery">
      {filteredList().map((image, index) => (
        <GalleryCard
          onModalStateAndSrc={takeModalStateAndSrc}
          src={image.src}
          name={image.name.toUpperCase()}
          key={index}
        />
      ))}

      {modalState && (
        <Modal
          onModalStateAndSrc={takeModalStateAndSrc}
          modalState={modalState}
          modalSrc={modalSrc}
        />
      )}
    </div>
  );
}

Gallery.propTypes = {
  colorTemp: PropTypes.string,
  orientation: PropTypes.string,
  color: PropTypes.string
};

export default Gallery;
