import React from 'react';
import Artists from './Artists';
import artistData from '../../data/artist.js';
import ArtistSearch from '../components/ArtistSearch';
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
  const artistSearchProps = {
    searchQuery: 'poop',
    handleSubmit: function() {console.log('artistsearched!');}
  };
  return (
    <>
      <ArtistSearch {...artistSearchProps} />
      <Paging {...pagingProps} />
      <Artists artists={artistList} />
    </>
  );
}
