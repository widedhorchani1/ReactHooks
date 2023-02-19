import { Button, Container, Form, Nav, Navbar, NavItem } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function NavScrollExample({ setSearch, setRating, rating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  let activeStyle =
   { color: "grey",
    textDecoration: "unset" 
    ,borderBottom : "2px white solid"};
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <div className="Hedear">
          <Navbar.Brand>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : { color: "white", textDecoration: "unset" }
              }
              to="/home"
            >
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : { color: "white", textDecoration: "unset" }
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </Navbar.Brand>
          <NavItem className="Stars">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={rating}
              size={24}
              activeColor="#ffd700"
              half={false}
            />
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
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;