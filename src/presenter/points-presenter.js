import ListPointsView from '../view/list-points-view.js';
import SortView from '../view/sort-view.js';
import AddPointView from '../view/add-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

const POINTS_COUNT = 3;

export default class PointsPresenter {
  listPointsContainer = new ListPointsView();

  constructor({pointsContainer}) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(new SortView(), this.pointsContainer);
    render(this.listPointsContainer, this.pointsContainer);
    render(new AddPointView(), this.listPointsContainer.getElement());
    render(new EditPointView(), this.listPointsContainer.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView(), this.listPointsContainer.getElement());
    }
  }
}
