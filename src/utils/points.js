import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { DATE_FORMAT,
  MILLISECONDS_IN_MINUTE,
  SECONDS_IN_MINUTE,
  HOURS_IN_DAY
} from '../const';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function humanizePointDate(date, format) {
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
}

function isFuturePoint(dateFrom) {
  return dateFrom && dayjs(dateFrom).isAfter(dayjs(), 'D');
}

function isPastPoint(dateTo) {
  return dateTo && dayjs(dateTo).isBefore(dayjs(), 'D');
}

function isPresentPoint(dateFrom, dateTo) {
  return dateFrom && dateTo && dayjs(dateFrom).isSameOrBefore(dayjs(), 'D') && dayjs(dateTo).isSameOrAfter(dayjs(), 'D');
}

export {
  humanizePointDate,
  getDifferenceBetweenDates,
  isFuturePoint,
  isPastPoint,
  isPresentPoint
};
