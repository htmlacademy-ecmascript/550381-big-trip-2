import { getRandomArrayElement, getRandomInteger } from '../utills';

const points = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomInteger(1000, 5000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'taxi'
  },
];

function getRandomPoint() {
  return getRandomArrayElement(points);
}
export {getRandomPoint};
