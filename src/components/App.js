import React from 'react';
import Artists from './Artists';
import artistData from '../../data/artist.js';
import Paging from './Paging';

export default function App() {
  const artistList = artistData;
  const handleNextButton = () => console.log('Next!');
  const pagingProps = {
    currentPage: 2,
    totalPages: 5,
    handleNextButton,
    handlePreviousButton: function() {console.log('Previous!');}
  };
  return (
    <>
      <Paging {...pagingProps} />
      <Artists artists={artistList} />
    </>
  );
}
