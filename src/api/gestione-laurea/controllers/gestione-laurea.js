'use strict';

module.exports = {
async aggiungi(ctx) {
const { idUtente, voto, laurea_id, universita_id } = ctx.request.body;
if (!idUtente || !voto || !laurea_id || !universita_id) {
  return ctx.badRequest('Dati mancanti');
}

try {
  // Verifica che l’università sia collegata alla laurea
  const laurea = await strapi.entityService.findOne('api::laurea.laurea', laurea_id, {
    populate: ['universitas'],
  });

  const universitaValida = laurea.universitas.some(u => u.id === universita_id);
  if (!universitaValida) {
    return ctx.badRequest('L’università selezionata non è associata alla laurea indicata');
  }

  // Crea ha_titolo_laurea con la relazione università
  const nuova = await strapi.entityService.create('api::ha-titolo-laurea.ha-titolo-laurea', {
    data: {
      voto,
      laurea: laurea_id,
      utente_candidato: idUtente,
      universita_frequentata: universita_id,
    },
  });

  return ctx.send({
    messaggio: 'Laurea salvata con successo',
    entry: nuova,
  });
} catch (err) {
  console.error('Errore in aggiunta laurea:', err);
  return ctx.internalServerError('Errore salvataggio laurea');
}
},

async modifica(ctx) {
const { id } = ctx.params;
const { voto, laurea_id, universita_id } = ctx.request.body;
if (!voto || !laurea_id || !universita_id) {
  return ctx.badRequest('Dati mancanti');
}

try {
  // Verifica che l’università sia ancora valida per la nuova laurea
  const laurea = await strapi.entityService.findOne('api::laurea.laurea', laurea_id, {
    populate: ['universitas'],
  });

  const universitaValida = laurea.universitas.some(u => u.id === universita_id);
  if (!universitaValida) {
    return ctx.badRequest('Università non compatibile con la laurea selezionata');
  }

  // Modifica la riga ha_titolo_laurea
  const mod = await strapi.entityService.update('api::ha-titolo-laurea.ha-titolo-laurea', id, {
    data: {
      voto,
      laurea: laurea_id,
      universita_frequentata: universita_id,
    },
  });

  return ctx.send({
    messaggio: 'Laurea modificata con successo',
    entry: mod,
  });
} catch (err) {
  console.error('Errore in modifica laurea:', err);
  return ctx.internalServerError('Errore modifica laurea');
}
},
async rimuovi(ctx) {
const { id } = ctx.params;
try {
  await strapi.entityService.delete('api::ha-titolo-laurea.ha-titolo-laurea', id);
  return ctx.send({ messaggio: 'Laurea rimossa correttamente' });
} catch (err) {
  console.error('Errore in rimozione laurea:', err);
  return ctx.internalServerError('Errore rimozione laurea');
}
},
};