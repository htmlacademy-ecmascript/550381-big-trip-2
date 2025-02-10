const POINT_COUNT = 4;
const DATE_FORMAT = {
  monthDay: 'MMM DD',
  fullDate: 'DD/MM/YY',
  time: 'HH:mm',
  difDay: 'DD[D] HH[H] mm[M]',
  difHour: 'HH[H] mm[M]',
  difMinute: 'mm[M]'
};
const POINTS_TYPE = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];
const DESTINATIONS = [
  'Chamonix',
  'Geneva',
  'Amsterdam'
];
const MILLISECONDS_IN_MINUTE = 60000;
const SECONDS_IN_MINUTE = 60;
const HOURS_IN_DAY = 24;

const FILTERS_TYPE = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

export {POINT_COUNT,
  DATE_FORMAT,
  POINTS_TYPE,
  DESTINATIONS,
  MILLISECONDS_IN_MINUTE,
  SECONDS_IN_MINUTE,
  HOURS_IN_DAY,
  FILTERS_TYPE
};
