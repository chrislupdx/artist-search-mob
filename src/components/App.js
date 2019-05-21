import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistDetail from '../containers/ArtistDetail';

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id" component={ArtistDetail} />
        <Route path="/" component={ArtistSearch} />
      </Switch>
    </Router>
  );
}
