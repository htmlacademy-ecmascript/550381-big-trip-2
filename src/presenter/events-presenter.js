import ListEventsView from '../view/list-events-view';
import SortView from '../view/sort-view';
import AddEventView from '../view/add-event-view';
import EditEventView from '../view/edit-event-view';
import EventView from '../view/event-view';
import {render} from '../render.js';

const EVENTS_COUNT = 3;

export default class EventsPresenter {
  listEventsContainer = new ListEventsView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new SortView(), this.eventsContainer);
    render(this.listEventsContainer, this.eventsContainer);
    render(new AddEventView(), this.listEventsContainer.getElement());
    render(new EditEventView(), this.listEventsContainer.getElement());

    for (let i = 0; i < EVENTS_COUNT; i++) {
      render(new EventView(), this.listEventsContainer.getElement());
    }
  }
}
