import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

// const connection = await mysql.createConnection({
//   host: process.env.DB_HOST || 'localhost',
//   port: Number(process.env.DB_PORT) || 3306,
//   user: process.env.DB_USER || 'user',
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_URL,
// })

export const db = drizzle({ connection: { uri: process.env.DB_URL } });

export const getDB = () => {
  if (!db) throw new Error('Database not connected');
  return db;
};
