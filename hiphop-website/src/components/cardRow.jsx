// CardRow.jsx
import React from 'react';
import './cardRow.css';
import MainCard from './mainCard';
import MainCardsData from '../assets/cardData';

const CardRow = () => {
  const cardsData = MainCardsData();

  return (
    <div className="card-row">
      {cardsData.map((card, index) => (
        <MainCard key={index} props={card} />
      ))}
    </div>
  );
};

export default CardRow;
