import './GalleryCard.scss';
import PropTypes from 'prop-types';
function GalleryCard({ onModalStateAndSrc, src, name }) {
  const toggleModal = () => {
    onModalStateAndSrc(true, src);
  };

  return (
    <div className="galleryCard">
      <div className="galleryCard__img" onClick={toggleModal}>
        <img src={src} />
      </div>
      <div className="galleryCard__description">
        <p className="galleryCard__pattern">{name}</p>
      </div>
    </div>
  );
}

GalleryCard.propTypes = {
  onModalStateAndSrc: PropTypes.func,
  onTakeSrc: PropTypes.func,
  src: PropTypes.string,
  name: PropTypes.string
};

export default GalleryCard;
