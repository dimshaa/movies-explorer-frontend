import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState('false');

  return (
    <>
      <button
        className={`burger__toggle-btn ${!isOpen && 'burger__toggle-btn_close'}`}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
      ></button>
      <div className={`burger ${!isOpen && 'burger_opened'}`}>
        <nav className='burger__menu'>
          <ul className='burger__links-list'>
            <li>
              <NavLink
                exact
                to='/'
                onClick={() => setIsOpen(!isOpen)}
                className='burger__link'
                activeClassName='burger__link_active'
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to='movies'
                onClick={() => setIsOpen(!isOpen)}
                className='burger__link'
                activeClassName='burger__link_active'
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to='saved-movies'
                onClick={() => setIsOpen(!isOpen)}
                className='burger__link'
                activeClassName='burger__link_active'
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link
            to='profile'
            onClick={() => setIsOpen(!isOpen)}
            className='burger__link burger__profile-edit'
          >
            Аккаунт
            <div className='burger__profile-pic'></div>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
