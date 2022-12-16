import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-sourve';
import { createRestoDetailTemplate, createLikeRestoButtonTemplate } from '../templates/template';
import LikeButtonPresenter from '../../utils/liked-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto';
// import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
    <div class="detail" id="detail"> </div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detail(url.id);
    console.log(resto);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestoDetailTemplate(resto);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        address: resto.address,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
