import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';

import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const handleMouseEnter = (element) => {
    element.classList.add('hover');
}

const handleMouseLeave = (element) => {
    element.classList.remove('hover');
}

export const Carousel = ({ slides, arrows, indicators }) => (
    <ReactCarousel
        className="react-carousel"
        showArrows={arrows}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true}
        showIndicators={indicators}
    >
        {slides.map((slide, index) => (
            <Link key={index} to={slide.src} target={slide.target}>
                <div
                    className="react-carousel-slide"
                    onMouseEnter={() => handleMouseEnter(document.querySelectorAll('.image-wrapper')[index])}
                    onMouseLeave={() => handleMouseLeave(document.querySelectorAll('.image-wrapper')[index])}
                >
                    <div className="image-wrapper">
                        <img src={slide.image} alt={`Slide ${index}`} />
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
