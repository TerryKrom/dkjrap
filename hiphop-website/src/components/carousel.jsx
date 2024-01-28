import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel as ReactCarousel } from "react-responsive-carousel";

import "./carousel.css";
import image1 from "../assets/banner01.png";
import image2 from "../assets/banner02.png";
// import image3 from "../assets/banner03.png";

const slides = [
    {
        title: "Confira já o novo lançamento!",
        subtitle: "Ver Mais",
        image: image1,
    },
    {
        title: "Confira já o novo lançamento",
        subtitle: "Ver Mais",
        image: image2,
    },
    {
        title: "Let's Go",
        subtitle: "Smash the button below",
        image: image1,
    },
    {
        title: "Let's Go",
        subtitle: "Smash the button below",
        image: image1,
    },
    {
        title: "Let's Go",
        subtitle: "Smash the button below",
        image: image1,
    },
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
    >
        {slides.map((slide, index) => (
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
        ))}
    </ReactCarousel>
);
