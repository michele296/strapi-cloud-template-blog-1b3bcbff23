# 📦 Progetto Recruiting – Backend + Frontend (Strapi + React)

## 📚 Descrizione

Questo progetto rappresenta una piattaforma di recruiting composta da:

- ✅ Backend realizzato con [Strapi](https://strapi.io/)
- ✅ Frontend sviluppato con [React](https://react.dev/) + [Bootstrap](https://getbootstrap.com/)

L’applicazione, al momento, consente la registrazione e la gestione di aziende, utenti aziendali (referenti, amministratori) e candidati.
Sono state implementate tutte le funzionalità principali, inclusi i flussi di login e la persistenza dei dati su database MySQL.

Link alla repository GitHub del progetto: https://github.com/michele296/strapi-cloud-template-blog-1b3bcbff23

Gruppo diMicco-Dibiase : Michele Pio Dibiase, Samantha Falcicchio, Gianluca di Micco
---

## ✅ Funzionalità implementate

| Funzionalità                                      | Stato        |
|--------------------------------------------------|--------------|
| Registrazione azienda con referente              | ✅ Completata |
| Registrazione utente amministratore aziendale    | ✅ Completata |
| Registrazione utente candidato                   | ✅ Completata |
| Login utente aziendale (referente / admin)       | ✅ Completato |
| Login candidato                                   | ✅ Completato |
| Validazioni (email univoca, partita IVA esistente)| ✅ Completate |
| Struttura dati e database completo               | ✅ Completato |
| Frontend con React + Bootstrap                  | ✅ Implementato |

---

## 🛠️ Tecnologie utilizzate

- Node.js – ambiente di esecuzione JavaScript
- Strapi – CMS headless per API backend
- MySQL – database relazionale
- React – libreria per il frontend
- Bootstrap – framework CSS
- Postman – test delle API
- Visual Studio Code – ambiente di sviluppo

---

## 📁 Struttura del progetto
/strapi-cloud-template-blog-1b3bcbff23 → Backend (Strapi)
/frontend-recruiting → Frontend (React + Bootstrap)


---

## ⚙️ Installazione Backend

### 1.Clona il repository backend
git clone https://github.com/michele296/strapi-cloud-template-blog-1b3bcbff23.git
cd strapi-cloud-template-blog-1b3bcbff23

## 2.Installa dipendenze
npm install

## 3. Crea un file .env
Crea il file .env con questo template nella root :

APP_KEYS=mySuperKey1,mySuperKey2
JWT_SECRET=6ngpA5Gptcbim/c3J1oy1g==
API_TOKEN_SALT=9OHTbJ4j1yYX8f0P6Xm+VA==
ADMIN_JWT_SECRET=49266f82955bf5b35a20dc17b49759dc9d4b8421b81eec20cc0d08bac13d207a

DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=recruiting_project
DATABASE_USERNAME=vostrousername
DATABASE_PASSWORD=vostrapassword

## 4. Avvia il backend in modalità sviluppo
npm run develop
Accedi al pannello CMS su:
http://localhost:1337/admin

## 🖥️ Installazione Frontend
## 1. Spostati nella cartella frontend o clonala se separata
cd ../frontend-recruiting
## 2. Installa le dipendenze
npm install
## 3. Avvia l'applicazione
npm start
Il frontend sarà accessibile su:
http://localhost:3000/Homepage