import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/home.css";

export const DetailsPlanets = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const description = "Morbi mollis rhoncus nisi, et accumsan metus. Etiam pretium nunc at lorem congue lobortis. Vestibulum ultricies facilisis eros, ut aliquet augue consectetur ac. Phasellus pharetra, nisl in posuere dictum, purus nunc molestie metus, quis condimentum dui velit vitae nibh. Integer ut suscipit turpis. Maecenas elit dui, aliquet ut lacus quis, dictum suscipit felis. Nulla facilisi. Nulla vel libero in eros porta porttitor. Vestibulum eu ultrices est."

    useEffect(() => {
        actions.loadDetails(params.theid)
    }, [])

    return (

        <div className="cards">
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} />
                <Card.Body>
                    <Card.Title>{store.planet.name}</Card.Title>
                    <Card.Text>
                        Arcu odio ut sem nulla pharetra. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dictum varius duis at consectetur. Ut etiam sit amet nisl. Commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt praesent semper feugiat nibh sed. Elit at imperdiet dui accumsan sit amet nulla. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>Population:</b> {store.planet.population}</ListGroup.Item>
                    <ListGroup.Item><b>Rotation period:</b> {store.planet.rotation_period} days</ListGroup.Item>
                    <ListGroup.Item><b>Orbital period:</b> {store.planet.orbital_period} days</ListGroup.Item>
                    <ListGroup.Item><b>Diameter:</b> {store.planet.diameter}km</ListGroup.Item>
                    <ListGroup.Item><b>Gravity:</b> {store.planet.gravity}</ListGroup.Item>
                    <ListGroup.Item><b>Climate:</b> {store.planet.climate}</ListGroup.Item>
                </ListGroup>
                <Card.Body>

                </Card.Body>
            </Card>
        </div>
    );
};
