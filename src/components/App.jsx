import { Component } from "react"
import Searchbar from "./searchbar"
import ImageGallery from "./imageGalleryBlock/ImageGallery"
import LoadMore from "./button"
import { getImagesBySearchText } from "./api/api"
import css from './styles.module.css';
import Loader from "./loader"
import Notification from "./notification"


class Gallary extends Component {

  state = {
    images: null,
    searchText: '',
    isLoading: false,
    total: 0,
    perPage: 12,
    page: 0
  }

  handleOnClickSearch = ({searchText}) => {
    this.setState({
      searchText: searchText,
      page: 1
    })
  }

  hanldeLoadMore = () => {
    this.setState(({ page }) => ({page: page+1}))
  }

  isLoadMoreAvailable = ({ total, perPage, page }) => {
    return !this.state.isLoading && (perPage * page < total)
  }
   
  noResults = () => {
    return (!this.state.isLoading &&
      this.state.images &&
      this.state.page === 1 &&
      this.state.images.length === 0)
  }

  noSearchWords = () => {
    return (!this.state.isLoading &&
      this.state.page === 1
      && !this.state.images)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.searchText !== prevState.searchText) {

      if (!this.state.searchText) {
        this.setState({
          images: null,
          total: 0,
          });
        return
      }

      this.setState({
        images: null,
        isLoading: true
      });

      try {
        const response = await getImagesBySearchText(this.state);
        this.setState({
          images: [...response.hits],
          total: response.totalHits
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (this.state.page !== 1 &&
      this.state.page !== prevState.page) {
      
      this.setState({ isLoading: true });
      try {
        const response = await getImagesBySearchText(this.state);
        this.setState({
          images: [...this.state.images, ...response.hits],
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }


  render() {
    return (
      <div className={css.App}>
        <Searchbar
          onSubmit={this.handleOnClickSearch} />
        {this.state.isLoading && (<Loader />)}
        {this.noSearchWords() && (
          <Notification
            text='Please enter search word(s)' />
        )}
       
        {this.noResults() && (
        <Notification
          text='There is no resulr for your search' />
        )}
      
        {this.state.images && this.state.images.length && (
          <ImageGallery
          imageList={this.state.images}/>
        )}
        {this.isLoadMoreAvailable(this.state) && (
          <LoadMore
            onClickLoadMore={this.hanldeLoadMore} />
        )} 
      </div>
    )
  };
};

export default Gallary
