// Script was developed with help of ChatGPT & UdacityGPT
import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

class Search extends Component {
  render() {
    const {
      search,
      myBooks,
      onSearch,
      onResetSearch,
      onMove
    } = this.props;
    return (
      <div className="search">
        <div className="search-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <SearchInput onSearch={onSearch} />
        </div>
        <SearchResults
          search={search}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default Search;