import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ release, artistName }) {
  const songList = release.recordings.map(song => {
    return <Song key={song.id} title={song.title} artistName={artistName} />; 
  });

  return (
    <ul>
      {songList}
    </ul>
  );

}

Songs.propTypes = {
  release: PropTypes.object.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Songs;
