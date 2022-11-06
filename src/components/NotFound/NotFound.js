import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  return (
    <main className='not-found'>
      <h2 className='not-found__title'>
        404
      </h2>
      <p className='not-found__message'>
        Страница не найдена
      </p>
      <button
       className='not-found__return-btn'
       type='button'
       onClick={() => history.goBack()}
      >
        Назад
      </button>
    </main>
  );
};

export default NotFound;
