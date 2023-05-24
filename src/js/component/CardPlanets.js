import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPlanets = (props) => {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.planets.name}</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary" href={props.details}>Details</Button>
                <Button>{props.addFavoritesPlanets}</Button>
            </Card.Body>
        </Card>
    );
};

export default CardPlanets;
