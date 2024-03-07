// Script was developed with help of ChatGPT & UdacityGPT
import React from "react";
import { PropTypes } from "prop-types";

import HomeBookSelector from "./HomeBookSelector";

const HomeBook = ({ book, handleUpdateShelf}) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            hight: 193,
                            backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`,
                        }}>
                    </div>
                    <div className="book-shelf-changer">
                        <HomeBookSelector
                            handleUpdateShelf={handleUpdateShelf}
                            book={book}>
                        </HomeBookSelector>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
            </div>
        </li>
    );
};

HomeBook.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
};

export default HomeBook;