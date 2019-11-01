import React from "react";

export default ({ movie, handleSubmit }) => (
  <div className="album">
    <div>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} />
      <ul>
        <li>Year: {movie.Year}</li>
        <li>Rated: {movie.Rated}</li>
        <li>Released: {movie.Released}</li>
        <li>Runtime: {movie.Runtime}</li>
        <button onClick={e => handleSubmit(movie)}>Add to favourites</button>
      </ul>
    </div>
  </div>
);
