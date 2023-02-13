import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import MovieList from "./Component/MovieList";

function App() {
const [search,setSearch]=useState("")
const [rating,setRating]=useState(0)
  
  return (
    <div className="App">
      <NavBar setSearch={setSearch} rating={rating} setRating={setRating} />
      <section className="Card">
        <MovieList search={search} rating={rating} />
      </section>
    </div>
  );
}

export default App;
