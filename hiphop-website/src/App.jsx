import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Shows from './pages/shows';
import Musicas from './pages/musicas';
import Sobre from './pages/sobre';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shows" exact element={<Shows />} />
          <Route path="/musicas" exact element={<Musicas />} />
          <Route path="/sobre" exact element={<Sobre />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
