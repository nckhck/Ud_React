import React from 'react';
import Book from './Book';

const Bshelf = props => {
  const { shelf, books, onMove } = props;
  const bookOnShelf = books.filter(book => book.shelf === shelf.key);

  return (
    <div className="Bshelf">
      <h2 className="Bshelf-title">{shelf.name}</h2>
      <div className="Bshelf-books">
        <ol className="Bshelf-grid">
          {bookOnShelf.map(book => (
            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bshelf;