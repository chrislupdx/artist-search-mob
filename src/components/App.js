import React from 'react';
import Artists from './Artists';

export default function App() {
  const artistList = [
    { id: 'randomstring', name: 'Led Zeppelin' },
    { id: 'randomstring1', name: 'Led Puppy' },
    { id: 'randomstring2', name: 'Led Rabbit' },
    { id: 'randomstring3', name: 'Led Orange' }
  ];
  return (
    <Artists artists={artistList} />
  );
}
