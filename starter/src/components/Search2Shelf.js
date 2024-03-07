// Script was developed with help of ChatGPT & UdacityGPT
import React, { useDefferedValue} from "react";
import HomeBook from "./HomeBook"
import { PropTypes } from "prop-types"  

const Search2Shelf = ({ handleUpdateShelf, searchQuery, mergBooks}) => {
    const noDataGiven = <div className="no_data_given"> There is no data given </div>;

    const defferedMergBooks = useDefferedValue(mergBooks);

    return (
        <div classNmae="search-books-result">
            <ol classNmae="books-grid">
                {defferedMergBooks && searchQuery 
                    ? defferedMergBooks.map((book) => {
                        return (
                            <HomeBook 
                                key={book.id}
                                book={book}
                                handleUpdateShelf={handleUpdateShelf}
                            />
                        );
                    })
                : noDataGiven}
            </ol>
        </div>
    );
};

Search2Shelf.propTypes = {
    handleUpdateShelf: PropTypes.func.isRequired,
    mergBooks: PropTypes.array.isRequired,
    searchQuery: PropTypes.string,
};

export default Search2Shelf;