import React, { useState } from "react";
import "./style.css";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleReset = () => {
    setSearchInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchInput}
        placeholder="Search for favorite movie"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        type="submit"
        value="SEARCH"
        className="search-button"
        onClick={handleSearch}
      >
        <span>Search</span>
      </button>
    </form>
  );
};

export default Search;
