// Script was developed with help of ChatGPT & UdacityGPT
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getAll, update } from "./components/BooksAPI";
import Error from "./components/Error";
import Home from "./components/Home";
import HookQuery from "./components/Hooks";
import Search from "./components/Search";

function App() {

  const [booksData, setBooksData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBookQuery, setSearchBookQuery] = HookQuery(searchQuery);
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdBooks, setMapofIdBooks] = useState(new Map());

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  const getAllBooksData = async() => {
    await getAll().then((res) => {
      setBooksData(res);
      setMapofIdBooks(createMapOfBooks(res));
    });
  };

  const handleUpdateShelf = async(book, shelf) => {
    await update(book, shelf);
    getAllBooksData();
  };

  const handleSearchQuery = (e) => {
    let inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    const combiningBooksShelfs  = searchBookQuery.map((book) => {
      if (mapOfIdBooks.has(book.id)) {
        return mapOfIdBooks.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combiningBooksShelfs);
  }, [searchBookQuery]);

  useEffect(() => {
    getAllBooksData();
  }, []);
  

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/search"
            element={
              <Search
                mergedBooks={mergedBooks}
                searchQuery={searchQuery}
                handleSearchQuery={handleSearchQuery}
                handleUpdateShelf={handleUpdateShelf}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home 
                booksData={booksData}
                handleUpdateShelf={handleUpdateShelf} />
            }
          />
          <Route 
            path="*" 
            element={<Error />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
