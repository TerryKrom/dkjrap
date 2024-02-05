import React from 'react';
import './mainCard.css';

const MainCard = ({props}) => {

    const dateFixer = (date) => {
        let arrDate = date.split("-");
        return arrDate.join(' ')
    }

    return (
        <div className="main-card">
            <img src={props.img} alt={props.title} />
            <div className="main-card-body">
                <p className='card-date'>{dateFixer(props.date)}</p>
                <h2 className='card-title'>{props.title}</h2>
                <p className='card-text'>{props.text}</p>
                <a href={props.src}>Confira já!</a>
            </div>
        </div>
    );
}

export default MainCard;