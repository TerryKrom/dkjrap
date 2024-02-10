import React from 'react';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <Link to="https://youtube.com/@DkjRapNacional" target='_blank'> <span className="fa-brands fa-youtube"></span> </Link>
            <Link to="https://instagram.com/dkjrap" target='_blank'> <span className="fa-brands fa-instagram" target='_blank'></span> </Link>
            <Link to="https://twitter.com/dkjrap" target='_blank'> <span className="fa-brands fa-twitter"></span> </Link>
            <Link to="https://open.spotify.com/intl-pt/artist/3mek6ZbenYdDKuM2dRwcaI" target='_blank'> <span className="fa-brands fa-spotify"></span> </Link>
            <Link to="https://facebook.com/DKJrap" target='_blank'> <span className="fa-brands fa-facebook"></span> </Link>
        </div>
    );
}

export default SocialLinks;