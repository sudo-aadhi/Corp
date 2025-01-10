ALTER TABLE "account" ALTER COLUMN "id" SET DEFAULT 'ddc33d4b-2ba8-4220-9742-60393dde7314';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:45:46.005';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:45:46.005';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "id" SET DEFAULT '0272be9e-033f-4060-a096-6f07c3d80ba9';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "created_at" SET DEFAULT '2025-01-10 12:45:46.004';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "updated_at" SET DEFAULT '2025-01-10 12:45:46.004';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT '1c9f2f44-b4da-4ad3-9a41-d852006ca2fa';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:45:46.004';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:45:46.004';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "id" SET DEFAULT '3836841e-666e-4394-b556-061735f5ebee';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:45:46.005';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:45:46.005';--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "name" varchar NOT NULL;