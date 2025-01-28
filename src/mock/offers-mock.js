import { getRandomInteger } from '../utills.js';

const MIN_PRICE_OFFER = 30;
const MAX_PRICE_OFFER = 500;


const offers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa11',
        title: 'Upgrade to a business class',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa12',
        title: 'Choose the radio channel',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa13',
        title: 'Water is free',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa14',
        title: 'Drive safely',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa21',
        title: 'Add luggage',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa22',
        title: 'Add meal',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa23',
        title: 'Smoke-free zone',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa24',
        title: 'Wifi is free',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Switch to comfort class',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'Order a special meal',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
        title: 'Book a taxi',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa41',
        title: 'Add luggage',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa42',
        title: 'Add meal',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa43',
        title: 'Drink a free beverage',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa51',
        title: 'Rent a car',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa52',
        title: 'With automatic transmission',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa61',
        title: 'Add luggage',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa62',
        title: 'Switch to comfort class',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa63',
        title: 'Add meal',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa64',
        title: 'Choose seats',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa65',
        title: 'Travel by train',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa81',
        title: 'WIFI is free',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa82',
        title: 'Water is free',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa83',
        title: 'Choose the live music',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa84',
        title: 'Special menu',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa91',
        title: 'Add breakfast',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa92',
        title: 'Laundry service',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa93',
        title: 'Order a meal from the restaurant',
        price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      }
    ]
  },
];

export { offers };
