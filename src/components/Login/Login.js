import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormVAlid] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className='login'>
      <Link className='logo-link' to='/'>
        <img className='logo' src={logo} alt='логотип' />
      </Link>
      <form className='login__form'>
        <h2 className='login__title'>
          Рады видеть!
        </h2>
        <fieldset className='login__fieldset'>
          <label className='login__label' htmlFor='email'>
            E&#8209;mail
          </label>
          <input
            className='login__input'
            type='text'
            id='email'
            name='email'
            minLength={1}
            value={email}
            onChange={handleEmailChange}
            required
          />
          <span className='login__error-text'></span>
          <label className='login__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className='login__input'
            type='password'
            id='password'
            name='password'
            minLength={6}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span className='login__error-text'></span>
        </fieldset>
        <button
          className={`login__submit-btn ${!isFormValid && 'login__submit-btn_disabled'}`}
          type='submit'
        >
          Войти
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
