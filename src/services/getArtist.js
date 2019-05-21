
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


