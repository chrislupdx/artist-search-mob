import React, { PureComponent } from 'react';
import Artists from '../components/Artists';
import SearchQuery from '../components/SearchQuery';
import Paging from '../components/Paging';
import { getArtists } from '../services/musicBrainsAPI';

export default class ArtistSearch extends PureComponent {

  state = {
    artistList: [],
    currentPage: 1,
    totalPages: 10,
    searchQuery: ''
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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = () => {
    const query = this.state.searchQuery;
    getArtists(query)
      .then(body => {
        this.setState({
          artistList: body.artists
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
