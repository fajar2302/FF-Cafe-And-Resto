/* eslint-disable keyword-spacing */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
/* eslint-disable arrow-parens */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoTemplate = (resto) => `
<a class="anchor" href="/#/detail/${resto.id}" aria-label="detail-toogler">
  <article class="grid-list">
    <img class="image-list lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
    <div class="list-descript">
        <h4 class="text">${resto.name}</h4>
        <p class="text">${resto.city}</p>
        <p class="text">Rating ${resto.rating}</p>
    </div>
  </article>
</a>
`;

const createRestoDetailTemplate = (resto) => `
  <h1 class="text-title">${resto.name}</h1>
  <div class="detail_grid">
    <img class="detail_image lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
    <div class="detail_info">
        <h4 class="detail_text">Kota</h4>
        <p  class="detail_text">${resto.city}</p>
        <h4 class="detail_text">Alamat</h4>
        <p  class="detail_text">${resto.address}</p>
        <h4 class="detail_text">Deskripsi</h4>
        <p class="deskripsi">${resto.description}</p>
    </div>
  </div>
  <div class="detail_menu">
    <h3 class="text-menu">Menu yang tersedia</h3>
    <div class="menus">
      <div class="menus-list">
        <p class="text-list">Makanan</p>
        ${resto.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
      </div>
      <div class="menus-list">
        <p class="text-list">Minuman</p>
        ${resto.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
      </div>
    </div>
  </div>
  <div class="customer">
    <h3 class="text-menu">Review</h3>
    <div class="customer-review">
      ${resto.customerReviews.reduce(
        (show, value) =>
          show.concat(`
      <div class="customer-card">
        <p class="customer-date">${value.date}</p>
        <p class="customer-name"><span class="material-symbols-outlined"> account_circle</span>${value.name}</p>
        <p>${value.review}</p>
      </div>
        `),
        ''
      )}
    </div>
  </div>

`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestoTemplate, createRestoDetailTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate };
