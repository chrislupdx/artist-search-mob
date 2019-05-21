import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ title, artistName }) {
  return (
    <li>
      <Link to={`/song/${title}/artist/${artistName}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
}

Song.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Song;
