import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import banner from '../assets/banners/banner01.png';
import { Carousel } from '../components/carousel';
import MusicContainer from '../components/musicContainer';

const Musicas = () => {

    const slides = [
        {
            title: "A carreira completa de DKJ RAP num só lugar!",
            subtitle: "",
            image: banner,
            src: '',
            target: ''
        },
    ]

    return (
        <div className="center">

            <div className="body-page">
                <Navigation />
                <div className='page'>
                    <Header />
                    <Carousel
                        slides={slides}
                        arrows={false}
                        indicators={false} />
                        <MusicContainer />
                    <Footer />
                </div>
            </div>

        </div>
    );
}

export default Musicas;