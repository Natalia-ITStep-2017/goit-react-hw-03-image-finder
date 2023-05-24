import axios from "axios";

export const getImagesBySearchText = async ({ searchText, page, perPage }) => {
  const options = {
    key: '34826254-f6a07a718c7d1b6fe10bcafdb',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  }
  const response = await axios.get(`https://pixabay.com/api/`, {
    params: options
  });
  return response.data
}
