import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getLyrics from '../services/lyricsAPI';
export default class LyricDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    song: {
      lyrics: ''
    }
  }

  componentDidMount() {
    const { name, title } = this.props.match.params;
    const dirtyName = encodeURIComponent(name);
    const dirtyTitle = encodeURIComponent(title);
    return getLyrics(dirtyName, dirtyTitle)
      .then(songBody => {
        this.setState({
          song: songBody
        });
      });
  }

  render() {
    const artistName = decodeURIComponent(this.props.match.params.name);
    const title = decodeURIComponent(this.props.match.params.title);
    const lyrics = this.state.song.lyrics;

    return (
      <>
      <h2>{artistName}</h2>
      <h3>{title}</h3>
      <p>{lyrics}</p>
      </>

    );

  }
}
