import './global.scss';
import './components/style/header.scss';
import './components/style/main.scss';
import './components/style/footer.scss';
import './components/style/race-interface.scss';
import './components/style/garage.scss';

import { Cars } from './components/scripts/cars';
import { NEW_RANDOM_CARS } from './components/scripts/random-cars';
import { RENDER_PAGE } from './components/scripts/render-page';

export const NEW_CARS = new Cars();

console.log('test');
RENDER_PAGE.renderBaseBlock();
RENDER_PAGE.renderInterface();
RENDER_PAGE.getTrack();
NEW_CARS.addListenerCreateCar();
NEW_RANDOM_CARS.addListenerCreateRandomCasrds();

document
    .querySelector('.show-all')
    ?.addEventListener('click', () => NEW_CARS.getCars().then((data) => console.log(data.car)));
