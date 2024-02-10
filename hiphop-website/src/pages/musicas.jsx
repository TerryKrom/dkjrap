import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import MusicBanner from '../components/musicBanner';
import Footer from '../components/footer';

const Musicas = () => {
    return (
        <div className="center">

        <div className="body-page">
            <Navigation />
            <div className='page'>
                <Header />
                <MusicBanner />
                <Footer/>
            </div>
        </div>

        </div>
    );
}

export default Musicas;