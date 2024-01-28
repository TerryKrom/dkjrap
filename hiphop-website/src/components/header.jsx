import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <h2><Link to='/'>DKJota</Link></h2>
                </div>
                <nav className="nav-links">
                    <Link to='/'><span></span>Home <span></span></Link>
                    <Link to='/musicas'>Musicas</Link>
                    <Link to='/shows'>Shows</Link>
                    <Link to='/sobre'>Sobre</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;