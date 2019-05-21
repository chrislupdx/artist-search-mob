import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Songs from '../components/songs/Songs';
import releaseData from '../../data/releaseData';

export default class ReleaseDetail extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }
  
  render() {
    const artistName = decodeURIComponent(this.props.match.params.name);
    const title = decodeURIComponent(this.props.match.params.title);
    return (
      <>
      <h2>{artistName}</h2>
      <h3>{title}</h3>
      <Songs release={releaseData} artistName={artistName} />
      </>
    );
  }
}
