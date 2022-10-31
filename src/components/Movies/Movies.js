import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ cards }) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
  );
};

export default Movies;
