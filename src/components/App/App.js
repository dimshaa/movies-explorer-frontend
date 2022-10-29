import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App({ loggedIn }) {
  return (
    <div className="app">
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route path='/movies'>
          <Movies />
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
