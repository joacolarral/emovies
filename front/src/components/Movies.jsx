import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => (
  <div className="movies">
    <h3>Movies</h3>
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-xs-4">
          <Link className="thumbnail" to={`/movies/${movie.id}`}>
            <img src={movie.imageUrl} />
            <div className="caption">
              <h5>
                <span>{movie.name}</span>
              </h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
