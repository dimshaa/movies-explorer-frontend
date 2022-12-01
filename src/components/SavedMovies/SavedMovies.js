import { useEffect, useState } from 'react';
import { filterShortMovies, findMovies } from '../../utils/utils';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ savedMovies, onDelete }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [filterChecked, setFilterChecked] = useState(false);

  function searchSavedMovies(movies, query, filterChecked) {
    let foundMovies = findMovies(movies, query);
    if (filterChecked) {
      foundMovies = filterShortMovies(foundMovies)
    }
    setMovies(foundMovies);
  }

  function handleSearch(query) {
    setQuery(query);
    searchSavedMovies(savedMovies, query)
  };

  useEffect(() => {
    if (!query) {
      return
    }
    searchSavedMovies(savedMovies, query, filterChecked)
  }, [savedMovies, query, filterChecked])

  function handleFilter() {
    setFilterChecked(!filterChecked);
  }

  return (
    <main className='saved-movies'>
      <SearchForm
        onSearch={handleSearch}
        query={query}
        onFilter={handleFilter}
        filterChecked={filterChecked}
      />
      <MoviesCardList
        cards={movies}
        savedMovies={savedMovies}
        onDelete={onDelete}
      />
    </main>
  );
};

export default SavedMovies;
