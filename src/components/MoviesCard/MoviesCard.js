import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MOVIES_API_URL } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({ card, savedMovies, onLike, onDelete }) {
  const currentPath = useLocation();

  const isSaved = savedMovies.some(movie => movie.movieId === card.id || card.movieId)

  function transformDuration(duration) {
    const hours = Math.floor(duration / 60 );
    const minutes = duration % 60;

    return (hours < 1) ? `${minutes}м` : `${hours}ч ${minutes}м`;
  };

  function handleAdd() {
    onLike(card)
  };

  function handleDelete() {
    const movieToDelete = savedMovies.find(movie => movie.movieId === card.id)
    onDelete(movieToDelete._id);
  };

  return (
    <li className='card'>
      <a
        className='card__link'
        href={card.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img className='card__image' src={`${MOVIES_API_URL}${card.image.url}`} alt={card.nameRU} />
      </a>
      <div className='card__info'>
        <h2 className='card__title'>{card.nameRU}</h2>
        {currentPath.pathname === '/movies' ? (
          <button
            className={`card__save-btn ${isSaved && 'card__save-btn_selected'}`}
            type='button'
            onClick={isSaved ? handleDelete : handleAdd}
            aria-label='добавить в избранное'
          >
          </button>
          ) : (
          <button
            className={`card__save-btn ${isSaved && 'card__save-btn_delete'}`}
            type='button'
            aria-label='удалить из избранного'
          >
          </button>
          )}
      </div>
      <p className='card__duration'>{transformDuration(card.duration)}</p>
    </li>
  );
};

export default MoviesCard;
