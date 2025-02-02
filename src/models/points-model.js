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

  getPoint(id) {
    return this.#points.find((point) => point.id === id);
  }

  get offers() {
    return this.#offers;
  }

  getOffersByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    return offersType.offers.filter((offer) => itemsId.find((id) => offer.id === id));
  }

  get destinations() {
    return this.#destinations;
  }

  getDestinationsById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
