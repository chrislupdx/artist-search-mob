import React from 'react';
import PropTypes from 'prop-types';

function SearchResults({ artists }) {
  const artistList = artists.map(artist => {
    return (
      <li key={artist.id}>{artist.name}</li>
    );
  });

  return (
    <ul>
      {artistList}
    </ul>
  );
}

SearchResults.propTypes = {
  artists: PropTypes.array.isRequired
};

export default SearchResults;
