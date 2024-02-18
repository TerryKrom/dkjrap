import React, { useEffect, useState } from 'react';
import './eventCard.css';
import { Link } from 'react-router-dom';

const EventCard = ({ card, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (card.src) {
            setIsVisible(true)
        }
    }, [card])
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
                {isVisible
                    ?
                    <Link to={card.src} className='event-card-link'>Assistir</Link>
                    :
                    ''}
            </div>
        </div>
    );
}

export default EventCard;