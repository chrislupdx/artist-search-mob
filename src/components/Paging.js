import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, handlePreviousButton, handleNextButton }) {
  return (
    <>
      <button onClick={handlePreviousButton} disabled={currentPage <= 1}>Previous</button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button onClick={handleNextButton} disabled={currentPage >= totalPages}>Next</button>
    </>
  );
}
Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePreviousButton: PropTypes.func.isRequired,
  handleNextButton: PropTypes.func.isRequired
}

export default Paging;
