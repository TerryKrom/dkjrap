import React from 'react';
import Title from './global/title';
import './musicContainer.css';
import { Link } from 'react-router-dom';

import album01 from '../assets/albumCovers/album01.png';
import album02 from '../assets/albumCovers/album02.png';
import album03 from '../assets/albumCovers/album03.png';
import album04 from '../assets/albumCovers/album04.png';
import album05 from '../assets/albumCovers/album05.png';

import img01 from '../assets/trackCovers/track01.png';
import img02 from '../assets/trackCovers/track02.png';
import img03 from '../assets/trackCovers/track03.png';
import img04 from '../assets/trackCovers/track04.png';
import img05 from '../assets/trackCovers/track05.png';

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

    const songs = [
        {
            title: 'Desacredita Não',
            desc: 'lorem ipsum dolor si amet',
            img: img01,
            lyricSrc: '',
            src: '',
        },
        {
            title: 'Questão de Tempo',
            desc: 'lorem ipsum dolor si amet',
            img: img02,
            lyricSrc: '',
            src: '',
        },
        {
            title: 'Nada Anda Bem',
            desc: 'lorem ipsum dolor si amet',
            img: img03,
            lyricSrc: '',
            src: '',
        },
        {
            title: 'Sensor Contra Zoião',
            desc: 'lorem ipsum dolor si amet',
            img: img04,
            lyricSrc: '',
            src: '',
        },
        {
            title: 'O Veneno da Serpente',
            desc: 'lorem ipsum dolor si amet',
            img: img05,
            lyricSrc: '',
            src: '',
        },
        
        {
            title: 'O Veneno da Serpente',
            desc: 'lorem ipsum dolor si amet',
            img: img01,
            lyricSrc: '',
            src: '',
        },
        {
            title: 'O Veneno da Serpente',
            desc: 'lorem ipsum dolor si amet',
            img: img01,
            lyricSrc: '',
            src: '',
        },
        {
            title: 'O Veneno da Serpente',
            desc: 'lorem ipsum dolor si amet',
            img: img01,
            lyricSrc: '',
            src: '',
        },
    ]

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
                                <h3>{song.desc}</h3>
                                <Link to={song.lyricSrc} target='_blank'>Letra da Música</Link>
                            </div>
                        </div>
                    ))}
            </div>

        </>

    );
}

export default MusicContainer;