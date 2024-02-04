import React from 'react';
import './mainCard.css';

const MainCard = (props) => {
    return (
        <div className="main-card">
            <img src={props.img} alt={props.title} />
            <div className="main-card-body">
                <p>{props.date}</p>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default MainCard;