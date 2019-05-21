import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ title, artistName }) {
  const cleanTitle = encodeURIComponent(title);
  const cleanArtist = encodeURIComponent(artistName);
  return (
    <li>
      <Link to={`/song/${cleanTitle}/${cleanArtist}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
}

Song.propTypes = {
  artistName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Song;
