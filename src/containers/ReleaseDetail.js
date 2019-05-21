import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Songs from '../components/songs/Songs';
import { getSongs } from '../services/musicBrainsAPI';

export default class ReleaseDetail extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    songs: {
      recordings: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    return getSongs(id)
      .then(songsBody => {
        this.setState({
          songs: songsBody
        });
      });
  }

  
  render() {
    const artistName = decodeURIComponent(this.props.match.params.name);
    const title = decodeURIComponent(this.props.match.params.title);
    const releaseData = this.state.songs;
    return (
      <>
      <h2>{artistName}</h2>
      <h3>{title}</h3>
      <Songs release={releaseData} artistName={artistName} />
      </>
    );
  }
}
