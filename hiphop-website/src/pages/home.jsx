import React from 'react';
import Header from '../components/header';
import { Carousel } from '../components/carousel';
import Navigation from '../components/navigation';
import CardRow from '../components/cardRow';

const Home = () => {
    return (
        <div className="center">

        <div className="body-page">
            <Navigation />
            <div className='page'>
                <Header />
                <Carousel />
                <CardRow />
            </div>
        </div>
        
        </div>
    );
}

export default Home;