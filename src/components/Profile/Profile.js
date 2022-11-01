import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isFormActive, setIsFormActive] = useState(false);

  function enableForm() {
    setIsFormActive(true);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormActive(false);
  };

  return (
    <main className='profile' name='profile' onSubmit={handleSubmit}>
      <form className='profile__form'>
        <h2 className='profile__title'>
          {`Привет, ${user.name}!`}
        </h2>
        <fieldset className='profile__fieldset'>
          <label className='profile__label' htmlFor='name'>
             Имя
            <input
              className='profile__input'
              type='text'
              id='name'
              name='name'
              minLength={1}
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <label className='profile__label' htmlFor='email'>
              E&#8209;mail
            <input
              className='profile__input'
              type='text'
              id='email'
              name='email'
              minLength={1}
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
        </fieldset>
          <div className='profile__edit'>
          {!isFormActive ? (
            <>
              <button
                className='profile__edit-btn'
                type='button'
                onClick={enableForm}
              >
                Редактировать
              </button>
              <Link className='profile__logout' to='/'>
                Выйти из аккаунта
              </Link>
            </>
          ) : (
            <>
              <span className='profile__error-message'>
                При обновлении профиля произошла ошибка.
              </span>
              <button
                className='profile__submit-btn'
                type='submit'
              >
                Сохранить
              </button>
            </>
          )}
          </div>
      </form>
    </main>
  );
};

export default Profile;
