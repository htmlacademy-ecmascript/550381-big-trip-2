import AbstractView from '../framework/view/abstract-view.js';
import { DESTINATIONS, POINTS_TYPE, DATE_FORMAT } from '../const.js';
import { humanizePointDate } from '../utils/points.js';


function createTypeTemmplate (type) {
  const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
  return (
    `<div class="event__type-item">
        <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalize(type)}</label>
    </div>`
  );
}

function createDestinationOptionsTemplate(destination) {
  return (
    `<option value=${destination}>${destination}</option>`
  );
}

function createOffersSectionTemplate(offers, checkedOffers, pointId) {
  if (offers.length !== 0) {
    return `
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${offers.offers.map((offer) => createOffersTemplate(offer, checkedOffers, pointId)).join('')}
        </div>
      </section>`;
  }

  return '';
}

function createOffersTemplate(offer, checkedOffers) {
  const { title, price, id } = offer;

  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${checkedOffers.map((item) => item.id).includes(id) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>`
  );
}

function createDestinationSectionTemplate(destination) {
  if (destination) {
    const { description } = destination;
    return (
      `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>
      </section>`
    );
  }

  return '';
}


function createEditPointTemplate(point, checkedOffers, offers, destination) {
  const { type, dateFrom, dateTo, basePrice } = point;
  const { name } = destination;

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                ${POINTS_TYPE.map((pointType) => createTypeTemmplate(pointType)).join('')}

              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${name} list="destination-list-1">
            <datalist id="destination-list-1">
              ${DESTINATIONS.map((destinationName) => createDestinationOptionsTemplate(destinationName)).join('')}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizePointDate(dateFrom, DATE_FORMAT.fullDate)} ${humanizePointDate(dateFrom, DATE_FORMAT.time)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizePointDate(dateTo, DATE_FORMAT.fullDate)} ${humanizePointDate(dateTo, DATE_FORMAT.time)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${createOffersSectionTemplate(offers, checkedOffers)}

          ${createDestinationSectionTemplate(destination)}
        </section>
      </form>
    </li>`
  );
}

export default class EditPointView extends AbstractView {
  #point = null;
  #checkedOffers = [];
  #offers = [];
  #destination = null;
  #handleSaveEditClick = null;

  constructor({point, checkedOffers, offers, destination, onSaveEditClick}) {
    super();
    this.#point = point;
    this.#checkedOffers = checkedOffers;
    this.#offers = offers;
    this.#destination = destination;
    this.#handleSaveEditClick = onSaveEditClick;

    this.element.querySelector('.event--edit').addEventListener('submit', this.#saveEditClickHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#saveEditClickHandler);
  }

  get template() {
    return createEditPointTemplate(this.#point, this.#checkedOffers, this.#offers, this.#destination);
  }

  #saveEditClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleSaveEditClick();
  };
}
