export default function getLyrics(artist, title) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      return [res.ok, res.json()];
    })
    .then(([ok, body]) => {
      if(!ok) throw 'unable to ok';

      return body;
    });
}
