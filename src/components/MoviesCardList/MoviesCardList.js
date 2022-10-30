import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards }) {
  return (
    <section className='cards'>
      <ul className='cards-list'>
        {cards.map(card => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
