import React from 'react';
import './navigation.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    return (
        <div className="navigation">
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="nav-links">
                <Link to='/'
                    className={location.pathname === '/' ? 'active' : ''}>
                    <span className="fa fa-house"></span>
                </Link>
                <Link to='/musicas'
                    className={location.pathname === '/musicas' ? 'active' : ''}>
                    <span className="fa fa-music"></span>
                </Link>
                <Link to='/shows'
                    className={location.pathname === '/shows' ? 'active' : ''}>
                    <span className="fa fa-calendar-days"></span>
                </Link>
                <Link to='/sobre'
                    className={location.pathname === '/sobre' ? 'active' : ''}>
                    <span className="fa fa-user"></span>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;