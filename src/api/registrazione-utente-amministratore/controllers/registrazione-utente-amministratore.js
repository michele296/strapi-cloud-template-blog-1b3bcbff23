'use strict';

module.exports = {
  async registra(ctx) {
    const {
      partitaIva,
      nome,
      cognome,
      email,
      password,
      dataDiNascita,
      citta,
      provincia,
      nazione
    } = ctx.request.body;

    // Validazione minima
    if (!partitaIva || !nome || !cognome || !email || !password) {
      return ctx.badRequest('Campi obbligatori mancanti');
    }

    try {
      // 1. Trova l'azienda con la partita IVA
      const azienda = await strapi.db.query('api::azienda.azienda').findOne({
        where: { PartitaIva: partitaIva },
      });

      if (!azienda) {
        return ctx.notFound('Nessuna azienda trovata con la partita IVA fornita');
      }

      // 2. Verifica se email già registrata
      const esiste = await strapi.db.query('api::utente-aziendale.utente-aziendale').findOne({
        where: { Email: email },
      });

      if (esiste) {
        return ctx.conflict('Email già registrata');
      }

      // 3. Crea l’utente amministratore aziendale
      const nuovoUtente = await strapi.db.query('api::utente-aziendale.utente-aziendale').create({
        data: {
          Nome: nome,
          Cognome: cognome,
          Citta: citta,
          Provincia: provincia,
          Nazione: nazione,
          Email: email,
          Password: password,
          DataDiNascita: dataDiNascita,
          Ruolo: 'AMMINISTRATORE',
          IdAzienda: azienda.id,
          publishedAt: new Date(),
        },
      });

      return ctx.created({ utente: nuovoUtente });

    } catch (err) {
      console.error('Errore registrazione amministratore:', err);
      return ctx.internalServerError('Errore durante la registrazione');
    }
  },
};