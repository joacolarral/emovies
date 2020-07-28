import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Favs = props => (
  console.log(props),
  (
    <div>
      <h3>Movies Favs</h3>
      <div className="row">
        {props.user &&
          props.favs.map(movie => (
            <div key={movie.id} className="col-xs-4">
              <Link className="thumbnail" to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} />
                <div className="caption">
                  <h5>
                    <span>{movie.Title}</span>
                  </h5>
                </div>
              </Link>
              <button onClick={() => props.removeFavourite(movie)}>
                Remove Favourite
              </button>
            </div>
          ))}
      </div>
    </div>
  )
);

export default connect()(Favs);
