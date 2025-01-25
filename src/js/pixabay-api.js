const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.js-form');

// Описаний у документації
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//
const onSearchFormSubmit = event => {
  event.preventDefault();

  const API_KEY = '48449909-94b1753e13b470dade065bce0';
  const BASE_URL = 'https://pixabay.com/api/';

  let searchedQuery = event.currentTarget.elements.name_query.value.trim();

  if (searchedQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Form cannot be empty...',
    });
    return;
  }

  const searchParams = new URLSearchParams({
    q: searchedQuery,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${searchParams.toString()}`;
  //
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.total === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
    })
    .catch(error => {
      console.log(error);
    });
  console.log(`${BASE_URL}q=${searchedQuery}${searchParams}${API_KEY}`);
};

searchForm.addEventListener('submit', onSearchFormSubmit);
