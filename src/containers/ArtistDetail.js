import React, { PureComponent } from 'react';
import Paging from '../components/Paging';
import Releases from '../components/detail/Releases';
import theBeatles from '../../data/releasesData';

export default class ArtistDetail extends PureComponent {
  state = {
    currentPage: 1,
    totalPages: 10,
    artist: theBeatles
  }

  handleNextButton = () => {
    this.setState(state => {
      return {
        currentPage: state.currentPage + 1
      };
    });
  }

  handlePreviousButton = () => {
    this.setState(state => {
      return {
        currentPage: state.currentPage - 1
      };
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
