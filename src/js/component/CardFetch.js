import React, { useState, useEffect } from 'react';
import CardComponent from './CardComp';

const CardFetch = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {card.map(card => (
          <div className="col-md-4" key={card.id}>
            <CardComponent title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFetch;