// Script was developed with help of ChatGPT & UdacityGPT
import React from "react";
import { PropTypes } from "prop-types";

import HomeBook from "./HomeBook";

const HomeShelf = ({ bookTitle, booksData, shelf, handleUpdateShelf }) => {
    const bookShelf = booksData.filter((book) => book.shelf === shelf);

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookShelf.map((book) => (
                        <div key={book.id}>
                            <HomeBook book={book} handleUpdateShelf={handleUpdateShelf} />
                        </div>
                    ))}
                </ol>
            </div>
        </div>
    );
};

HomeShelf.propTypes = {
    bookTitle: PropTypes.string.isRequired,
    booksData: PropTypes.array.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
};

export default HomeShelf;