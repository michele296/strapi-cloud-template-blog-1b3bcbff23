'use strict';

module.exports = {
  async registra(ctx) {
    const {
      nomeAzienda,
      partitaIva,
      citta,
      provincia,
      nazione,
      nome,
      cognome,
      email,
      password,
      dataDiNascita
    } = ctx.request.body;

    if (!nomeAzienda || !partitaIva || !email || !password || !nome || !cognome) {
      return ctx.badRequest('Campi obbligatori mancanti');
    }

    try {
      const result = await strapi.db.connection.transaction(async (trx) => {

        // 🔁 Verifica Partita IVA duplicata
        const aziendaEsistente = await strapi.db.query('api::azienda.azienda').findOne({
          where: { PartitaIva: partitaIva },
          transacting: trx,
        });

        if (aziendaEsistente) {
          throw new Error('Partita IVA già registrata');
        }

        // 🔁 Verifica email duplicata
        const utenteEsistente = await strapi.db.query('api::utente-aziendale.utente-aziendale').findOne({
          where: { Email: email },
          transacting: trx,
        });

        if (utenteEsistente) {
          throw new Error('Email già registrata');
        }

        // ✅ Crea Azienda
        const azienda = await strapi.db.query('api::azienda.azienda').create({
          data: {
            Nome: nomeAzienda,
            PartitaIva: partitaIva,
            Citta: citta,
            Provincia: provincia,
            Nazione: nazione,
            publishedAt: new Date(),
          },
          transacting: trx,
        });

        // ✅ Crea Referente Aziendale
        const utente = await strapi.db.query('api::utente-aziendale.utente-aziendale').create({
          data: {
            Nome: nome,
            Cognome: cognome,
            DataDiNascita: dataDiNascita,
            Citta: citta,
            Provincia: provincia,
            Nazione: nazione,
            Email: email,
            Password: password,
            IdAzienda: azienda.id,     // ← nome campo relazione
            Ruolo: 'Referente',
            publishedAt: new Date(),
          },
          transacting: trx,
        });

        return { azienda, utente };
      });

      return ctx.created(result);

    } catch (err) {
      console.error('Errore durante la registrazione:', err.message);
      
      if (err.message.includes('Partita IVA già registrata')) {
        return ctx.conflict('Partita IVA già registrata');
      }

      if (err.message.includes('Email già registrata')) {
        return ctx.conflict('Email già registrata');
      }

      return ctx.internalServerError('Errore durante la registrazione');
    }
  },
};
