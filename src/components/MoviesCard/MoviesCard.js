import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ card }) {
  const currentPath = useLocation();

  return (
    <li className='card'>
      <img className='card__image' src={card.src} alt={card.title} />
      <div className='card__info'>
        <h2 className='card__title'>{card.title}</h2>
        {currentPath.pathname === '/movies' ? (
          <button
            className={`card__save-btn ${card.isSaved && 'card__save-btn_selected'}`}
            type='button'
            aria-label='добавить в избранное'
          >
          </button>
          ) : (
          <button
            className={`card__save-btn ${card.isSaved && 'card__save-btn_delete'}`}
            type='button'
            aria-label='удалить из избранного'
          >
          </button>
          )}
      </div>
      <p className='card__duration'>{card.duration}</p>
    </li>
  );
};

export default MoviesCard;
