import React ,{useState} from 'react'
import {data} from ".././data"
import MovieCard from './MovieCard';
import {Button,Modal,Form} from "react-bootstrap";
function MovieList({search,rating}) {
     const [movies, setMovies] = useState(data);
     console.log("movies: ", movies)
     const [newMovie,setNewMovie]=useState({
        Title:"",
        Category:"",
        Cast:"",
        ImgSrc:"",
        Rate:""
     })
       const [show, setShow] = useState(false);
       const handleClose = () => setShow(false);
       const handleShow = () => setShow(true);
       const handelAddNewMovie=(e)=>{
        setNewMovie({...newMovie,[e.target.name]: e.target.value})
       }
       const handleSave=()=>{
        setMovies([...movies,newMovie])
        handleClose();
       }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>
      <div>
        {movies.filter((movie)=>
        movie.Title
        .includes(search))
        .map((movie) => {
           <MovieCard {...movie}/>
          })}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form 
            onChange={(e)=>{
                handelAddNewMovie(e
                    )
            }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" name="Title" />               
              </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cover</Form.Label>
                <Form.Control type="text" placeholder=""name="ImgSrc" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ctagoryr</Form.Label>
                <Form.Control type="text" placeholder=""name="Ctagory" />
              </Form.Group> 
               <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cast</Form.Label>
                <Form.Control type="text" placeholder="" name="Cast"/>
              </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" min={1} max={5} placeholder="" name="Rate"/>
              </Form.Group>
              

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleSave()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default MovieList