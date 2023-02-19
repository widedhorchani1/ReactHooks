import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import MovieList from "./Component/MovieList";
import {Routes,Route} from "react-router-dom"
import Home from "./Component/Home";
import MovieDetails from "./Component/MovieDetails";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <NavBar setSearch={setSearch} rating={rating} setRating={setRating} />
      <Routes>
  
          <Route path="/home" element={<Home />} />
     
        <Route
          path="/movies"
          element={<MovieList search={search} rating={rating} />}
        />
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
