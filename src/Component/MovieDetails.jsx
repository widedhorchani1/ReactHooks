import React from 'react'
import { useParams } from 'react-router-dom';
import {data} from "../data"
function MovieDetails() {
   let {id}=useParams()
   let movie=data.find((elt)=>elt.id===id );
   console.log(movie)
  return (
    <div>
      <div className='detail'>
        <h1>{movie.Title}</h1>
        <h2>{movie.Category}</h2>
        <h3>{movie.cast}</h3>
      </div>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default MovieDetails