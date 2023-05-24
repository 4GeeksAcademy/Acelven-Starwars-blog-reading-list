import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import "../../styles/home.css";

export const Details = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const description = "Arcu odio ut sem nulla pharetra. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dictum varius duis at consectetur. Ut etiam sit amet nisl. Commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt praesent semper feugiat nibh sed. Elit at imperdiet dui accumsan sit amet nulla. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tempor id eu nisl nunc mi. Nibh tellus molestie nunc non blandit. Amet porttitor eget dolor morbi non arcu risus quis. Sit amet aliquam id diam maecenas ultricies mi eget."

  useEffect(() => {
    actions.loadDetails(params.theid)
  }, [])

  return (
    <div className="cards">
      <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} />
        <Card.Body>
          <Card.Title>{store.person.name}</Card.Title>
          <Card.Text>
            Arcu odio ut sem nulla pharetra. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dictum varius duis at consectetur. Ut etiam sit amet nisl. Commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt praesent semper feugiat nibh sed. Elit at imperdiet dui accumsan sit amet nulla. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><b>Born in:</b> {store.person.birth_year}</ListGroup.Item>
          <ListGroup.Item><b>From:</b> {store.planet.name}</ListGroup.Item>
          <ListGroup.Item><b>Gender:</b> {store.person.gender}</ListGroup.Item>
        </ListGroup>
        <Card.Body>

        </Card.Body>
      </Card>
    </div>

  );
};

