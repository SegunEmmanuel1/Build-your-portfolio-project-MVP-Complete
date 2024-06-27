mport React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchResultsPage} />
        <Route path="/booking/:busId" component={BookingPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
