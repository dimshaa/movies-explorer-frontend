import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

function Navigation({ loggedIn }) {
  return (
    loggedIn ? (
      <nav className="navigation">
        <ul className="navigation__links-list">
          <li>
            <NavLink to="movies" className="navigation__link" activeClassName="navigation__link_active">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to="saved-movies" className="navigation__link" activeClassName="navigation__link_active">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link to="profile" className="navigation__link navigation__profile-edit">
          Аккаунт
          <div className="navigation__profile-pic"></div>
        </Link>
      </nav>
    ) : (
      <nav className="navigation navigation_unauthorized">
        <ul className="navigation__links-list navigation__links-list_unauthorized">
          <li>
            <Link to="signup" className="navigation__link navigation__link_type_signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="signin" className="navigation__link navigation__link_type_signin">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Navigation;
