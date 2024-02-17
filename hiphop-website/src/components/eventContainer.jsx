import React from 'react';
import Title from './global/title';
import './eventContainer.css';
import EventCardData from '../data/eventCardData';
import EventCard from './eventCard';

const EventContainer = () => {
    
    let events = EventCardData();

    return (
        <>
            <Title text={'Shows'} />
            <div className="event-container">
                {events.map((card, index) => (
                    <EventCard card={card} index={index}/>
                ))}
            </div>
        </>
    );
}

export default EventContainer;