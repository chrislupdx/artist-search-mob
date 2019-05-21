import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import lyricsData from '../../data/lyricsData';
export default class LyricDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    const artistName = decodeURIComponent(this.props.match.params.name);
    const title = decodeURIComponent(this.props.match.params.title);
    const lyrics = lyricsData.lyrics;

    return (
      <>
      <h2>{artistName}</h2>
      <h3>{title}</h3>
      <p>{lyrics}</p>
      </>

    );

  }
}
