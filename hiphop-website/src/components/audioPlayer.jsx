import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './audioPlayer.css';

import song1 from '../assets/tracks/rap-alem-das-letras-DKJ.mp3';
import song2 from '../assets/tracks/guarda-o-sorriso-dkj.mp3';

const SongPlayer = () => {
  const [tracks] = useState([
    { src: song1, title: 'Rap Além das Letras - DKJ RAP' },
    { src: song2, title: 'Guarda o Sorriso - DKJ RAP' },
    // Adicione mais músicas conforme necessário
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTrackEnd = () => {
    // Avançar para a próxima faixa quando a atual terminar
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePlayPause = (audio) => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true)
    } else {
      audio.pause();
      setIsPlaying(false)
    }
  };



  const handleNextTrack = (audio) => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    audio.play();
    setIsPlaying(true)
  };

  const handlePreviousTrack = (audio) => {
    if (currentTrackIndex >= 1) {
      setCurrentTrackIndex((prevIndex) => (prevIndex - 1) % tracks.length);
      audio.play();
      setIsPlaying(true);
    }
  };

  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.muted = !isMuted;
    }
  };

  return (
    <div className='audio-player'>
      <AudioPlayer
        src={tracks[currentTrackIndex].src}
        onEnded={handleTrackEnd}
      />
      <button onClick={handleToggleMute}>
        <span className={`fa ${isMuted ? 'fa-volume-high' : 'fa-volume-xmark'}`}></span>
      </button>
      <button onClick={() => handlePreviousTrack(document.querySelector('audio'))} className={`${currentTrackIndex >= 1 ? '' : 'disabled'}`}>
        <span className='fa fa-backward-step'></span>
      </button>
      <button onClick={() => handlePlayPause(document.querySelector('audio'))}>
        <span className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`}></span>
      </button>
      <button onClick={() => handleNextTrack(document.querySelector('audio'))}>
        <span className="fa fa-forward-step"></span>
      </button>
      <p className='song-title'>{tracks[currentTrackIndex].title}</p>
    </div>
  );
};

export default SongPlayer;