ALTER TABLE "account" ALTER COLUMN "id" SET DEFAULT '8531b40c-9e82-4516-b107-358011b29628';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:41:11.174';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:41:11.174';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "id" SET DEFAULT '5ccd7745-165c-4bea-9372-898a1af28c17';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "created_at" SET DEFAULT '2025-01-10 12:41:11.174';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "updated_at" SET DEFAULT '2025-01-10 12:41:11.174';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT '2a3d1be1-43c8-4b03-a2c8-a0e95c41e62e';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:41:11.173';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:41:11.173';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "id" SET DEFAULT 'a07292c4-2c07-48b6-9528-25cb1bfb8596';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:41:11.174';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:41:11.174';--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "name";