import React from 'react';
import Title from './global/title';
import { Link } from 'react-router-dom';
import MusicData from '../data/musicData';

import album05 from '../assets/albumCovers/album01.png';
import album02 from '../assets/albumCovers/album02.png';
import album03 from '../assets/albumCovers/album03.png';
import album04 from '../assets/albumCovers/album04.png';
import album01 from '../assets/albumCovers/album05.png';
import './musicContainer.css';


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

    const songs = MusicData();

    return (
        <>

            <Title text={'Albums'} />
            <div className="album-container">
                {albums.map((album, index) => (
                    <div className="album" key={index}>
                        <Link to={album.src} target='_blank'>
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
                {songs.map((song, index) => (
                    <div className="music-card" key={index}>
                        <img src={song.img} alt={song.title} />
                        <div className="music-card-text">
                            <h2>{song.title}</h2>
                            <div className="music-card-info">
                                <span>Ano: {song.year}</span>
                                <span>Album: {song.album}</span>

                            </div>
                            <Link to={song.src} target='_blank'>
                                <span>Confira Já</span>
                                <span className="fa-brands fa-youtube"></span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>

    );
}

export default MusicContainer;