// Script was developed with help of ChatGPT & CodePilot
import React from "react";

import Search2Home from "./Search2Home";
import Search2Shelf from "./Search2Shelf";

import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

import Home from "./Home"

const Search = ({ handleSearchQuery, searchQuery, handleUpdateShelf, mergedBooks}) => {
    return (
        <>
            <Helmet>
                <title>MyRead SearchPage</title>
                <link rel="canonical" href="/search" />
                <meta
                    name="description"
                    content="The Reads React SPA"
                />
            </Helmet>
            <div className="search-books">
                <div className="search-books-bar">
                    <Search2Home />
                    <div className="input-wrapper-book-search">
                        <input
                            type="text"
                            value={searchQuery}
                            placeholder="Title, author or ISBN?"
                            onChange={handleSearchQuery}
                        />
                    </div>
                </div>
                <Search2Shelf
                    searchQuery={searchQuery}
                    mergedBooks={mergedBooks}
                    handleUpdateShelf={handleUpdateShelf}
                />
            </div>
        </>
    );
};

Search.propTypes = {
    handleSearchQuery: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
    mergedBooks: PropTypes.array.isRequired,
};

export default Search;