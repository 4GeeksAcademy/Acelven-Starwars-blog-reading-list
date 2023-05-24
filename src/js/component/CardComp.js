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
        <div className='cardButtons'>
          <Button style={{ height: '2.5rem' }} variant="primary" href={props.details}>Details</Button>
          <div className='favoritesButton'>
            <div>{props.addFavorites}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
