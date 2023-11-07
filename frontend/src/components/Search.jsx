import React, { useState } from "react";
import "../Style/Search.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search........."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="s_btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
