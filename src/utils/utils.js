import { BAD_REQUEST_ERROR, CONFLICT_ERROR, CONFLICT_ERROR_MESSAGE, MAX_SHORT_MOVIE_DURATION, SERVER_ERROR_MESSAGE, UNAUTHORIZED_ERROR, UNAUTHORIZED_ERROR_MESSAGE, VALIDATION_ERROR_MESSAGE } from "./constants";

export function findMovies(movies, query) {
  return movies.filter(
    ({ nameRU, nameEN }) =>
      nameRU.toLowerCase().includes(query.toLowerCase()) ||
      nameEN.toLowerCase().includes(query.toLowerCase())
  );
};

export function filterShortMovies(movies) {
  return movies.filter(
    ({ duration }) =>
      duration <= MAX_SHORT_MOVIE_DURATION
  );
};

export function handleError({ status }) {
  if (status === UNAUTHORIZED_ERROR) return UNAUTHORIZED_ERROR_MESSAGE;
  if (status === CONFLICT_ERROR) return CONFLICT_ERROR_MESSAGE;
  if (status === BAD_REQUEST_ERROR) return VALIDATION_ERROR_MESSAGE;
  return SERVER_ERROR_MESSAGE;
}
