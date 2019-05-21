export function getArtists(query, offset) {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25&offset=${offset}`)
    .then(res => {
      return [res.ok, res.json()];
    })
    .then(([ok, body]) => {
      if(!ok) throw 'unable to get search results';

      return body;
    });
} 

export function getArtist(query) {
  return fetch(`http://musicbrainz.org/ws/2/artist/${query}?inc=aliases&fmt=json`)
    .then(res => {
      return [res.ok, res.json()];
    })
    .then(([ok, body]) => {
      if(!ok) throw 'Unable to find artist';

      return body;
    });
}

export function getArtistReleases(query, offset) {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${query}&fmt=json&offset=${offset}`)
    .then(res => {
      return [res.ok, res.json()];
    })
    .then(([ok, body]) => {
      if(!ok) throw 'Unable to find releases';

      return body;
    });
}

export function getSongs(id) {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => {
      return [res.ok, res.json()];
    })
    .then(([ok, body]) => {
      if(!ok) throw 'Unable to find songs';

      return body;
    });
}

export function cleanData(artist, artistsReleases) {
  const releases = artistsReleases.releases.map(release => {
    const image = release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://i.giphy.com/media/l0NwNQ5nfmFOPvv5m/giphy.webp';
    return {
      id: release.id,
      title: release.title,
      image
    };
  });
  return {
    id: artist.id,
    name: artist.name,
    releases
  };
}


