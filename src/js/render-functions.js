import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function galleryMarkup(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.hits
    .map(hit => {
      return `<li class="gallery-item">
            <a class="gallery-link" href="${hit.largeImageURL}" download=false>
                <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery-img" width=360  onclick="return false" data-source="${hit.largeImageURL}">
                <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="description-value">${hit.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="description-value">${hit.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="description-value">${hit.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="description-value">${hit.downloads}</p>
                    </li>
                </ul>
            </a>
            </li>
            `;
    })
    .join('');
  gallery.innerHTML = markup;
}
