import dotenv from "dotenv";
dotenv.config();

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db";

migrate(db, { migrationsFolder: "/drizzle" });
