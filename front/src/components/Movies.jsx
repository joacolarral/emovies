import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import unavailableImage from "../assets/images/unavailableImage.jpg";
import styles from "../assets/css/movies/Movies.module.css";

export default ({ movies }) => (
  console.log(movies),
  (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.imdbID}>
            <Card style={{ width: "18rem" }} className={styles.card}>
              <Card.Img
                className={styles.imagen}
                variant="top"
                src={movie.Poster !== "N/A" ? movie.Poster : unavailableImage}
              />
              <Card.Body>
                <Card.Title className={styles.text}>{movie.Title}</Card.Title>
                <Card.Text>Year: {movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )

  /*  <div className="movies">
    <h3>Movies</h3>
    <div className="row">
      {movies.map((movie) => (
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
  </div> */
);
