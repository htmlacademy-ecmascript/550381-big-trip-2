import PointInfoView from './view/point-info-view.js';
import FilterView from './view/filter-view.js';
import {render, RenderPosition} from './framework/render.js';
import PointsPresenter from './presenter/points-presenter.js';
import PointsModel from './models/points-model.js';

const pointInfoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const sitePointsContainer = document.querySelector('.trip-events');

const pointsModel = new PointsModel();

const pointsPresenter = new PointsPresenter({
  pointsContainer: sitePointsContainer,
  pointsModel,
});

const pointInfoComponent = new PointInfoView();
render(pointInfoComponent, pointInfoContainer, RenderPosition.AFTERBEGIN);
const filterComponent = new FilterView();
render(filterComponent, filterContainer);

pointsPresenter.init();
