import { useEffect, useState } from 'react';
import getMovies from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {
  const currentSearch = JSON.parse(localStorage.getItem('currentSearch'));

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [filterChecked, setFilterChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function findMovies(movies, query) {
    return movies.filter(
      ({ nameRU, nameEN }) =>
        nameRU.toLowerCase().includes(query.toLowerCase()) ||
        nameEN.toLowerCase().includes(query.toLowerCase())
    );
  };

  function filterShortMovies(movies) {
    return movies.filter(
      ({ duration }) =>
        duration < 41
    );
  }

  function handleSearch(query) {
    setIsLoading(true);

    getMovies()
      .then((movies) => {
        let foundMovies = findMovies(movies, query);
        const currentSearch = {query: query, movies: foundMovies, filterChecked: filterChecked};

        if (filterChecked) {
          foundMovies = filterShortMovies(foundMovies);
        }

        setMovies(foundMovies);
        setQuery(query);
        localStorage.setItem('currentSearch', JSON.stringify(currentSearch));
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(setIsLoading(false), 5000); // timer to check if Preloader works
      });
  };

  function handleFilter() {
    setFilterChecked(!filterChecked);
    localStorage.setItem('currentSearch', JSON.stringify({...currentSearch, filterChecked: !filterChecked}))
  }

  useEffect(() => {
    if (!currentSearch) return;

    setMovies(currentSearch.movies);
    setQuery(currentSearch.query);
    setFilterChecked(currentSearch.filterChecked);
  }, []);

  useEffect(() => {
    if (!currentSearch) return;

    (filterChecked && movies.length) ? setMovies(filterShortMovies(currentSearch.movies)) : setMovies(currentSearch.movies);
  }, [filterChecked]);

  return (
    <main className='movies'>
      <SearchForm
        onSearch={handleSearch}
        query={query}
        onFilter={handleFilter}
        filterChecked={filterChecked}
      />
      {isLoading ?
      (
        <Preloader />
      ) : (
        <>
          <MoviesCardList cards={movies} />
          <button
            className='movie__more-btn'
            type='button'
          >
            Ещё
          </button>
        </>
      )
    }
    </main>
  );
};

export default Movies;
