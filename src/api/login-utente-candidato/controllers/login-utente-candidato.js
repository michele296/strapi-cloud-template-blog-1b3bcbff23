//login-utente-candidato.js//
'use strict';

module.exports = {
  async login(ctx) {
    const { email, password } = ctx.request.body;

    if (!email || !password) {
      return ctx.badRequest('Email e password sono obbligatori');
    }

    const utente = await strapi.db.query('api::utente-candidato.utente-candidato').findOne({
      where: { Email: email },
    });

    if (!utente || utente.Password !== password) {
      return ctx.unauthorized('Credenziali non valide');
    }

    return ctx.send({ id: utente.id, nome: utente.Nome, ruolo: 'candidato' });
  },
};
