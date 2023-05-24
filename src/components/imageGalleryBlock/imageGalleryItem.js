import PropTypes from "prop-types";
import css from '../styles.module.css';



const ImageGalleryItem = ({ imageItem, onClickImage }) => {
  const { webformatURL, largeImageURL, tags } = imageItem;
  return (
    <li className={css.ImageGalleryItem}
      onClick={() => onClickImage(largeImageURL)}>
      <img className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags} />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  imageItem: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem