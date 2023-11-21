import { Plugin } from '@nuxt/types';
import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement depuis le fichier .env

const connection: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const mysqlPlugin: Plugin = async ({ app }, inject) => {
  try {
    const conn = await connection.getConnection();
    console.log('Connecté à la base de données MySQL.');
    inject('mysql', conn);
  } catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
  }
};

export default mysqlPlugin;
