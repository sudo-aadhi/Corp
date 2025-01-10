ALTER TABLE "account" ALTER COLUMN "id" SET DEFAULT '2a019151-1156-40e2-b4c9-cfd8a6416d23';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:43:24.586';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:43:24.586';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "id" SET DEFAULT '76d65c58-f0e3-4ef4-93bc-a47c409074c7';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "created_at" SET DEFAULT '2025-01-10 12:43:24.586';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "updated_at" SET DEFAULT '2025-01-10 12:43:24.586';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT 'd6bbe1a7-0b50-4bf3-8b1c-953ec350811f';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "firstName" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "lastName" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:43:24.586';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:43:24.586';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "id" SET DEFAULT 'c438d491-3853-4dc2-92ec-8890bb98f690';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:43:24.587';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:43:24.587';