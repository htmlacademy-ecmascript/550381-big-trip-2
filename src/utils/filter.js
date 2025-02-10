import { FILTERS_TYPE } from '../const';
import { isFuturePoint, isPresentPoint, isPastPoint } from './points';

const filter = {
  [FILTERS_TYPE.EVERYTHING]: (points) => points,
  [FILTERS_TYPE.FUTURE]: (points) => points.filter((point) => isFuturePoint(point.dateFrom)),
  [FILTERS_TYPE.PRESENT]: (points) => points.filter((point) => isPresentPoint(point.dateFrom, point.dateTo)),
  [FILTERS_TYPE.PAST]: (points) => points.filter((point) => isPastPoint(point.dateTo))
};

export { filter };
