import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { currentUser, movieCards } from '../../utils/constants';
import { useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const currentPath = useLocation();

  const [loggedIn, setLoggedIn] = useState(true);

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
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
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
  );
};

export default App;
