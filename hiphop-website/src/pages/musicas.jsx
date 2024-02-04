import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';

const Musicas = () => {
    return (  
        <div className="body-page">
            <Navigation />
            <div className='page'>
                <Header />
            </div>
        </div>
    );
}
 
export default Musicas;