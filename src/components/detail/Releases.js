import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ artist }) {
  const artistName = artist.name;
  const releaseList = artist.releases.map(release => {
    const { id, title, image } = release;
    const releaseProps = { id, title, image, artistName };
    return <Release key={id} {...releaseProps} />;
  });

  return (
    <>
      <h2>{artist.name}</h2>
      <ul>{releaseList}</ul>
    </>
  );
}

Releases.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Releases;
