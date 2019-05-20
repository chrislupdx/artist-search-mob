import React from 'react';
import PropTypes from 'prop-types';

function SearchQuery({ searchQuery, handleSubmit, handleChange }) {
  return (
    <>
      <input onChange={handleChange} type="text" name="searchQuery" value={searchQuery} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

SearchQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchQuery;
