import React from 'react';
import PropTypes from 'prop-types';

function Artist({ name }) {
  return (
    <li>{name}</li>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired
};

export default Artist;
