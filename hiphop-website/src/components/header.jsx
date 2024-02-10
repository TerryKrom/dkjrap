import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import SongPlayer from './audioPlayer';
import Modal from './modal';
import SocialLinks from './global/socialLinks';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleBurguer = () => {
        setIsOpen(!isOpen);
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        // Feche o menu se a tela estiver cheia
        if (!isMobile && isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Adicione um listener de redimensionamento quando o componente montar
        window.addEventListener('resize', handleResize);

        // Remova o listener quando o componente desmontar
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, isMobile]);


    return (
        <>
            <header>
                <div className="logo">
                    <h2><Link to='/'>DKJ RAP</Link></h2>
                    <h3>Rap além das Letras</h3>
                </div>
                <div className="separator"></div>
                <SocialLinks/>
                <div
                    className={`burger ${isOpen ? 'm-open' : ' '}`} onClick={handleBurguer}>
                    <div className="burguer-line"></div>
                    <div className="burguer-line"></div>
                    <div className="burguer-line"></div>
                </div>
            </header>
            <div className="subheader">
                <SongPlayer />
                <div className="line"></div>
            </div>
            {isOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> : ''}
        </>
    );
}
export default Header;