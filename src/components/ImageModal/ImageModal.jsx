import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          border: "none",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <img src={imageUrl} alt={imageAlt} className={css.modalImage} />
    </Modal>
  );
};

export default ImageModal;
