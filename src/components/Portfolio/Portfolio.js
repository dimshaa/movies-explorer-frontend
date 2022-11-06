import './Portfolio.css';

function Portfolio() {
  return (
    <article className='portfolio'>
      <h3 className='portfolio__title'>
        Портфолио
      </h3>
      <ul className='portfolio__links-list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' target='_blank' href='https://github.com/dimshaa/how-to-learn' rel='noreferrer'>
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' target='_blank' href='https://github.com/dimshaa/how-to-learn' rel='noreferrer'>
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' target='_blank' href='https://github.com/dimshaa/how-to-learn' rel='noreferrer'>
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Portfolio;
