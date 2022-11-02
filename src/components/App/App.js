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


function App({ loggedIn }) {
  return (
    <div className="app">
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route path='/movies'>
          <Movies cards={movieCards} />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies cards={movieCards.filter(card => card.isSaved)} />
        </Route>
        <Route path='/profile'>
          <Profile user={currentUser} />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
