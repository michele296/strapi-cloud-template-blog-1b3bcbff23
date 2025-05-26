import axios from 'axios';

const API_URL = 'http://localhost:1337/api'; // Cambia se Strapi è hostato altrove

export const registraAzienda = async (data) => {
  return axios.post(`${API_URL}/registrazione-azienda`, data);
};

export const registraAmministratoreAziendale = async (data) => {
  return axios.post(`${API_URL}/registrazione-utente-amministratore`, data);
};

export const registraCandidato = async (data) => {
  return axios.post(`${API_URL}/registrazione-utente-candidato`, data);
};

