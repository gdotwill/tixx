import './App.css';
// import Nav from './components/Header/Nav/Nav'
// import Search from './components/Header/Search/Search'
import HomeComponent from './components/HomeComponent'
// import Footer from './components/Footer/Footer'
import SearchResultsComponent from './components/SearchResults';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
          <Route path="/" component={ HomeComponent } exact />
          <Route path="/search-results" component={ SearchResultsComponent } />
      </Switch>
    </>
  );
}

export default App;
