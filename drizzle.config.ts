import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  out: './src/config/db/migrations',
  schema: './src/config/db/schema/index.ts',
  dialect: 'mysql',
  dbCredentials: {
    // url: process.env.DB_URL!
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME,
  },
};
