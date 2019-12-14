import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Node API 3</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/posts">Posts</Nav.Link>
          <Nav.Link href="/upload">Upload Image</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
