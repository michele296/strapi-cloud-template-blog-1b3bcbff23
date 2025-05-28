// services/api.js
const API_BASE_URL = 'http://localhost:1337/api';

// Registrazione Azienda
export const registraAzienda = async (datiAzienda) => {
  try {
    const response = await fetch(`${API_BASE_URL}/registra-azienda/registra`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datiAzienda),
    });

    if (!response.ok) {
      // Controlla se la risposta è JSON prima di cercare di parsarla
      const contentType = response.headers.get('content-type');
      let errorMessage = `Errore HTTP: ${response.status} ${response.statusText}`;
      
      if (contentType && contentType.includes('application/json')) {
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          // Se il parsing JSON fallisce, usa il messaggio di default
        }
      }
      
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Errore nella registrazione azienda:', error);
    throw error;
  }
};

// Login Utente Aziendale
export const loginUtenteAziendale = async (credenziali) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login-utente-aziendale/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenziali),
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      let errorMessage = `Errore HTTP: ${response.status} ${response.statusText}`;
      
      if (contentType && contentType.includes('application/json')) {
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          // Se il parsing JSON fallisce, usa il messaggio di default
        }
      }
      
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Errore nel login aziendale:', error);
    throw error;
  }
};

// Registrazione Candidato
export const registraCandidato = async (datiCandidato) => {
  try {
    const response = await fetch(`${API_BASE_URL}/registrazione-utente-candidato/registra`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datiCandidato),
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      let errorMessage = `Errore HTTP: ${response.status} ${response.statusText}`;
      
      if (contentType && contentType.includes('application/json')) {
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          // Se il parsing JSON fallisce, usa il messaggio di default
        }
      }
      
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Errore nella registrazione candidato:', error);
    throw error;
  }
};

// Login Utente Candidato
export const loginUtenteCandidato = async (credenziali) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login-utente-candidato/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenziali),
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      let errorMessage = `Errore HTTP: ${response.status} ${response.statusText}`;
      
      if (contentType && contentType.includes('application/json')) {
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          // Se il parsing JSON fallisce, usa il messaggio di default
        }
      }
      
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Errore nel login candidato:', error);
    throw error;
  }
};