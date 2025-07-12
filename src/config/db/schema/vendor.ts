import { sql } from 'drizzle-orm';
import {
  mysqlTable,
  serial,
  varchar,
  timestamp,
  int,
} from 'drizzle-orm/mysql-core';
import { users } from './user';

export const vendors = mysqlTable('vendors', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', '255').notNull(),
  username: varchar('address', '255').notNull(),
  userId: int('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow().defaultNow(),
});

