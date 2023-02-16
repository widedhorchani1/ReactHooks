import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import MovieList from "./Component/MovieList";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <NavBar setSearch={setSearch} rating={rating} setRating={setRating} />
      <MovieList search={search} rating={rating} />
    </div>
  );
}

export default App;
