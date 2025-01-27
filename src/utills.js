import dayjs from 'dayjs';
import { DATE_FORMAT,
  MILLISECONDS_IN_MINUTE,
  SECONDS_IN_MINUTE,
  HOURS_IN_DAY
} from './const';

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}


function humanizePoinDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function getDifferenceBetweenDates(start, end) {
  const diff = dayjs(end).diff(start) / MILLISECONDS_IN_MINUTE;
  const difference = dayjs(end).diff(start);

  if (diff < SECONDS_IN_MINUTE) {
    return dayjs(difference).format('mm[M]');
  } else if (diff > SECONDS_IN_MINUTE && diff < SECONDS_IN_MINUTE * HOURS_IN_DAY) {
    return dayjs(difference).format(DATE_FORMAT.difHour);
  } else {
    return dayjs(difference).format(DATE_FORMAT.difDay);
  }
  // switch (diff) {
  //   case diff < SECONDS_IN_MINUTE:
  //     return dayjs(difference).format(DATE_FORMAT.difMinute);

  //   case diff > SECONDS_IN_MINUTE && difference < SECONDS_IN_MINUTE * HOURS_IN_DAY:
  //     return dayjs(difference).format(DATE_FORMAT.difHour);

  //   default:
  //     return dayjs(difference).format(DATE_FORMAT.difDay);
  // }
}

export {getRandomArrayElement,
  getRandomInteger,
  humanizePoinDate,
  getDifferenceBetweenDates
};
