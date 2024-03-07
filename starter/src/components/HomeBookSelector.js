// Script was developed with help of ChatGPT & UdacityGPT
import React from "react";
import { PropTypes } from "prop-types";

const HomeBookSelector = ({ book, handleUpdateShelf }) => {
    const handleUpdateBookShelf = (e) => {
        const value = e.target.value;
        handleUpdateShelf(book, value);
    };
    return (
        <select
            onChange={handleUpdateBookShelf}
            value={book.shelf ? book.shelf: "none"}
        >
            <option value="none" disabled>
                Book relocated to ...
            </option>
            <option value="currReading">Reading:</option>
            <option value="want2Read"> Want2Read:</option>
            <option value="alrRead">Already Read:</option>
            <option value="none">None</option>
        </select>
    );
};

HomeBookSelector.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
};

export default HomeBookSelector