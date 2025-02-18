import PointInfoView from '../view/point-info-view.js';
import FilterView from '../view/filter-view.js';
import AddNewPointButtonView from '../view/add-poin-button-view.js';
import {render, RenderPosition} from '../framework/render.js';

export default class HeaderPresenter {
  #pointsInfoContainer = null;
  #filtersContainer = null;
  #filters = null;

  constructor({pointsInfoContainer, filtersContainer, filters}) {
    this.#pointsInfoContainer = pointsInfoContainer;
    this.#filtersContainer = filtersContainer;
    this.#filters = filters;
  }

  init() {
    this.#renderPointsInfo();
    this.#renderFilters();
    this.#renderAddNewPointButton();
  }

  #renderPointsInfo() {
    render(new PointInfoView(), this.#pointsInfoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderFilters() {
    render(new FilterView(this.#filters), this.#filtersContainer);
  }

  #renderAddNewPointButton() {
    render(new AddNewPointButtonView(), this.#pointsInfoContainer);
  }
}
