import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('pass_holder');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className='register'>
      <Link className='logo-link' to='/'>
        <img className='logo' src={logo} alt='логотип' />
      </Link>
      <form className='register__form'>
        <h2 className='register__title'>
          Добро пожаловать!
        </h2>
        <fieldset className='register__fieldset'>
          <label className='register__label' htmlFor='name'>
            Имя
          </label>
          <input
            className='register__input'
            type='text'
            id='name'
            name='name'
            minLength={1}
            value={name}
            onChange={handleNameChange}
            required
          />
          <span className='register__error-text'></span>
          <label className='register__label' htmlFor='email'>
            E&#8209;mail
          </label>
          <input
            className='register__input'
            type='text'
            id='email'
            name='email'
            minLength={1}
            value={email}
            onChange={handleEmailChange}
            required
          />
          <span className='register__error-text'></span>
          <label className='register__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className='register__input register__input_invalid'
            type='password'
            id='password'
            name='password'
            minLength={6}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span className='register__error-text'>
            Что-то пошло не так...
          </span>
        </fieldset>
        <button
          className='register__submit-btn'
          type='submit'
        >
          Зарегистрироваться
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
