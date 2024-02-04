import React from 'react';
import Header from '../components/header';
import { Carousel } from '../components/carousel';
import Navigation from '../components/navigation';

const Home = () => {
    return (
        <div className="body-page">
            <Navigation />
            <div className='page'>
                <Header />
                <Carousel />
            </div>
        </div>
    );
}

export default Home;