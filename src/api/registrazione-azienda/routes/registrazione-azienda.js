'use strict';
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/registra-azienda/registra', 
      handler: 'registrazione-azienda.registra',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};