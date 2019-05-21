import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paging from '../components/Paging';
import Releases from '../components/detail/Releases';
import { getArtist, getArtistReleases, cleanData } from '../services/musicBrainsAPI';

export default class ArtistDetail extends PureComponent {
  state = {
    currentPage: 1,
    totalPages: 1,
    artist: {
      id: '',
      name: '',
      releases: []
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  handleNextButton = () => {
    const offset = this.state.currentPage * 25;
    const id = this.state.artist.id;
    getArtistReleases(id, offset)
      .then(releaseBody => {
        const artist = {
          id: this.state.artist.id,
          name: this.state.artist.name
        };
        this.setState(state => {
          return {
            artist: cleanData(artist, releaseBody),
            currentPage: state.currentPage + 1
          };
        });
      });
  }

  handlePreviousButton = () => {
    const offset = (this.state.currentPage - 2) * 25;
    const id = this.state.artist.id;
    getArtistReleases(id, offset)
      .then(releaseBody => {
        const artist = {
          id: this.state.artist.id,
          name: this.state.artist.name
        };
        this.setState(state => {
          return {
            artist: cleanData(artist, releaseBody),
            currentPage: state.currentPage - 1
          };
        });
      });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    return Promise.all([
      getArtistReleases(id, 0),
      getArtist(id)
    ])
      .then(([releaseBody, artistBody]) => {
        this.setState({
          artist: cleanData(artistBody, releaseBody),
          totalPages: Math.ceil(releaseBody['release-count'] / 25)
        });
      });
  }

  render() {
    const { currentPage, totalPages, artist } = this.state;
    const { handleNextButton, handlePreviousButton } = this;
    const pagingProps = { currentPage, totalPages, handleNextButton, handlePreviousButton };
    return (
      <>
        <Paging { ...pagingProps} />
        <Releases artist={artist} />
      </>
    );
  }
}
