import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";


function MovieCard({ ImgSrc, Title, Rate,Category, cast }) {
  return (
    <Card className="Carte" style={{ width: "15rem" }}>
      <Card.Img variant="top" src={ImgSrc} />
      <Card.Body>
        <div className="MovieDetail">
          <div className="Entete">
            <Card.Title>{Title}</Card.Title>
            <Card.Text className="Rate">{Rate}</Card.Text>
          </div>
          <div className="overview">
            <Card.Text>Cast: {cast}</Card.Text>
            <Card.Text>{Category}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
