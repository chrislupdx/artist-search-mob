import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistDetail from '../containers/ArtistDetail';
import ReleaseDetail from './songs/ReleaseDetail';

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/release/:id/:title/:name" component={ReleaseDetail} />
        <Route path="/artist/:id" component={ArtistDetail} />
        <Route path="/" component={ArtistSearch} />
      </Switch>
    </Router>
  );
}
