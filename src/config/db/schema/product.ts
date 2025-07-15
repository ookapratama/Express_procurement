import { sql } from 'drizzle-orm';
import {
  mysqlTable,
  serial,
  varchar,
  timestamp,
  int,
} from 'drizzle-orm/mysql-core';
import { vendors } from './vendor';


export const products = mysqlTable('products', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', '255').notNull(),
  quantity: int('quantity').notNull(),
  vendorId: int('vendor_id').references(() => vendors.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow().defaultNow(),
});
