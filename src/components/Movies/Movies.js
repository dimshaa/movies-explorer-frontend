import { useEffect, useState } from 'react';
import getMovies from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import useWindowWidth from '../../hooks/useWindowWidth';
import { useLocation } from 'react-router-dom';
import { filterShortMovies, findMovies } from '../../utils/utils';

function Movies({ savedMovies, onLike, onDelete }) {
  const currentSearch = JSON.parse(localStorage.getItem('currentSearch'));
  const width = useWindowWidth();
  const currentPath = useLocation();

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [filterChecked, setFilterChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [lastCardIndex, setLastCardIndex] = useState(0);
  const [numberToAdd, setNumberToAdd] = useState(0);
  const [cards, setCards] = useState([]);


  function getCardsNumber() {
    if (width < 780) {
      setLastCardIndex(5);
      setNumberToAdd(2);
      return
    }
    if (width < 1005) {
      setLastCardIndex(8);
      setNumberToAdd(2);
      return
    }
    if (width < 1296) {
      setLastCardIndex(12);
      setNumberToAdd(3);
      return
    } else {
      setLastCardIndex(16);
      setNumberToAdd(4);
      return
    }
  };

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
      setIsLoading(false)
    });
  };

  function handleFilter() {
    setFilterChecked(!filterChecked);
    if (!currentSearch) {
      localStorage.setItem('currentSearch', JSON.stringify({query: '', movies: [], filterChecked: !filterChecked}));
    } else {
      localStorage.setItem('currentSearch', JSON.stringify({...currentSearch, filterChecked: !filterChecked}))
    }
  }

  function handleMoreCards() {
    setLastCardIndex(cards.length + numberToAdd);
  };

  useEffect(() => {
    if (!currentSearch) return;

    (filterChecked) ? setMovies(filterShortMovies(movies)) : setMovies(currentSearch.movies);
  }, [filterChecked]);

  useEffect(() => {
    getCardsNumber();
  }, [width]);

  useEffect(() => {
    const cards = movies.slice(0, lastCardIndex);
    setCards(cards);
  }, [movies, lastCardIndex]);

  useEffect(() => {
    if (!currentSearch) return;

    setMovies(currentSearch.movies);
    setQuery(currentSearch.query);
    setFilterChecked(currentSearch.filterChecked);
  }, []);

  const isMoreBtnVisible = (currentPath.pathname === '/movies') && (cards.length !== movies.length);

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
          <MoviesCardList
            cards={cards}
            savedMovies={savedMovies}
            onLike={onLike}
            onDelete={onDelete}
          />
          {isMoreBtnVisible && (
          <button
            className='movie__more-btn'
            type='button'
            onClick={handleMoreCards}
          >
            Ещё
          </button>
          )}
        </>
      )
    }
    </main>
  );
};

export default Movies;
