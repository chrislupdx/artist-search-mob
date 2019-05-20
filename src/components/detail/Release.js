import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ id, title, image }) {
  return (
    <li>
      <Link to={`/release/${id}`}>
        <img src={image} alt={`artwork of ${title}`}/>
        <p>{title}</p>
      </Link>
    </li>
  );
}

Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Release;
