import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ id, title, image, artistName }) {
  const cleanTitle = encodeURIComponent(title);
  const cleanArtist = encodeURIComponent(artistName);
  return (
    <li>
      <Link to={`/release/${id}/${cleanTitle}/${cleanArtist}`}>
        <img src={image} alt={`artwork of ${title}`}/>
        <p>{title}</p>
      </Link>
    </li>
  );
}

Release.propTypes = {
  id: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Release;
