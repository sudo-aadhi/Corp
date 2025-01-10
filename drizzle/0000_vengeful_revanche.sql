CREATE TABLE "account" (
	"id" varchar PRIMARY KEY DEFAULT '928d3f3f-3076-450e-ae40-bb5ced04afc4' NOT NULL,
	"userId" varchar NOT NULL,
	"accountId" varchar NOT NULL,
	"providerId" varchar NOT NULL,
	"accessToken" varchar,
	"refreshToken" varchar,
	"accessTokenExpiresAt" timestamp,
	"refreshTokenExpiresAt" timestamp,
	"scope" varchar,
	"idToken" varchar,
	"password" varchar,
	"createdAt" timestamp DEFAULT '2025-01-10 12:26:57.476',
	"updatedAt" timestamp DEFAULT '2025-01-10 12:26:57.476',
	CONSTRAINT "account_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" varchar PRIMARY KEY DEFAULT '20c4dff2-d3a7-4034-9280-60ac11e4d82e' NOT NULL,
	"userId" varchar NOT NULL,
	"token" varchar NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"ipAddress" varchar,
	"userAgent" varchar,
	"created_at" timestamp DEFAULT '2025-01-10 12:26:57.476',
	"updated_at" timestamp DEFAULT '2025-01-10 12:26:57.476',
	CONSTRAINT "session_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" varchar PRIMARY KEY DEFAULT 'fd3fa0fa-f2ee-4c75-9a08-07c4e18286ac' NOT NULL,
	"name" varchar NOT NULL,
	"firstName" varchar NOT NULL,
	"lastName" varchar NOT NULL,
	"email" varchar NOT NULL,
	"emailVerified" boolean DEFAULT false NOT NULL,
	"image" varchar,
	"createdAt" timestamp DEFAULT '2025-01-10 12:26:57.476',
	"updatedAt" timestamp DEFAULT '2025-01-10 12:26:57.476',
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" varchar PRIMARY KEY DEFAULT 'b42449cd-e779-48c8-8dc7-be4dfd8e545a' NOT NULL,
	"identifier" varchar NOT NULL,
	"value" varchar NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT '2025-01-10 12:26:57.476',
	"updatedAt" timestamp DEFAULT '2025-01-10 12:26:57.476',
	CONSTRAINT "verification_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;