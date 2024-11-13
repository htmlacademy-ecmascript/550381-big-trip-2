import EventInfoView from './view/event-info-view.js';
import FilterView from './view/filter-view.js';
import {render, RenderPosition} from './render.js';
import EventsPresenter from './presenter/events-presenter.js';

const eventInfoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const siteEventsContainer = document.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter({
  eventsContainer: siteEventsContainer
});

const eventInfoComponent = new EventInfoView();
render(eventInfoComponent, eventInfoContainer, RenderPosition.AFTERBEGIN);
const filterComponent = new FilterView();
render(filterComponent, filterContainer);

eventsPresenter.init();
