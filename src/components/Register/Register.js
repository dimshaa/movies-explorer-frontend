import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import logo from '../../images/logo.svg';
import { EMAIL_REGEXP, NAME_REGEXP } from '../../utils/constants';
import './Register.css';

function Register({ onRegister, isLoading }) {
  const {
    values,
    handleChange,
    isValid,
    isValidInputs,
    errors,
  } = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(values);
  };

  return (
    <main className='register'>
      <Link className='logo-link' to='/'>
        <img className='logo' src={logo} alt='логотип' />
      </Link>
      <form
        className='register__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className='register__title'>
          Добро пожаловать!
        </h2>
        <fieldset className='register__fieldset'>
          <label className='register__label' htmlFor='name'>
            Имя
          </label>
          <input
            className={`register__input ${!isValidInputs.name && 'register__input_invalid'}`}
            type='text'
            id='name'
            name='name'
            minLength={1}
            value={values.name || ''}
            pattern={NAME_REGEXP}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <span className='register__error-text'>
            {errors.name}
          </span>
          <label className='register__label' htmlFor='email'>
            E&#8209;mail
          </label>
          <input
            className={`register__input ${!isValidInputs.email && 'register__input_invalid'}`}
            type='text'
            id='email'
            name='email'
            minLength={1}
            value={values.email || ''}
            pattern={EMAIL_REGEXP}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <span className='register__error-text'>
            {errors.email}
          </span>
          <label className='register__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className={`register__input ${!isValidInputs.password && 'register__input_invalid'}`}
            type='password'
            id='password'
            name='password'
            minLength={6}
            value={values.password || ''}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <span className='register__error-text'>
            {errors.password}
          </span>
        </fieldset>
        <button
          className={`register__submit-btn ${(!isValid || isLoading) && 'register__submit-btn_disabled'}`}
          type='submit'
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </button>
      </form>
      <span className='register__tooltip'>
        Уже зарегистрированы?
        <Link className='register__link' to='/signin'>
          Войти
        </Link>
      </span>
    </main>
  );
};

export default Register;
