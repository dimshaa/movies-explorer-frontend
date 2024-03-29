import './App.css';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getUserInfo, login, register, updateUserInfo, addMovie, deleteMovie, getSavedMovies, logout } from '../../utils/MainApi';
import useForm from '../../hooks/useForm';
import { PROFILE_UPD_ERROR_MESSAGE, PROFILE_UPD_SUCCESS_MESSAGE, UNAUTHORIZED_ERROR } from '../../utils/constants';
import { handleError } from '../../utils/utils';

function App() {
  const currentPath = useLocation();
  const history = useHistory();
  const { resetForm } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));
  const [savedMovies, setSavedMovies] = useState([]);
  const [profileUpdateMessage, setProfileUpdateMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      getUserInfo()
        .then(user => {
          setCurrentUser(user);
          setLoginMessage('');
          setRegisterMessage('');
        })
        .catch(err => {
          console.log(err);
          setLoggedIn(false);
          setCurrentUser({});
          localStorage.clear();
          history.push('/');
        })
    }
  }, [loggedIn, history]);

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies()
        .then(movies => {
          setSavedMovies(movies);
        })
        .catch(err => {
          console.log(err);
          setLoggedIn(false);
          setCurrentUser({});
          localStorage.clear();
          history.push('/');
        })
    }
  }, [loggedIn, history]);

  function handleLogin({ email, password }) {
    setIsLoading(true);

    login({ email, password })
      .then(user => {
        localStorage.setItem('loggedIn', true);
        setLoggedIn(localStorage.getItem('loggedIn'));
        setCurrentUser(user);
        setIsError(false);
        history.push('/movies');
      })
      .catch(err => {
        setIsError(true);
        setLoginMessage(handleError(err));
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  function handleRegister({ email, name, password }) {
    setIsLoading(true);

    register({ email, name, password })
      .then(user => {
        handleLogin({...user, password});
        setIsError(false);
        resetForm();
      })
      .catch(err => {
        setIsError(true);
        setRegisterMessage(handleError(err));
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  function handleUpdateUser({ name, email }) {
    setIsLoading(true);

    updateUserInfo({ name, email })
      .then(user => {
        setCurrentUser(user);
        setIsError(false);
        setProfileUpdateMessage(PROFILE_UPD_SUCCESS_MESSAGE);
      })
      .catch(err => {
        if (err.status === UNAUTHORIZED_ERROR) {
          setLoggedIn(false);
          setCurrentUser({});
          localStorage.clear();
          history.push('/');
        }
        console.log(err);
        setIsError(true);
        setProfileUpdateMessage(PROFILE_UPD_ERROR_MESSAGE);
      })
      .finally(() =>{
        setTimeout(() => {
          setIsLoading(false);
          setIsError(false);
          setProfileUpdateMessage('');
        }, 2000);
      });
  };

  function handleLogout() {
    logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        history.push('/');
      })
      .catch(err => console.log(err));
  }

  function handleAddMovie(movie) {
    addMovie(movie)
      .then(addedMovie => {
        setSavedMovies([addedMovie, ...savedMovies]);
      })
      .catch(err => {
        console.log(err);
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        history.push('/');
      });
  };

  function handleDeleteMovie(movieId) {
    deleteMovie(movieId)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m._id !== movieId));
      })
      .catch(err => {
        console.log(err.status);
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        history.push('/');
      });
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
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            onLike={handleAddMovie}
            onDelete={handleDeleteMovie}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            onDelete={handleDeleteMovie}
            cards={[]}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            isLoading={isLoading}
            isError={isError}
            serverResponseMessage={profileUpdateMessage}
            onUpdateUser={handleUpdateUser}
            onLogout={handleLogout}
          />
          <Route path='/signup'>
            {loggedIn ? (
              <Redirect to='/'/>
            ):(
              <Register
                onRegister={handleRegister}
                isLoading={isLoading}
                serverResponseMessage={registerMessage}
                isError={isError}
              />
            )}
          </Route>
          <Route path='/signin'>
            {loggedIn ? (
              <Redirect to='/'/>
            ):(
              <Login
                onLogin={handleLogin}
                isLoading={isLoading}
                serverResponseMessage={loginMessage}
                isError={isError}
              />
            )}
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
