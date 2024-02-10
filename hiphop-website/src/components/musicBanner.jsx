import React from 'react';
import img from '../assets/cardImages/img03.jpg'
import './musicBanner.css';

const MusicBanner = () => {
    return (
        <div className="music-banner">
            <div className="mb-text">
                <h2>A carreira completa de DKJ RAP</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iste in eum ipsum iusto modi sunt tenetur error vitae accusantium officiis consectetur aliquid cupiditate minus cumque! Aliquid optio obcaecati voluptate.</p>
            </div>
            <div className="mb-img">
                <img src={img} alt="dkj rap" />
            </div>
        </div>
    );
}

export default MusicBanner;