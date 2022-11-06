import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ cards }) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList cards={cards} />
      <button
        className='movie__more-btn'
        type='button'
      >
        Ещё
      </button>
    </main>
  );
};

export default Movies;
