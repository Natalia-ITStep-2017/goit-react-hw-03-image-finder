import PropTypes from "prop-types";
import css from './styles.module.css';

const Notification = ({ text }) => {
  return (
    <h1 className={css.Notification}>
      {text}
    </h1>
  )
}

PropTypes.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification