import React from "react";
import SearchBar from "../components/layout/SearchBar.jsx";
import BookCard from "../components/books/BookCard.jsx";

const Home = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <BookCard />
      </div>
    </div>
  );
};

export default Home;
