import { Component } from 'react';
import css from './styles.module.css';
import PropTypes from "prop-types";


class Modal extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handlePressESC)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressESC)
  }

  handlePressESC = (event) => {
    if (event.code === 'Escape') this.props.handleClose()
  }

  render() {
    return (
      <div className={css.Overlay}
        onClick={this.props.handleClose} >

        <div className={css.Modal}>
          <img src={this.props.imageURL} alt="" />
        </div>
      </div >)
  }
}

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal