import { NavItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stars from "./Stars";
import React , {useState} from "react";
import App from '../App'
function NavScrollExample(props,movies) {
 const [Search, setSearch] = useState();
 console.log(Search)
 const SearchMovie=(evt)=>{
evt.preventDefault()
 props.movies.map.filter((movie) => movie.include(Search));
{console.log(Search.current.value)}
 }
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <div className="Hedear">
          <Navbar.Brand className="AppTitle">Movie App</Navbar.Brand>
          <NavItem className="Stars">
            <Stars />
          </NavItem>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={Search}
            />
            console.log()
            <Button variant="light" onClick={SearchMovie}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
