import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../styles/home.css";
const CardComponent = (props) => {

  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.character.name}</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary" href={props.details}>Details</Button>
        <div className='favorites'>
          <Button variant='danger'>{props.addFavorites}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
