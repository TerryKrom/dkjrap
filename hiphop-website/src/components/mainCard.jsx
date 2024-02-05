import React from 'react';
import './mainCard.css';

const MainCard = ({props}) => {
    return (
        <div className="main-card">
            <img src={props.img} alt={props.title} />
            <div className="main-card-body">
                <p className='card-date'>{props.date}</p>
                <h2 className='card-title'>{props.title}</h2>
                <p className='card-text'>{props.text}</p>
            </div>
        </div>
    );
}

export default MainCard;