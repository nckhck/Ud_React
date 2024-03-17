import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bshelf from './Bshelf';

class ListOfBooks extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div className="list-of-books">
        <div className="list-of-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-of-books-content">
          <div>
            {bookshelves.map(shelf => (
              <Bshelf
                key={shelf.key}
                shelf={shelf}
                books={books}
                onMove={onMove}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
            <button>Add Book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListOfBooks;