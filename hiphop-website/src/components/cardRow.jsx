import React from 'react';
import './cardRow.css';
import MainCard from './mainCard';
import MainCardsData from '../assets/cardData';

const getDate = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // O mês é baseado em zero no construtor Date
};

const CardRow = () => {
  const cardsData = MainCardsData().sort((a, b) => getDate(b.date) - getDate(a.date));

  return (
    <>
      <div className="title-container">
        <div className="vertical-line"></div>
        <h2 className='title'>Noticias</h2>
      </div>
    <div className="card-row">
      
      {cardsData.map((card, index) => (
        <MainCard key={index} props={card} index={index} />
      ))}
      
    </div>
    </>
    
  );
};

export default CardRow;
