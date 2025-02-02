import ListPointsView from '../view/list-points-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import {render} from '../framework/render.js';


export default class PointsPresenter {
  #listPointsComponent = new ListPointsView();

  #pointsContainer = null;
  #pointsModel = null;
  points = [];

  constructor({pointsContainer, pointsModel}) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.#pointsModel.getPoints()];
    render(new SortView(), this.#pointsContainer);
    render(this.#listPointsComponent, this.#pointsContainer);

    render(new EditPointView({
      point: this.points[0],
      checkedOffers: [...this.#pointsModel.getOffersById(this.points[0].type, this.points[0].offers)],
      offers: this.#pointsModel.getOffersByType(this.points[0].type),
      destination: this.#pointsModel.getDestinationsById(this.points[0].destination),
    }), this.#listPointsComponent.element);

    for (let i = 1; i < this.points.length; i++) {
      render(new PointView({
        point: this.points[i],
        offers: [...this.#pointsModel.getOffersById(this.points[i].type, this.points[i].offers)],
        destination: this.#pointsModel.getDestinationsById(this.points[i].destination),
      }), this.#listPointsComponent.element);
    }
  }
}
