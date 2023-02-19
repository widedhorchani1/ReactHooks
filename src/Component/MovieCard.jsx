import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ ImgSrc, Title, Rate,Category, cast,id }) {
  return (
    <Card className="Carte" style={{ width: "15rem" }}>
      <Card.Img variant="top" src={ImgSrc} />
      <Card.Body>
        <div className="MovieDetail">
          <div className="Entete">
            <Card.Title>{Title}</Card.Title>
            <Card.Text className="Rate">{Rate}</Card.Text>
          </div>
          <Card.Link>
            <Link to={`/movie/${id}`}> Details</Link>
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
