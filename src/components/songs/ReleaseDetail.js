import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Songs from './Songs';
import releaseData from '../../../data/releaseData';

export default class ReleaseDetail extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }
  render() {
    const artistName = this.props.match.params.name;
    return (
      <>
      <h2>{artistName}</h2>
      <h3>{this.props.match.params.title}</h3>
      <Songs release={releaseData} artistName={artistName} />
      </>
    );
  }
}
