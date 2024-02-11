import React from 'react';
import Title from './global/title';
import './musicContainer.css';
import { Link } from 'react-router-dom';
import album01 from '../assets/cardImages/album01.png';
import album02 from '../assets/cardImages/album02.png';
import album03 from '../assets/cardImages/album03.png';
import album04 from '../assets/cardImages/album04.png';
import album05 from '../assets/cardImages/album05.png';

const MusicContainer = () => {

    const albums = [
        {
            img: album05,
            title: 'Sobrevivente',
            src: 'https://www.youtube.com/watch?v=iwE_rMhACAM',
        },
        {
            img: album02,
            title: 'Cheguei a Conclusão',
            src: 'https://youtube.com/watch?v=kbppxEjS5ao',
        },
        {
            img: album03,
            title: 'Desistir Jamais',
            src: 'https://youtube.com/watch?v=GiJr-a0pmlA',
        },
        {
            img: album01,
            title: 'Liga todo Mundo',
            src: 'https://youtube.com/watch?v=e5P9qX-YOGc',
        },
        {
            img: album04,
            title: 'Nois é Disciplina Part Chrigor',
            src: 'https://youtube.com/watch?v=v_cPc3DjBag',
        },
    ]

    return (
        <>

            <Title text={'Albums'} />
            <div className="album-container">
                {albums.map((album, index) => (
                    <div className="album" key={index}>
                        <Link to={album.src}>
                            <img src={album.img} alt={album.title} />
                            <div className="album-text">
                                <h2>{album.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <Title text={'Músicas'} />
            <div className="music-container">

            </div>

        </>

    );
}

export default MusicContainer;