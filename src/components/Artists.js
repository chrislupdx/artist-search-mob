import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function Artists({ artists }) {
  const artistList = artists.map(artist => {
    return <Artist id={artist.id} name={artist.name} key={artist.id} />;
  });

  return (
    <ul>
      {artistList}
    </ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};

export default Artists;
