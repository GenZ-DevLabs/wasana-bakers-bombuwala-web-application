import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#FECE06",
          paddingTop: "64px",
          paddingBottom: "32px",
          paddingLeft: "auto",
          paddingRight: "auto",
        }}
      >
        <Row xs={1} md={3}>
          <Col>
            <ul style={{ listStyle: "none" }}>
              <h5>Wasana Bakers</h5>
              <li>Home</li>
              <li>About</li>
              <li>Order</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col>
            <ul style={{ listStyle: "none" }}>
              <h5>Reach Us</h5>
              <li>wasanabakers@example.com</li>
              <li>123/1, Main road, Bombuwala</li>
              <li>+94 12 3456 789</li>
            </ul>
          </Col>
          <Col>
            <ul style={{ listStyle: "none" }}>
              <h5>Find Us</h5>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pinterest</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row
        style={{
          backgroundColor: "#3B0A08",
          color: "#FFFFFF",
          margin: "auto",
        }}
      >
        <Col>
          <p
            style={{
              marginTop: "12px",
            }}
          >
            &copy;Copyright 2023 by Horana Wasana Bakers Bombuwala, All Rights
            Reserved.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
