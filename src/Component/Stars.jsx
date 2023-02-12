import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
 class Stars extends Component {

  render() {
    return (
      <div>


  <ReactStars
    count={5}
  
    size={24}
    activeColor="#ffd700"
  />,

  
</div>
    )
  }
}

export default Stars
