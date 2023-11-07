import React from 'react';
import '../Style/Detail.css';

const Details = ({ isOpen, onClose, movie }) => {
  const handleOverlayClick = (event) => {
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-button">
          &times;
        </span>
        {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
        <div className='movie-details'>
          <h2>{movie.Title}</h2>
          <h3>{movie.Year}</h3>
        </div>
        <div className='movie-details'>
        <p>Rating: {movie.imdbID}</p>
        <p>Type: {movie.Type}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
