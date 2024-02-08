import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "./carousel.css";

import image1 from "../assets/banners/banner01.png";
import image2 from '../assets/banners/banner02.png';
import image3 from '../assets/banners/banner03.png';

import {Link} from 'react-router-dom';

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
        src: '',
        target: '_blank'

    },
    // {
    //     title: "Let's Go",
    //     subtitle: "Smash the button below",
    //     image: image1,
    //     src: '',
    //     target: '_blank'
    
    // },
    // {
    //     title: "Let's Go",
    //     subtitle: "Smash the button below",
    //     image: image1,
    //     src: '',
    //     target: '_blank'

    // },
];

const handleMouseEnter = (element) => {
    element.classList.add('hover');
}

const handleMouseLeave = (element) => {
    element.classList.remove('hover');
}

export const Carousel = () => (
    <ReactCarousel
        className="react-carousel"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        // autoPlay={true}
        // infiniteLoop={true}
    >

        {slides.map((slide, index) => (
            <Link to={slide.src} target={slide.target}>
            <div 
            key={slide.title} 
            className="react-carousel-slide" 
            onMouseEnter={() => handleMouseEnter(document.querySelectorAll('.image-wrapper')[index])}
            onMouseLeave={() => handleMouseLeave(document.querySelectorAll('.image-wrapper')[index])}>
                <div className="image-wrapper">
                    <img src={slide.image} />
                </div>
                <div className="text">
                    <h2>{slide.title}</h2>
                    <h3>{slide.subtitle}</h3>
                </div>
            </div>
            </Link>
        ))}
    </ReactCarousel>
);
