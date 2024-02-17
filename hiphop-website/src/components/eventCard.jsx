import React from 'react';
import './eventCard.css';

const EventCard = ( {card, index} ) => {
    return (  
        <div className="event-card" key={index}>
            <div className="event-card-img">
                <img src={card.img} alt={card.title} />
            </div>
            <div className="event-card-text">
                <h2>{card.title}</h2>
                <p>Data: {card.date}</p>
                <p>Local: {card.local}</p>
                <p>{card.story}</p>
            </div>
        </div>
    );
}
 
export default EventCard;