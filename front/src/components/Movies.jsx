import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import unavailableImage from "../assets/images/unavailableImage.jpg";
import styles from "../assets/css/movies/Movies.module.css";

export default ({ movies }) => (
  <Container>
    <Row>
      {movies.Search.map((movie) => (
        <Col key={movie.imdbID}>
          <Link to={`/movies/${movie.imdbID}`}>
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
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);
