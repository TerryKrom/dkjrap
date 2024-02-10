import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const Sobre = () => {
    return (
        <div className="body-page">
            <Navigation />
            <div className='page'>
                <Header />
                <Footer />
            </div>
        </div>
    );
}

export default Sobre;