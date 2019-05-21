import React, { PureComponent } from 'react';
import Artists from '../components/Artists';
import SearchQuery from '../components/SearchQuery';
import Paging from '../components/Paging';
import { getArtists } from '../services/musicBrainsAPI';

export default class ArtistSearch extends PureComponent {

  state = {
    artistList: [],
    currentPage: 1,
    totalPages: 1,
    searchQuery: ''
  }

  handleNextButton = () => {
    const offset = this.state.currentPage * 25;
    getArtists(this.state.searchQuery, offset)
      .then(body => {
        this.setState(state => {
          return {
            artistList: body.artists,
            currentPage: state.currentPage + 1
          };
        });
      });
  }

  handlePreviousButton = () => {
    const offset = (this.state.currentPage - 2) * 25;
    getArtists(this.state.searchQuery, offset)
      .then(body => {
        this.setState(state => {
          return {
            artistList: body.artists,
            currentPage: state.currentPage - 1
          };
        });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = () => {
    const query = this.state.searchQuery;
    getArtists(query, 0)
      .then(body => {
        this.setState({
          artistList: body.artists,
          totalPages: Math.ceil(body.count / 25)
        });
      });
    
  }

  render() {
    const { currentPage, totalPages, searchQuery, artistList } = this.state;
    const { handleNextButton, handlePreviousButton, handleSubmit, handleChange } = this;
    const pagingProps = {
      currentPage,
      totalPages,
      handleNextButton,
      handlePreviousButton
    };
    const artistSearchProps = {
      searchQuery,
      handleSubmit,
      handleChange
    };
    return (
      <>
        <SearchQuery {...artistSearchProps} />
        <Paging {...pagingProps} />
        <Artists artists={artistList} />
      </>
    );
  }
}
