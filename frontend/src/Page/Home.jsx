import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search'
import MovieCard from '../components/MovieCard'


const Home = () => {


  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('avengers');
  const [yearFilter, setYearFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const searchMovies = (query, page = 1) => {
    setIsLoading(true);
    setError(null);

    let apiUrl = `http://localhost:8000/api/search?query=${query}&page=${page}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    searchMovies(query, yearFilter, currentPage);
  }, [query, yearFilter, currentPage]);


  return (
	<div>
    <Search
        onSearch={(q, year) => {
          setQuery(q);
          setYearFilter(year);
          setCurrentPage(1);
        }}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <MovieCard
            movies={movies}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
  </div>
  )
}

export default Home