/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/liked-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
