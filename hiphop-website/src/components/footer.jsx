import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import SocialLinks from './global/socialLinks';

const Footer = () => {
    return (
        <>
        <section className="top">
        <div className="links">
          <div className="links-column">
            <h2>Navegue</h2>
            <Link to="/musicas">Musicas</Link>
            <Link to="/shows">Shows</Link>
            <Link to="/sobre">Sobre</Link>
          </div>
          <div className="links-column">
            <h2>Contato</h2>
            <Link to="">(13) 99116 1395</Link>
            <Link to="">dkjrapnacional@gmail.com</Link>
            <Link to="">&nbsp;</Link>
          </div>
          <div className="links-column">
            <h2>Desenvolvedor</h2>
            <Link to="https://github.com/terrykrom" target='_blank'>GitHub</Link>
            <Link to="https://instagram.com/terrykrom" target='_blank'>Instagram</Link>
            <Link to="https://linkedin.com/in/guilherme-lopes-avila/" target='_blank'>Linkedin</Link>
          </div>
          <div className="links-column socials-column">
            <h2>Redes Sociais</h2>
            <p>
              Siga DKJ RAP nas redes sociasi para ficar por dentro das novas musicas, novos posts ou novos videos!
            </p>
            <SocialLinks/>
          </div>
        </div>
      </section>
      <section className="bottom">
        <p className="copyright">© 2024 Todos os Direitos Reservados</p>
        <div className="legal">
          <Link to=""> Contato </Link>
          <Link to=""> Termos </Link>
          <Link to=""> Privacidade </Link>
        </div>
      </section>
    </>
    );
}

export default Footer;