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
