import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
  return (
    <header className={`header ${!loggedIn && "header_unauthorized"}`}>
      <Link to="/">
        <img src={logo} className="logo" alt="логотип" />
      </Link>
      <Navigation loggedIn={loggedIn} />
      {loggedIn && <BurgerMenu />}
    </header>
  );
};

export default Header;
