# Progetto Recruiting diMicco_Dibiase– Backend Strapi

## 📚 Descrizione

Questo progetto costituisce la parte backend di una piattaforma di recruiting, sviluppata nell’ambito dello Sprint 1 del corso di Ingegnerua del Software.

Link alla repository GitHub del progetto: https://github.com/michele296/strapi-cloud-template-blog-1b3bcbff23
L’applicazione al momento consente:

- La registrazione di aziende nel sistema (Michele Dibiase)
- La registrazione di referenti aziendali (Michele Dibiase)
- La registrazione di aziende nel sistema (Gianuca di Micco)

Il backend è stato realizzato con [Strapi](https://strapi.io/), un headless CMS open source basato su Node.js, per semplificare la gestione di content types, API REST e autenticazione.

---

## ✅ Funzionalità implementate

| Funzione                                       | Stato  |
|------------------------------------------------|--------|
| Registrazione azienda + referente             | ✅ Completata |
| Registrazione amministratore aziendale        | ✅ Completata |

---

## 🛠️ Tecnologie usate

- Node.js (runtime JavaScript)
- Strapi (CMS headless per API REST)
- MySQL (database relazionale)
- VS Code, Postman, Git

---
## 📋 File .env
Se non presente, creare il file .env con questo formato:
APP_KEYS=mySuperKey1,mySuperKey2
JWT_SECRET=6ngpA5Gptcbim/c3J1oy1g==
API_TOKEN_SALT=9OHTbJ4j1yYX8f0P6Xm+VA==
ADMIN_JWT_SECRET=49266f82955bf5b35a20dc17b49759dc9d4b8421b81eec20cc0d08bac13d207a

DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=recruiting_project
DATABASE_USERNAME=VostroUsername
DATABASE_PASSWORD=VostraPassword
