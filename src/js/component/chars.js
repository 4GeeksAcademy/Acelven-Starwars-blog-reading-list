import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../styles/index.css";
import SW from "../../img/sw.png";

function Cards() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={SW} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/details/">
            <Button variant="primary">Go to Target Page</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
