import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards, savedMovies, onLike, onDelete }) {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map(card => (
          <MoviesCard
            key={card.id || card.movieId}
            card={card}
            savedMovies={savedMovies}
            onDelete={onDelete}
            onLike={onLike}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
