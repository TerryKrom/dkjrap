import React from 'react';
import './cardRow.css';
import MainCard from './mainCard';
import MainCardsData from '../assets/cardData';

const getDate = (date) => {
  return parseInt(date.split('-')[0])
}

const CardRow = () => {
  const cardsData = MainCardsData().sort((a,b) => getDate(b.date) - getDate(a.date));
  return (
    <div className="card-row">
      {cardsData.map((card, index) => (
        <MainCard key={index} props={card} />
      ))}
    </div>
  );
};

export default CardRow;
