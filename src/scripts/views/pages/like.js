import FavoriteRestoIdb from '../../data/favorite-resto';
import { createRestoTemplate } from '../templates/template';

const Like = {
  async render() {
    return `
    <div class="item-list" id="item"></div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#item');

    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoTemplate(resto);
    });
  },
};

export default Like;
