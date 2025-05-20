'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/registrazione-utente-amministratore',
      handler: 'registrazione-utente-amministratore.registra',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};