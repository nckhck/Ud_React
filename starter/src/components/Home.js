// Script was developed with help of ChatGPT & UdacityGPT
import React from "react";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

import HomeShelf from "./HomeShelf";
import HomeNavigate2Search from "./HomeNavigate2Search";

const Home = ({ booksData, handleUpdateShelf }) => {
    return (
        <>
            <Helmet>
                <title>Udacity Nanodegree React 1. Project "MyReads"</title>
                <link rel="canonical" href="/" />
                <meta
                    name="description"
                    content="React ja: MyReads helps to control your reading habbits digitally"
                />
            </Helmet>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads Application</h1>
                </div>
                <div className="lists-books-content">
                    <div>
                        <HomeShelf
                            handleUpdateShelf={handleUpdateShelf}
                            booksData={booksData}
                            titleName="Currently Reading"
                            shelf="currReading"
                        />
                        <HomeShelf
                            handleUpdateShelf={handleUpdateShelf}
                            booksData={booksData}
                            titleName="Want to Read"
                            shelf="want2Read"
                        />
                        <HomeShelf
                            handleUpdateShelf={handleUpdateShelf}
                            booksData={booksData}
                            titleName="Already Read"
                            shelf="alrRead"
                        />
                    </div>
                </div>
                <HomeNavigate2Search />
            </div>
        </>
    );
};

Home.propTypes = {
    booksData: PropTypes.array.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
};

export default Home;