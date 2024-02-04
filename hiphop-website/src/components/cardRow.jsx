import React from 'react';
import './cardRow.css';
import MainCard from './mainCard';
import img from '../assets/banners/img01.jpg';

const CardRow = () => {
    return (
        <div className="card-row">
            <MainCard
                img={img}
                title={'Confira os melhores shows de DKJ RAP'}
                text={'testendo o texto'} />
            <MainCard
                img={img}
                title={'Confira os melhores shows de DKJ RAP'}
                text={'testendo o texto'} />
            <MainCard
                img={img}
                title={'Confira os melhores shows de DKJ RAP'}
                text={'testendo o texto'} />
            <MainCard
                img={img}
                title={'Confira os melhores shows de DKJ RAP'}
                text={'testendo o texto'} />
        </div>
    );
}

export default CardRow;