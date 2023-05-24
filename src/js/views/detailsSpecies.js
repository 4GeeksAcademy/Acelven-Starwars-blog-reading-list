import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/home.css";

export const DetailsSpecies = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const description = "Morbi mollis rhoncus nisi, et accumsan metus. Etiam pretium nunc at lorem congue lobortis. Vestibulum ultricies facilisis eros, ut aliquet augue consectetur ac. Phasellus pharetra, nisl in posuere dictum, purus nunc molestie metus, quis condimentum dui velit vitae nibh. Integer ut suscipit turpis. Maecenas elit dui, aliquet ut lacus quis, dictum suscipit felis. Nulla facilisi. Nulla vel libero in eros porta porttitor. Vestibulum eu ultrices est."

    useEffect(() => {
        actions.loadDetails(params.theid)
    }, [])

    return (

        <div className="cards">
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/species/${params.theid}.jpg`} />
                <Card.Body>
                    <Card.Title>{store.species.name}</Card.Title>
                    <Card.Text>
                        Arcu odio ut sem nulla pharetra. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dictum varius duis at consectetur. Ut etiam sit amet nisl. Commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt praesent semper feugiat nibh sed. Elit at imperdiet dui accumsan sit amet nulla. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>Classification:</b> {store.speciesSingle.classification}</ListGroup.Item>
                    <ListGroup.Item><b>Designation:</b> {store.speciesSingle.designation}</ListGroup.Item>
                    <ListGroup.Item><b>Average Height:</b> {store.speciesSingle.average_height} cms</ListGroup.Item>
                    <ListGroup.Item><b>Average Lifespan:</b> {store.speciesSingle.average_lifespan}years</ListGroup.Item>
                </ListGroup>
                <Card.Body>

                </Card.Body>
            </Card>
        </div>

    );
};

