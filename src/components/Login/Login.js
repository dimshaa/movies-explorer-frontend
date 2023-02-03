import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import logo from '../../images/logo.svg';
import { EMAIL_REGEXP } from '../../utils/constants';
import './Login.css';

function Login({ onLogin, isLoading, serverResponseMessage, isError }) {
  const {
    values,
    handleChange,
    isValid,
    isValidInputs,
    errors,
  } = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(values);
  };


  return (
    <main className='login'>
      <Link className='logo-link' to='/'>
        <img className='logo' src={logo} alt='логотип' />
      </Link>
      <form
        className='login__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className='login__title'>
          Рады видеть!
        </h2>
        <fieldset className='login__fieldset'>
          <label className='login__label' htmlFor='email'>
            E&#8209;mail
          </label>
          <input
            className={`login__input ${!isValidInputs.email && 'login__input_invalid'}`}
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
          <span className='login__error-text'>
            {errors.email}
          </span>
          <label className='login__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className={`login__input ${!isValidInputs.password && 'login__input_invalid'}`}
            type='password'
            id='password'
            name='password'
            minLength={6}
            value={values.password || ''}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <span className='login__error-text'>
            {errors.password}
          </span>
        </fieldset>
        <span className={`login__message ${isError && 'login__message_error'}`}>
            {serverResponseMessage}
          </span>
        <button
          className={`login__submit-btn ${(!isValid || isLoading) && 'login__submit-btn_disabled'}`}
          type='submit'
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
      <span className='login__tooltip'>
        Ещё не зарегистрированы?
        <Link className='login__link' to='/signup'>
          Регистрация
        </Link>
      </span>
    </main>
  );
};

export default Login;
