import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistDetail from '../containers/ArtistDetail';
import ReleaseDetail from '../containers/ReleaseDetail';
import LyricDisplay from '../containers/LyricDisplay';

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path ="/song/:title/:name" component={LyricDisplay} />
        <Route path="/release/:id/:title/:name" component={ReleaseDetail} />
        <Route path="/artist/:id" component={ArtistDetail} />
        <Route path="/" component={ArtistSearch} />
      </Switch>
    </Router>
  );
}
