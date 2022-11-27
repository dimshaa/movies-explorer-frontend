import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { currentUser, movieCards } from '../../utils/constants';
import NotFound from '../NotFound/NotFound';

function App({ loggedIn }) {
  return (
    <div className="app">
      <Switch>
        <Route path='/movies'>
          <Header loggedIn={loggedIn} />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header loggedIn={loggedIn} />
          <SavedMovies cards={movieCards.filter(card => card.isSaved)} />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header loggedIn={loggedIn} />
          <Profile user={currentUser} />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
