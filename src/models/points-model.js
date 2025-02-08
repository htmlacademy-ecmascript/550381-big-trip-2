import { POINT_COUNT } from '../const.js';
import { getRandomPoint } from '../mock/points-mock.js';
import { offers } from '../mock/offers-mock.js';
import { destinations } from '../mock/destinations-mock.js';

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, () => getRandomPoint());
  #offers = offers;
  #destinations = destinations;

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
