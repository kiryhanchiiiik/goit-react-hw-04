import css from "./ImageCard.module.css";

const ImageCard = ({ photo, onImageClick }) => {
  return (
    <div className={css.container}>
      <img
        onClick={() => onImageClick(photo.urls.regular, photo.alt_description)}
        className={css.photo}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;
