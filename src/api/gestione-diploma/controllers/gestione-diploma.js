/*/controllers/gestione-diploma.js*/
'use strict';

module.exports = {
async aggiungi(ctx) {
  const { idUtente, voto_diploma, indirizzo_id, scuola_id } = ctx.request.body;

  if (!idUtente || !voto_diploma || !indirizzo_id || !scuola_id) {
    return ctx.badRequest('Dati mancanti');
  }

  try {
    // Verifica che la scuola sia associata a quell'indirizzo scolastico
    const indirizzo = await strapi.entityService.findOne('api::indirizzo-scolastico.indirizzo-scolastico', indirizzo_id, {
      populate: ['scuolas'],
    });

    const scuolaValida = indirizzo.scuolas.some(s => s.id === scuola_id);

    if (!scuolaValida) {
      return ctx.badRequest('La scuola non è compatibile con l\'indirizzo scolastico selezionato');
    }

    // Aggiorna utente con voto, indirizzo e scuola_frequentata
    const updated = await strapi.entityService.update('api::utente-candidato.utente-candidato', idUtente, {
      data: {
        voto_diploma: voto_diploma,
        Indirizzo_scolastico: indirizzo_id,
        scuola_frequentata: scuola_id,
      },
    });

    return ctx.send({ messaggio: 'Diploma e scuola salvati', utente: updated });
  } catch (err) {
    console.error(err);
    return ctx.internalServerError('Errore diploma');
  }
},


async modifica(ctx) {
  const { idUtente } = ctx.params;
  const { voto_diploma, indirizzo_id, scuola_ids } = ctx.request.body;

  try {
    const updated = await strapi.entityService.update('api::utente-candidato.utente-candidato', idUtente, {
      data: {
        voto_diploma,
        indirizzo_scolastico: indirizzo_id,
      },
    });

    if (scuola_ids && scuola_ids.length > 0) {
      await strapi.entityService.update('api::indirizzo-scolastico.indirizzo-scolastico', indirizzo_id, {
        data: {
          scuolas: scuola_ids,
        },
      });
    }

    return ctx.send({ messaggio: 'Diploma modificato', utente: updated });
  } catch (err) {
    return ctx.internalServerError('Errore modifica diploma');
  }
}

};
