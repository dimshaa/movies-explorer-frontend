import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <div className="app">
      <Header loggedIn={false} />
      <Footer />
    </div>
  );
}

export default App;
