import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
import { EMAIL_REGEXP, NAME_REGEXP } from '../../utils/constants';
import './Profile.css';

function Profile({ isLoading, serverErrorText, onUpdateUser, onLogOut }) {
  const user = useContext(CurrentUserContext);
  const [isFormActive, setIsFormActive] = useState(false);

  const {
    values,
    setValues,
    errors,
    handleChange,
    isValid,
    resetForm,
  } = useForm();

  function enableForm() {
    setIsFormActive(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(values)
    onUpdateUser(values);
    resetForm()
  };

  useEffect(() => {
    setValues({
      name: user?.name,
      email: user?.email,
    });
  }, [setValues, user]);

  return (
    <main className='profile' name='profile'>
      <form
        className='profile__form'
        onSubmit={handleSubmit}
        noValidate
      >
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
              value={values.name || ''}
              pattern={NAME_REGEXP}
              onChange={handleChange}
              disabled={!isFormActive || isLoading}
              required
            />
          </label>
          <span className='profile__error-text'>
            {errors.name}
          </span>
          <label className='profile__label' htmlFor='email'>
              E&#8209;mail
            <input
              className='profile__input'
              type='text'
              id='email'
              name='email'
              minLength={1}
              value={values.email || ''}
              pattern={EMAIL_REGEXP}
              onChange={handleChange}
              disabled={!isFormActive || isLoading}
              required
            />
          </label>
          <span className='profile__error-text'>
            {errors.email}
          </span>
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
              <Link
                className='profile__logout'
                onClick={() => console.log('aaaaaa')}
                to='/'
              >
                Выйти из аккаунта
              </Link>
            </>
          ) : (
            <>
              <span className='profile__error-message'>
                {serverErrorText}
              </span>
              <button
                className={`profile__submit-btn ${(!isValid || isLoading) && 'profile__submit-btn_disabled'}`}
                disabled={!isValid || isLoading}
                type='submit'
              >
                {isLoading ? 'Сохранение...' : 'Сохранить'}
              </button>
            </>
          )}
          </div>
      </form>
    </main>
  );
};

export default Profile;
