import { Component } from 'react';
import PropTypes from "prop-types";
import css from './styles.module.css';
import { BsSearch } from 'react-icons/bs';


class Searchbar extends Component {

  state = {
    searchText: ''
  }

  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ searchText: value })
  }

  handleAddContact = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state)

  }

  render() {
    return (
      <header className={css.Searchbar} >
        <form className={css.SearchForm}
          onSubmit={this.handleAddContact}>
          <button type="submit" className={css.SearchFormButton}>
            <BsSearch />
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar
