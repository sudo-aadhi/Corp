ALTER TABLE "account" ALTER COLUMN "id" SET DEFAULT 'dff3fbb5-1ee1-4685-97db-d39649af0d95';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "id" SET DEFAULT '566d62f9-cc86-4514-af89-7db5aae43a5c';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "created_at" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "updated_at" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT 'adb6dca8-b0dd-459e-835e-5d973115a0c6';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "id" SET DEFAULT 'bbf22c17-4843-4f10-be0a-afe2175ce5bb';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:52:06.138';--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "name" varchar NOT NULL;