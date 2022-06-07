import './Modal.scss';
import PropTypes from 'prop-types';
function Modal({ onModalStateAndSrc, modalSrc }) {
  const toggleModal = () => {
    onModalStateAndSrc(false);
  };

  return (
    <div className="modal">
      <img src={modalSrc} />
      <button className="modal__closeBtn" onClick={toggleModal}>
        <div className="modal__line"></div>
        <div className="modal__line"></div>
        <div className="modal__line"></div>
      </button>
    </div>
  );
}

Modal.propTypes = {
  onModalStateAndSrc: PropTypes.func,
  modalState: PropTypes.bool,
  modalSrc: PropTypes.string
};

export default Modal;
