import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { Carousel } from '../components/carousel';
import banner from '../assets/banners/banner01.png';
import EventContainer from '../components/eventContainer';

const Shows = () => {
    const slides = [
        {
            title: "Shows e Eventos",
            subtitle: "",
            image: banner,
            src: '',
            target: ''
        },
    ]
    return (
        <div className="body-page">
            <Navigation />
            <div className='page'>
                <Header />
                <Carousel
                    slides={slides}
                    arrows={false}
                    indicators={false}
                />
                <EventContainer />
                <Footer />

            </div>
        </div>
    );
}

export default Shows;