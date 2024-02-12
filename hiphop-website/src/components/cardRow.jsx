import React from 'react';
import MainCard from './mainCard';
import MainCardsData from '../data/cardData';
import Title from './global/title';
import './cardRow.css';

const getDate = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // O mês é baseado em zero no construtor Date
};

const CardRow = () => {
  const cardsData = MainCardsData().sort((a, b) => getDate(b.date) - getDate(a.date));

  return (
    <>
    <Title text={"Notícias"}/>
    
    <div className="card-row">
      
      {cardsData.map((card, index) => (
        <MainCard key={index} props={card}/>
      ))}
      
    </div>
    </>
    
  );
};

export default CardRow;
