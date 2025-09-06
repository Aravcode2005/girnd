import React from "react";
import { Container, Button, Card } from "react-bootstrap";

const Welcome = () => (
  <Container className="py-5 bg-dark text-light text-center rounded my-4">
    <h1 className="display-4 fw-bold">Welcome!</h1>
    <p className="lead">
     This is a simple basic frontend application made using react 
    </p>
    <p>
      <Button 
        variant="primary" 
        href="https://unsplash.com" 
        target="_blank"
        size="lg"
      >
        Learn more
      </Button>
    </p>
  </Container>
);

export default Welcome;