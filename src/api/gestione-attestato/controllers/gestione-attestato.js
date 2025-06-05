/*/controllers/gestione-attestato.js*/
'use strict';

module.exports = {
  async aggiungi(ctx) {
    const { idUtente, livello, attestato_id } = ctx.request.body;

    if (!idUtente || !livello || !attestato_id) {
      return ctx.badRequest('Dati mancanti');
    }

    try {
      const nuova = await strapi.entityService.create('api::possiede.possiede', {
        data: {
          livello,
          attestato: attestato_id,
          utente_candidato: idUtente,
        },
      });

      return ctx.send({ messaggio: 'Attestato aggiunto', entry: nuova });
    } catch (err) {
      return ctx.internalServerError('Errore aggiunta attestato');
    }
  },

  async modifica(ctx) {
    const { id } = ctx.params;
    const { livello, attestato_id } = ctx.request.body;

    try {
      const mod = await strapi.entityService.update('api::possiede.possiede', id, {
        data: { livello, attestato: attestato_id },
      });

      return ctx.send({ messaggio: 'Attestato modificato', entry: mod });
    } catch (err) {
      return ctx.internalServerError('Errore modifica attestato');
    }
  },

  async rimuovi(ctx) {
    const { id } = ctx.params;

    try {
      await strapi.entityService.delete('api::possiede.possiede', id);
      return ctx.send({ messaggio: 'Attestato rimosso' });
    } catch (err) {
      return ctx.internalServerError('Errore rimozione attestato');
    }
  }
};
