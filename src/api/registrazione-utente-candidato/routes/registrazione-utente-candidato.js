'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/registrazione-utente-candidato',
      handler: 'registrazione-utente-candidato.registra',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};


