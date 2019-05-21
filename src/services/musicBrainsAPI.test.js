import releasesData from '../../data/releasesData.js';
import artistData from '../../data/artistData';
import { cleanData } from './musicBrainsAPI';

describe('getArtist tests', () => {
  it('cleans our 3rd party API data', () => {


    const result = cleanData(artistData, releasesData);
    const expectedRelease = {
      id: 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d',
      name: 'The Beatles',
      releases: [
        {
          id: '08a76e48-4d6a-3d9f-a25b-5d96166a05ae',
          title: 'Please Please Me / Ask My Why',
          image: 'http://coverartarchive.org/release/08a76e48-4d6a-3d9f-a25b-5d96166a05ae/front',
        }
      ]
    };
    expect(result.releases[0]).toEqual(expectedRelease.releases[0]);
    expect(result.releases[22].image).toEqual('https://i.giphy.com/media/l0NwNQ5nfmFOPvv5m/giphy.webp');
    expect(result.releases.length).toEqual(25);
  });

});

