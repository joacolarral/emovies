import React, { useState, useEffect } from "react";
import { Image, Row, Container, Col } from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./singleMovie.module.css";
import Spinner from "../Loader/Spinner";

export default ({ fetchMovieId, match, movie }) => {
  console.log(movie);
  useEffect(() => {
    async function fetchMovie() {
      await fetchMovieId(match.params.id);
    }
    fetchMovie();
  }, []);

  function minutesToHours(str) {
    let num = "";
    let i = 0;
    let hours;
    let min;
    while (typeof parseInt(str[i]) === "number" && !!str[i]) {
      num += str[i];
      i++;
    }
    hours = Math.floor(parseInt(num) / 60);
    min = parseInt(num) % 60;

    if (!hours) return `${min}min`;
    if (!min) return `${hours}h`;

    return `${hours}h ${min}min`;
  }

  return !movie.imdbID ? (
    <Spinner />
  ) : (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col xs={12} md={3}>
          <Image src={movie.Poster} className={styles.img} thumbnail />
        </Col>
        <Col xs={12} md={3} className={styles.info}>
          {movie.Title} {`(${movie.Released.slice(-4)})`}
          <br />
          <div>{`${minutesToHours(movie.Runtime)}  |  ${movie.Language}`}</div>
          <FontAwesomeIcon
            icon={faStar}
            size="2x"
            style={{ color: "#e4bb2d" }}
          />
          {movie.imdbRating} / {movie.imdbVotes}
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};
