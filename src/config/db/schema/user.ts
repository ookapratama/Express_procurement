
import { sql } from "drizzle-orm";
import { mysqlTable, serial, varchar, timestamp, int } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", "255").notNull(),
  username: varchar('username', '255').notNull(),
  password: varchar('password', '255').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow().defaultNow(),
});
