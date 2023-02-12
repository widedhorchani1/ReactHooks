import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import App from "../App";

function MovieCard(props, movies) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Card className="Carte" style={{ width: "15rem" }} >
          <Card.Img variant="top" src={movie.ImgSrc} />
          <Card.Body>
            <div className="MovieDetail">
              <div className="Entete">
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text className="Rate">{movie.Rate}</Card.Text>
              </div>
              <div className="overview">
                <Card.Text>Cast: {movie.cast}</Card.Text>
                <Card.Text>{movie.Category}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default MovieCard;
