import PointInfoView from './view/point-info-view.js';
import FilterView from './view/filter-view.js';
import {render, RenderPosition} from './render.js';
import PointsPresenter from './presenter/points-presenter.js';

const pointInfoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const sitePointsContainer = document.querySelector('.trip-events');

const pointsPresenter = new PointsPresenter({
  pointsContainer: sitePointsContainer
});

const pointInfoComponent = new PointInfoView();
render(pointInfoComponent, pointInfoContainer, RenderPosition.AFTERBEGIN);
const filterComponent = new FilterView();
render(filterComponent, filterContainer);

pointsPresenter.init();
