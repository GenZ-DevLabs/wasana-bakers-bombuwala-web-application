import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Cake from "./assets/CakeDesignBoardNo01.jpg";

const MainSection = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#FFE786",
        paddingTop: "32px",
        paddingRight: "auto",
        paddingBottom: "48px",
        paddingLeft: "auto",
      }}
    >
      <h2>Icing Cake Designs</h2>

      <Row xs={1} md={2} lg={4}>
        {Array.from({ length: 16 }).map((_, idx) => (
          <Col>
            <Card
              style={{
                height: "240px",
                width: "240px",
                marginTop: "64px",
                marginRight: "auto",
                marginBottom: "64px",
                marginLeft: "auto",
              }}
            >
              <Card.Img variant="top" src={Cake} alt="Cake Card 01" />
              <Card.Body style={{ backgroundColor: "#FFF2BD" }}>
                <Card.Title>Design Board</Card.Title>
                <Card.Subtitle>No: 01</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainSection;
