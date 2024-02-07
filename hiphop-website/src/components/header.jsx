import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import SongPlayer from './audioPlayer';
import Modal from './modal';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurguer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header>
                <div className="logo">
                    <h2><Link to='/'>DKJ RAP</Link></h2>
                    <h3>Rap além das Letras</h3>
                </div>
                <div className="separator"></div>
                <div className="social-links">
                    <Link to="https://youtube.com/@DkjRapNacional" target='_blank'> <span className="fa-brands fa-youtube"></span> </Link>
                    <Link to="https://instagram.com/dkjrap" target='_blank'> <span className="fa-brands fa-instagram" target='_blank'></span> </Link>
                    <Link to="https://twitter.com/dkjrap" target='_blank'> <span className="fa-brands fa-twitter"></span> </Link>
                    <Link to="https://open.spotify.com/intl-pt/artist/3mek6ZbenYdDKuM2dRwcaI" target='_blank'> <span className="fa-brands fa-spotify"></span> </Link>
                    <Link to="https://facebook.com/DKJrap" target='_blank'> <span className="fa-brands fa-facebook"></span> </Link>
                </div>
                <div 
                className={`burger ${isOpen ? 'm-open':' '}`} onClick={handleBurguer}>
                    <div className="burguer-line"></div>
                    <div className="burguer-line"></div>
                    <div className="burguer-line"></div>
                </div>
            </header>
            <div className="subheader">
                <SongPlayer/>
                <div className="line"></div>
            </div>
            {isOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> : ''}
        </>
    );
}
export default Header;