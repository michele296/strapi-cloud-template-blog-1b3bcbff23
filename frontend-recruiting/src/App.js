import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistraAzienda from './pages/registrazioneAzienda.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registra-azienda" element={<RegistraAzienda />} />
        <Route path="/" element={<div><h1>Homepage</h1><p>Vai su /registra-azienda</p></div>} />
      </Routes>
    </Router>
  );
}

export default App;
