import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={css.list}>
      {photos !== null &&
        photos.map((photo) => {
          return (
            <li key={photo.id}>
              <ImageCard photo={photo} onImageClick={onImageClick} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
