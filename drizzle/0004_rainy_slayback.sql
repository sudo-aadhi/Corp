ALTER TABLE "account" ALTER COLUMN "id" SET DEFAULT '78344325-a772-431b-b700-9504445861cf';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:51:31.427';--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:51:31.427';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "id" SET DEFAULT 'f5e95724-975b-4019-8f6e-30646a9db5b5';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "created_at" SET DEFAULT '2025-01-10 12:51:31.426';--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "updated_at" SET DEFAULT '2025-01-10 12:51:31.426';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT '3db0a8d6-8a04-4340-a272-61543faf719c';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:51:31.426';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:51:31.426';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "id" SET DEFAULT '4984a19c-f3e1-4fa4-b26f-6a457380918c';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "createdAt" SET DEFAULT '2025-01-10 12:51:31.427';--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "updatedAt" SET DEFAULT '2025-01-10 12:51:31.427';--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "name";