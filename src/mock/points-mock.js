import { getRandomArrayElement, getRandomInteger } from '../utills.js';

const MIN_BASE_PRICE = 1000;
const MAX_BASE_PRICE = 5000;

const points = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c1',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab1',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa11',
      'b4c3e4e6-9053-42ce-b747-e281314baa12',
      'b4c3e4e6-9053-42ce-b747-e281314baa13',
      'b4c3e4e6-9053-42ce-b747-e281314baa14',
    ],
    type: 'taxi'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c2',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-11T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab2',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa21',
      'b4c3e4e6-9053-42ce-b747-e281314baa22',
      'b4c3e4e6-9053-42ce-b747-e281314baa23',
      'b4c3e4e6-9053-42ce-b747-e281314baa24'
    ],
    type: 'bus'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c3',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-14T22:55:56.845Z',
    dateTo: '2019-07-15T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab3',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa33'
    ],
    type: 'train'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c4',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-16T22:55:56.845Z',
    dateTo: '2019-07-19T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab4',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa41',
      'b4c3e4e6-9053-42ce-b747-e281314baa42',
      'b4c3e4e6-9053-42ce-b747-e281314baa43'
    ],
    type: 'ship'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c5',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-20T10:55:56.845Z',
    dateTo: '2019-07-20T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab4',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa51',
      'b4c3e4e6-9053-42ce-b747-e281314baa52'
    ],
    type: 'drive'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c6',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-20T13:55:56.845Z',
    dateTo: '2019-07-20T17:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab4',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa61',
      'b4c3e4e6-9053-42ce-b747-e281314baa62',
      'b4c3e4e6-9053-42ce-b747-e281314baa63',
      'b4c3e4e6-9053-42ce-b747-e281314baa64',
      'b4c3e4e6-9053-42ce-b747-e281314baa65'
    ],
    type: 'flight'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c7',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-21T10:55:56.845Z',
    dateTo: '2019-07-21T12:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab4',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c8',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-21T17:55:56.845Z',
    dateTo: '2019-07-21T19:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab4',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa81',
      'b4c3e4e6-9053-42ce-b747-e281314baa82',
      'b4c3e4e6-9053-42ce-b747-e281314baa83',
      'b4c3e4e6-9053-42ce-b747-e281314baa84'
    ],
    type: 'restaurant'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c9',
    basePrice: getRandomInteger(MIN_BASE_PRICE, MAX_BASE_PRICE),
    dateFrom: '2019-07-22T10:55:56.845Z',
    dateTo: '2019-07-22T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab4',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa91',
      'b4c3e4e6-9053-42ce-b747-e281314baa92',
      'b4c3e4e6-9053-42ce-b747-e281314baa93'
    ],
    type: 'check-in'
  },
];

function getRandomPoint() {
  return getRandomArrayElement(points);
}

export {getRandomPoint};
