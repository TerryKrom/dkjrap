import React from 'react';
import './modal.css';
import { Link, useLocation } from 'react-router-dom';
import SocialLinks from './global/socialLinks';

const Modal = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div className={`modal ${isOpen ? 'open' : 'close'}`}>
      <div className="modal-content">
        <div className="modal-logo">
          <h2><Link to='/'>DKJ RAP</Link></h2>
          <h3>Rap Além das Letras</h3>
        </div>
        <div className="modal-links">
          <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
            <span className="fa fa-home"></span>
            <span>Home</span>
          </Link>
          <Link to='/musicas' className={location.pathname === '/musicas' ? 'active' : ''}>
            <span className="fa fa-music"></span>
            <span>Musicas</span>
          </Link>
          <Link to='/shows' className={location.pathname === '/shows' ? 'active' : ''}>
            <span className="fa fa-calendar-days"></span>
            <span>Shows</span>
          </Link>
          <Link to='/sobre' className={location.pathname === '/sobre' ? 'active' : ''}>
            <span className="fa fa-user"></span>
            <span>Sobre</span>
          </Link>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Modal;
