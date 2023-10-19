import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Fitness Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Weights</Nav.Link>
            <Nav.Link href="#features">Cardio</Nav.Link>
            <Nav.Link href="#pricing">Nutrition</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;

{
  /* <nav class="navbar navbar-dark bg-primary">
  <h1>Fitness Website</h1>
</nav>; */
}
