import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistraAzienda from './pages/registrazioneAzienda.js';
import LoginAzienda from './pages/LoginAzienda.js';
import LoginCandidato from './pages/LoginCandidato.js';
import RegistraCandidato from './pages/RegistraCandidato.js';
import Homepage from './pages/Homepage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registra-azienda" element={<RegistraAzienda />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/login-azienda" element={<LoginAzienda />} />
        <Route path="/login-candidato" element={<LoginCandidato />} />
        <Route path="/registra-candidato" element={<RegistraCandidato />} />
        <Route path="/" element={<div><h1>Homepage</h1><p>Vai su /registra-azienda</p></div>} />
      </Routes>
    </Router>
  );
}

export default App;
