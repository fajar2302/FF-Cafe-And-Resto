import TheRestoDbSource from '../../data/therestodb-sourve';
// eslint-disable-next-line import/named
import { createRestoTemplate } from '../templates/template';

const RestoList = {
  async render() {
    return `
    <div class="item-list" id="item"></div>
        `;
  },

  async afterRender() {
    const response = await TheRestoDbSource.restoRants();
    const restoContainer = document.querySelector('#item');
    response.forEach((resto) => {
      restoContainer.innerHTML += createRestoTemplate(resto);
    });

    // TODO: tampilkan movies di dalam DOM
  },
};

export default RestoList;
