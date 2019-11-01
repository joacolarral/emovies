import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Index = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Fluid jumbotron</h1>
      <p className="lead"></p>
      <div className="albums">
        <h3>Movies</h3>
        <div className="row">
          {props.movies.map(movie => (
            <div key={movie.imdbID} className="col-xs-4">
              <Link className="thumbnail" to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} />
                <div className="caption">
                  <h5>
                    <span>{movie.Title}</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(Index);
