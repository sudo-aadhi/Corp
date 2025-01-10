import { boolean, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { v4 as randomUUID } from "uuid";

export const user = pgTable("user", {
  id: varchar("id").default(randomUUID()).unique().primaryKey(),
  name: varchar("name").notNull(),
  firstName: varchar("firstName"),
  lastName: varchar("lastName"),
  email: varchar("email").unique().notNull(),
  emailVerified: boolean("emailVerified").default(false).notNull(),
  image: varchar("image"),
  createdAt: timestamp("createdAt").default(new Date()),
  updatedAt: timestamp("updatedAt").default(new Date()),
});

export const session = pgTable("session", {
  id: varchar("id").default(randomUUID()).unique().primaryKey(),
  userId: varchar("userId")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  token: varchar("token").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  ipAddress: varchar("ipAddress"),
  userAgent: varchar("userAgent"),
  createdAt: timestamp("created_at").default(new Date()),
  updatedAt: timestamp("updated_at").default(new Date()),
});

export const account = pgTable("account", {
  id: varchar("id").default(randomUUID()).unique().primaryKey(),
  userId: varchar("userId")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  accountId: varchar("accountId").notNull(),
  providerId: varchar("providerId").notNull(),
  accessToken: varchar("accessToken"),
  refreshToken: varchar("refreshToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: varchar("scope"),
  idToken: varchar("idToken"),
  password: varchar("password"),
  createdAt: timestamp("createdAt").default(new Date()),
  updatedAt: timestamp("updatedAt").default(new Date()),
});

export const verification = pgTable("verification", {
  id: varchar("id").default(randomUUID()).unique().primaryKey(),
  identifier: varchar("identifier").notNull(),
  value: varchar("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").default(new Date()),
  updatedAt: timestamp("updatedAt").default(new Date()),
});
