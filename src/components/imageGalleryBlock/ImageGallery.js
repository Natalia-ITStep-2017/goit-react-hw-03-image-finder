import { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem";
import Modal from "../modal";
import css from '../styles.module.css';
import PropTypes from "prop-types";

class ImageGallery extends Component {
  state = {
    imgUrl: null,
    isModalOpened: false
  }

  handleOpenModal = (url) => {
    this.setState({
      imgUrl: url,
      isModalOpened: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      isModalOpened: false
    })
  }
  render() {
    return (
      <>
        <ul className={css.ImageGallery} >
          {
            this.props.imageList.map(imageItem => {
              return (
                <ImageGalleryItem
                  key={imageItem.id}
                  imageItem={imageItem}
                  onClickImage={this.handleOpenModal} />
              )
            })
          }
        </ul>
        {this.state.isModalOpened && (
          <Modal
            imageURL={this.state.imgUrl}
            handleClose={this.handleCloseModal} />
        )}
      </>
    )
  }
}

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired
};

export default ImageGallery