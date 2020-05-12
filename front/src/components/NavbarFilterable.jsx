import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../assets/css/navbar/Navbar.module.css";

export default function ({ location, bgColor }) {
  return (
    <div>
      <Navbar className={bgColor ? styles.navbg : ""} fixed="top" expand="lg">
        <Navbar.Brand>
          <NavLink className={`${styles.link}`} to={`/`}>
            EMovies
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink className={`${styles.link} selected`} to={`/login`}>
                Log in
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={`${styles.link}`} to="/createaccount">
                Create Account
              </NavLink>
            </Nav.Link>
          </Nav>

          <Form inline>
            <Nav.Link>
              <NavLink className={`${styles.link}`} to="/favs">
                Favourites
              </NavLink>
            </Nav.Link>

            {location !== "/" ? (
              <>
                <FormControl
                  inline
                  type="text"
                  placeholder="Find your movie..."
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </>
            ) : (
              ""
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
