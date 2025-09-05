import React from "react";
import { Card, Button } from "react-bootstrap";
const Imagecard = ({ image, deleteimage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteimage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Imagecard;
