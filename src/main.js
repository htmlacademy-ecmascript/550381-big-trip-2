import PointsPresenter from './presenter/points-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './models/points-model.js';
import { generateFilter } from './mock/filter-mock.js';

const pointInfoContainer = document.querySelector('.trip-main');

const filterContainer = document.querySelector('.trip-controls__filters');
const sitePointsContainer = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const filters = generateFilter(pointsModel.points);


const pointsPresenter = new PointsPresenter({
  pointsContainer: sitePointsContainer,
  pointsModel,
});

const headerPresenter = new HeaderPresenter({
  pointsInfoContainer: pointInfoContainer,
  filtersContainer: filterContainer,
  filters: filters,
});

headerPresenter.init();
pointsPresenter.init();
