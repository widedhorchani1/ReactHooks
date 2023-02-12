import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Button from "./Component/Button"
import Modal from "./Component/Modal"
import MovieCard from "./Component/MovieCard";

function App() {
  const [movies, setMovies] = useState([
    {
      ImgSrc:
        "https://i.pinimg.com/564x/a6/67/db/a667dbec2e74aa1a19e3fdf14c5de0d2.jpg",
      Title: "Twilight",
      Rate: "4.5",
      Category: "Action, Romance,Fantastic",
      cast: "Kristen Stewart, Robert Pattison,Taylor Lautner",
      url: "",
    },
    {
      ImgSrc:
        "https://i.pinimg.com/236x/80/17/46/801746a3e29fbab120d25b97098fdc33.jpg",
      Title: "Harry Potter",
      Rate: "4.7",
      Category: "Adventure , Magic",
      cast: "Warner Bros, Daniel Radcliffe, Emma Watson",
      url: "",
    },
    {
      ImgSrc:
        "https://i.pinimg.com/236x/9d/20/9e/9d209e4cb40f06c8b8c9daa9eea78cb8.jpg",
      Title: "The lord of The Rings ",
      Rate: "4.7",
      Category: "Heroic, Romance",
      cast: "Elijah Wood, Viggo Mortensen,Ian Mckelle",
      url: "",
    },
    {
      ImgSrc:
        "https://i.pinimg.com/564x/5c/89/91/5c8991e433c1bf67c2e2e1d0d5c2d226.jpg",
      Title: "The GodFather",
      Rate: "4.5",
      Category: "Drama, Crimenal,Policy",
      cast: "Al Pacino,Marlon Brando,Rober De Niro",
      url: "",
    },
    {
      ImgSrc:
        "https://i.pinimg.com/236x/b9/99/23/b99923266b49f75d0dcbfe41efaa3b53.jpg",
      Title: "Very Bad Trip ",
      Rate: "3.3",
      Category: "Comedy",
      cast: "Bradley Cooper,Ed Helms,Zach Galifianakis",
      url: "",
    },
    {
      ImgSrc:
        "https://i.pinimg.com/236x/eb/63/6e/eb636e78c95b5c9569d851a9c5662a3d.jpg",
      Title: "Bad Boys",
      Rate: "3.5",
      Category: "Action ,Comedy",
      cast: "Will Smith, Martin Lawrence",
      url: "",
    },
  ]);
  
  return (
    <div className="App">
      <NavBar movies={movies} />
      <Button onClick={<Modal />} />
      <section className="Card">
        <MovieCard movies={movies} />
      </section>
    </div>
  );
}

export default App;