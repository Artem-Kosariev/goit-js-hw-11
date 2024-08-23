import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions.js';

const form = document.querySelector('.form');
const queryInput = document.querySelector('input[name="query"]');

const loader = document.querySelector('.loader');

const gallery = document.querySelector('.gallery');

iziToast.settings({
  messageColor: '#fafafb',
  position: 'bottomRight',
  backgroundColor: '#ef4040',
  iconColor: '#fafafb',
  close: false,
});

let lightbox;

form.addEventListener('submit', event => {
  event.preventDefault();

  const tags = queryInput.value.trim();

  if (tags === '') {
    iziToast.show({
      message: 'Please enter a search query.',
    });
    return;
  }

  gallery.innerHTML = '';

  loader.classList.remove('visually-hidden');

  fetchData(queryInput.value.trim())
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      } else {
        galleryMarkup(images);
      }
      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
      } else {
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('visually-hidden');
      form.reset();
    });
});
