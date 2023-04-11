import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import WBLogo from "./assets/Wasana_Bakers_Logo.png";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#FECE06" }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt="Wasana Bakers Horana Logo"
            src={WBLogo}
            width="30px"
            height="30px"
            className="d-inline-block align-top"
          />{" "}
          Wasana Bakers - Horana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 mylg-0" style={{ maxHeight: "200px" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#order">Order</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control type="search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
