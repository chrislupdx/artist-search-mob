import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArtistSearch from '../containers/ArtistSearch';

export default function App() {
  
  return (
    <Router>
      <ArtistSearch />
    </Router>
  );
}
