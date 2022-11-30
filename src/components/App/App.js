import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { login, register } from '../../utils/MainApi';
import useForm from '../../hooks/useForm';

function App() {
  const currentPath = useLocation();
  const history = useHistory();
  const { resetForm } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin({ email, password }) {
    setIsLoading(true);

    login({ email, password })
      .then(user => {
        localStorage.setItem('loggedIn', true);
        setLoggedIn(localStorage.getItem('loggedIn'));
        setCurrentUser(user);
        history.push('/movies');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  function handleRegister({ email, name, password }) {
    setIsLoading(true);

    register({ email, name, password })
      .then((user) => {
        handleLogin(user);
        resetForm();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const headerShown =
    currentPath.pathname === '/' ||
    currentPath.pathname === '/movies' ||
    currentPath.pathname === '/saved-movies' ||
    currentPath.pathname === '/profile'

  const footerShown =
    currentPath.pathname === '/' ||
    currentPath.pathname === '/movies' ||
    currentPath.pathname === '/saved-movies'

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {headerShown && <Header loggedIn={loggedIn} />}
        <Switch>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            cards={[]}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            user={currentUser}
          />
          <Route path='/signup'>
            <Register
              onRegister={handleRegister}
              isLoading={isLoading}
            />
          </Route>
          <Route path='/signin'>
            <Login
              onLogin={handleLogin}
              isLoading={isLoading}
            />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        {footerShown && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
