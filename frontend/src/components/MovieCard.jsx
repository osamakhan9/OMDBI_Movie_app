import React, { useState } from 'react';
import '../Style/Movie.css';
import Details from './Details';


const MovieList = ({ movies, currentPage, onPageChange }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const handleModal = (imdbID) => {
    const movie = movies.find((m) => m.imdbID === imdbID);
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            {movie.Poster ? (
              <img src={movie.Poster} alt={movie.Title} />
            ) : (
              <p>No Poster Available</p>
            )}
            <div className="movie-detail">
              <div className='movie-details'>
              <h2>{movie.Title || 'Title not available'}</h2>
              <h3>{movie.Year || 'Year not available'}</h3>
              </div>
             <div className='movie-details'>
             <p>Rating: {movie.imdbID}</p>
            <p>Type: {movie.Type}</p>
             </div>

            </div>
            

            <button className='details_btn' onClick={() => handleModal(movie.imdbID)}>View Details</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button disabled={movies.length < 10} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
      <Details isOpen={isModalOpen} onClose={() => setModalOpen(false)} movie={selectedMovie} />
    </>
  );
};

export default MovieList;
