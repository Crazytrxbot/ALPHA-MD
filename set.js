const fs = require('fs-extra');
//const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61Vy46jRhT9lai2tsa8H5ZaCm9ogx9tY0xHWWAooGwMdBW2G496lVWkJKssMpFG8yP5qP6ECLc709JMOh1p2ABFce85t8659z0oK0TgCLZg+B7UGB2iBnaPTVtDMATqPk0hBn2QRE0EhgBOCB7TeXkYpOEu3KFNflxZC5XbCjkWk7klDIwbAjfGdpddgYc+qPfrAsWvBLzx3aq2/MlsNdJH2EK9nSMPJqeZp46yo7PKA466ud5UTjQ/XoGHLmKEMCozo87hDuKoGMF2GiH8NviOx/JrO5PH64S9W91TbnFXb+5ujq3TKgPb9QKfzxES6Mp03gafsiNry1znp7p3pMY1OSWLlaYNJtXEGCeYWtKB7aXWOkMqeYJPUFbCxElg2aCmfXPd9wpxe4KdeXphcYabCD3vRuAl2dgnFZ0JLu+ryZJK8LR8I/ARSsj9zCCECurYNEICi4RRR9WUCtxc9HyTHyzIxHAE9vgS+BQ/a2X7f+o+M4MRO4/sky9z3kBeK5RLm8mmDlIcLMR7dSJZoSmI8tg23ga/LG13PBlDH9vQQ5SaN7cH7yZmMnm1H7P+NgxGtsrZ5lSlPsOPmj1+DWWUx0cMdTFj9bujTOyZ3dt6hqK2SNsoNqGVIrfm1sY+JLemt1VlerNYzO5MXky33PUx9UfuIWtY1Lo6C2npVmQN1VeUqzOjLWydBAzphz7AMEOkwVGDqrJbk7g+iJLDHMYYNufqgtxxC23lrrO79dHSZd0KonU824v8abw1d6u5r4Su72sBN6WuQB/UuIohITCxEWkq3HqQkCiDBAx/OB9UxxnDXdXAa5SAIZBpmRN5kZF5QfievDvmUUOiun5Xwgb0QYqrnQfBsMF72AfnH3hZNwVZUAVDkzXFUDid4niBYSieYniRoTuGu6ekC7SDpIl2NRjSIieKDMsJwkP/G+HQKU1lJM00BU7QJY6RZUOgeZXSWUngdfZ1HCL/rXAogsoLuihwpiGzLCtpOi1ppmgonCRQimm+jkP6ZvXgGM3kFV0XaYlRRNPQTENSVY7WWVE36f86F1l++LEPSnjfPNm6E6NA90GKMGn8cl8XVZQ8e/75YxTH1b5s5m0Za90DxGD4Yhk2DSoz0jHblxGOc3SAWscDDNOoIPAf/UMMk2cul56uVUlny2AZzpe3txbosHeBvqjNkBW/LE9x3sbKDCVJlCBKNEXx3cZuvQ/KqIsFHj9++O3x4x9/PX788Pvl/vN3j59++fPx068/ddW68OjSJrCJUEHAEGjjOUSioRnu+pp4hmUpRqZomQI+835uL0/+hdejbOpdH6blaBaKayKEyyhCO2apkHCpi3Ue0yGZpNPk6Fx9JQgYgsGstgJTSFX+2JvEA2m293qnfU4pC5ktWsFcpnjJzvYe5ZTxeLCahVvjoOkThQvK9H7KsnF7P6jW9OZ+tgss22B9y8NadtVlS+ABxfBlsoPNzsPjEt6PwkPszIqV4etzY9lobO4fGCld0W50Gyb58vaW0hi/nrc9rRzI2XVPCqikndL6uGiSPZSX5qHH+JFvT1zt+NT4zo23uAw8dOlJ6PyaInieH5ez+c8TfgLeCZF66L+IcZlI/9LV1RWaV/pJW5/4dmtNGHGyM4NdVTfFzLXMWU8IV+PA1csTG2vgoXNEXURNWuFdNxLKBFdnAeFq3ynbKdPqlWSa6jjapeUXEWmUz275igF56WnXFFe1HZG8028aHrVRJ/1Wqet5EzXP5gNKd5nOHDz8De0/2ZO2CQAA',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254748387615",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "yes",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "🤍, 🧡, 🩵, 🩷, 💛, 💜, 🖤, 💗",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
