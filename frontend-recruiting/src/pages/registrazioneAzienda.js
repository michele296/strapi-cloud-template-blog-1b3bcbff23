import React, { useState } from 'react';
import { registraAzienda as registraAziendaApi } from '../services/api.js';

const RegistraAzienda = () => {
  const [formData, setFormData] = useState({
    nomeAzienda: '',
    partitaIva: '',
    citta: '',
    provincia: '',
    nazione: '',
    nome: '',
    cognome: '',
    email: '',
    password: '',
    dataDiNascita: '',
    ruolo: 'REFERENTE', // default
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registraAziendaApi(formData); 
      alert('Azienda registrata con successo!');
    } catch (error) {
      console.error(error);
      alert('Errore nella registrazione');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registrazione Azienda</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome Azienda</label>
          <input type="text" name="nomeAzienda" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Partita IVA</label>
          <input type="text" name="partitaIva" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Città</label>
          <input type="text" name="citta" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Provincia</label>
          <input type="text" name="provincia" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Nazione</label>
          <input type="text" name="nazione" className="form-control" onChange={handleChange} required />
        </div>

        <h4>Dati Referente Aziendale</h4>

        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" name="nome" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Cognome</label>
          <input type="text" name="cognome" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Data di Nascita</label>
          <input type="date" name="dataDiNascita" className="form-control" onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Registra</button>
      </form>
    </div>
  );
};

export default RegistraAzienda;
