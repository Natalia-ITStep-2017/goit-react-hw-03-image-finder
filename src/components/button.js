import PropTypes from "prop-types";
import css from './styles.module.css';


const LoadMore = ({ onClickLoadMore }) => {
  return (
    <button className={css.Button}
      onClick={onClickLoadMore}>
      Load more
    </button>
  )
}

LoadMore.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};

export default LoadMore