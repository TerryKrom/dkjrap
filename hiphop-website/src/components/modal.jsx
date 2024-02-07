import React from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen }) => {

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2><Link to='/'>DKJ RAP</Link></h2>
        <div className="modal-links">
          <Link to='/'>Home</Link>
          <Link to='/musicas'>Musicas</Link>
          <Link to='/shows'>Shows</Link>
          <Link to='/sobre'>Sobre</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
