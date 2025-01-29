import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.js-form');
const galleryList = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPicsByQuery } from './js/pixabay-api.js';

const toggleLoader = isLoading => {
  loader.style.display = isLoading ? 'block' : 'none';
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  let searchedQuery = event.currentTarget.elements.name_query.value.trim();

  if (searchedQuery === '') {
    iziToast.error({
      title: 'Warning',
      message: 'Empty field , please insert your query...',
    });
    return;
  }

  toggleLoader(true);
  galleryList.innerHTML = '';

  fetchPicsByQuery(searchedQuery)
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          color: 'rgb(20, 62, 12);',
        });

        searchForm.reset();
        return;
      }

      const galleryCardTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

      galleryList.innerHTML = galleryCardTemplate;
      //
      new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong... Please try again later.',
      });
    })
    .finally(() => {
      toggleLoader(false);
    });
};
searchForm.addEventListener('submit', onSearchFormSubmit);
