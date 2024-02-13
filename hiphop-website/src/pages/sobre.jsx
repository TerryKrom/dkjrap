import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import banner from '../assets/banners/banner05.png';
import { Carousel } from '../components/carousel';
import AboutContainer from '../components/aboutContainer';

const Sobre = () => {

    const slides = [
        {
            title: "A história de DKJ RAP",
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

                <AboutContainer />
                <Footer />
            </div>
        </div>
    );
}

export default Sobre;