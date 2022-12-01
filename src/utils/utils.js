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
      duration < 41
  );
};
