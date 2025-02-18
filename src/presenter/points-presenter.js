import ListPointsView from '../view/list-points-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import EmptyPointView from '../view/empty-point-view.js';
import {render, replace} from '../framework/render.js';


export default class PointsPresenter {
  #listPointsComponent = new ListPointsView();

  #pointsContainer = null;
  #pointsModel = null;
  #points = [];
  #offers = [];
  #destinations = [];

  constructor({pointsContainer, pointsModel}) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#offers = this.#pointsModel.offers;
    this.#destinations = this.#pointsModel.destinations;

    this.#renderPointsBoard();
  }

  #getOffersByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }

  #getOffersById(type, itemsId) {
    const offersType = this.#getOffersByType(type);
    if (!offersType) {
      return [];
    }
    return offersType.offers.filter((offer) => itemsId.find((id) => offer.id === id));
  }

  #getDestinationsById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers: [...this.#getOffersById(point.type, point.offers)],
      destination: this.#getDestinationsById(point.destination),
      onEditClick: () => {
        replacePointToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const editPointComponent = new EditPointView({
      point,
      checkedOffers: [...this.#getOffersById(point.type, point.offers)],
      offers: this.#getOffersByType(point.type),
      destination: this.#getDestinationsById(point.destination),
      onSaveEditClick: () => {
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToEdit() {
      replace(editPointComponent, pointComponent);
    }

    function replaceEditToPoint() {
      replace(pointComponent, editPointComponent);
    }

    render(pointComponent, this.#listPointsComponent.element);

  }

  #renderPointsBoard() {
    if (this.#points.length === 0) {
      return render(new EmptyPointView, this.#pointsContainer);
    }

    render(new SortView(), this.#pointsContainer);
    render(this.#listPointsComponent, this.#pointsContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }
}
