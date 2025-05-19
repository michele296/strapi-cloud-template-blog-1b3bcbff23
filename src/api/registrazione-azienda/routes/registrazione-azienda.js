'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/registrazione-azienda',
      handler: 'registrazione-azienda.registra',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};

