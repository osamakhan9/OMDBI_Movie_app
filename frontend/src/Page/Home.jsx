import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search'
import MovieCard from '../components/MovieCard'
import Gif from '../GIF/down.gif'
import Dog from '../GIF/dog.gif'


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

    let apiUrl = `https://omdbi.onrender.com/api/search?query=${query}&page=${page}`;

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
        <div>
          <img src={Gif} alt="" />
        </div>
      ) : error ? (
        <div>
          <img src={Dog} alt="" />
        </div>
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