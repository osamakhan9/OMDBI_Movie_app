import React from 'react';
import '../Style/Detail.css';

const Details = ({ isOpen, onClose, movie }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose(); 
        }
      };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-button">
          &times;
        </span>
        {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>imdbID: {movie.imdbID}</p>
        <p>Type: {movie.Type}</p>
      </div>
    </div>
  );
};

export default Details;
