import dayjs from 'dayjs';
import { DATE_FORMAT,
  MILLISECONDS_IN_MINUTE,
  SECONDS_IN_MINUTE,
  HOURS_IN_DAY
} from '../const';


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

export {
  humanizePointDate,
  getDifferenceBetweenDates
};
