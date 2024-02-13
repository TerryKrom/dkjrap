import React from 'react';
import Header from '../components/header';
import { Carousel } from '../components/carousel';
import Navigation from '../components/navigation';
import CardRow from '../components/cardRow';
import Footer from '../components/footer';


import image1 from "../assets/banners/banner01.png";
import image2 from '../assets/banners/banner02.png';
import image3 from '../assets/banners/banner03.png';
import image4 from '../assets/banners/banner05.png';

const Home = () => {

    const slides = [
        {
            title: "Os melhores shows de DKJ RAP",
            subtitle: "Ver Mais",
            image: image1,
            src: '/shows',
            target: ''
        },
        {
            title: "DKJ RAP: O veneno da serpente no Youtube!",
            subtitle: "Confira Já",
            image: image2,
            src: 'https://www.youtube.com/watch?v=6GJUPvXF9A0',
            target: '_blank'
    
        },
        {
            title: "Siga DKJ RAP no spotify!",
            subtitle: "Confira já",
            image: image3,
            src: 'https://open.spotify.com/intl-pt/artist/3mek6ZbenYdDKuM2dRwcaI',
            target: '_blank'    
        },
        {
            title: "A história completa de DKJ RAP",
            subtitle: "Ver Mais",
            image: image4,
            src: '/sobre',
            target: ''
        },
    ];
    
    return (
        <div className="center">

        <div className="body-page">
            <Navigation />
            <div className='page'>
                <Header />
                <Carousel slides={slides} arrows={true}/>
                <CardRow />
                <Footer/>
            </div>
        </div>
        
        </div>
    );
}

export default Home;