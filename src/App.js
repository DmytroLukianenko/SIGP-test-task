// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FavoriteFilms from './components/pages/favorite/favoriteFilmsPage';
import SearchFilms from './components/pages/searchFilms/searchFilmsPage';
import DetailsPage from './components/pages/details/detailsPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={SearchFilms} />
          <Route path="/details" component={DetailsPage} />
          <Route path="/favorite" component={FavoriteFilms} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
