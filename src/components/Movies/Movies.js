import { useEffect, useState } from 'react';
import getMovies from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import useWindowWidth from '../../hooks/useWindowWidth';
import { useLocation } from 'react-router-dom';
import { filterShortMovies, findMovies } from '../../utils/utils';
import { LARGE_SCREEN, MEDIUM_SCREEN, OVERALL_SCREEN, SMALL_SCREEN } from '../../utils/constants';
import NoResult from '../NoResult/NoResult';

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
    if (width < SMALL_SCREEN.WIDTH) {
      setLastCardIndex(SMALL_SCREEN.LAST_CARD_INDEX);
      setNumberToAdd(SMALL_SCREEN.NUMBER_TO_ADD);
      return
    }
    if (width < MEDIUM_SCREEN.WIDTH) {
      setLastCardIndex(MEDIUM_SCREEN.LAST_CARD_INDEX);
      setNumberToAdd(MEDIUM_SCREEN.NUMBER_TO_ADD);
      return
    }
    if (width < LARGE_SCREEN.WIDTH) {
      setLastCardIndex(LARGE_SCREEN.LAST_CARD_INDEX);
      setNumberToAdd(LARGE_SCREEN.NUMBER_TO_ADD);
      return
    } else {
      setLastCardIndex(OVERALL_SCREEN.LAST_CARD_INDEX);
      setNumberToAdd(OVERALL_SCREEN.NUMBER_TO_ADD);
      return
    }
  };

  function handleSearch(query) {
    setIsLoading(true);
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));

    if (allMovies) {

      let foundMovies = findMovies(allMovies, query);
      const currentSearch = {query: query, movies: foundMovies, filterChecked: filterChecked};

      if (filterChecked) {
        foundMovies = filterShortMovies(foundMovies);
      }

      setMovies(foundMovies);
      setQuery(query);
      localStorage.setItem('currentSearch', JSON.stringify(currentSearch));
      setIsLoading(false);
    } else {
      getMovies()
      .then((movies) => {
        localStorage.setItem('allMovies', JSON.stringify(movies));
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
    }
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
  const isNoResult = (currentSearch && !cards.length);

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
          {isNoResult && <NoResult />}
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
