CREATE TABLE "account" (
	"id" varchar PRIMARY KEY DEFAULT '5a1ab756-b3fe-49b1-8fd8-a3e58c9a19c6' NOT NULL,
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
	"createdAt" timestamp DEFAULT '2025-01-09 15:29:03.300',
	"updatedAt" timestamp DEFAULT '2025-01-09 15:29:03.300',
	CONSTRAINT "account_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" varchar PRIMARY KEY DEFAULT '9b6f619f-98cb-4691-b5b6-f3473525e04c' NOT NULL,
	"userId" varchar NOT NULL,
	"token" varchar NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"ipAddress" varchar,
	"userAgent" varchar,
	"created_at" timestamp DEFAULT '2025-01-09 15:29:03.300',
	"updated_at" timestamp DEFAULT '2025-01-09 15:29:03.300',
	CONSTRAINT "session_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" varchar PRIMARY KEY DEFAULT '13340e5f-6585-4075-aa8b-6fdf96a75542' NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"emailVerified" boolean DEFAULT false NOT NULL,
	"image" varchar,
	"createdAt" timestamp DEFAULT '2025-01-09 15:29:03.299',
	"updatedAt" timestamp DEFAULT '2025-01-09 15:29:03.299',
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" varchar PRIMARY KEY DEFAULT '07500788-3a71-4639-87f2-776b858e3de6' NOT NULL,
	"identifier" varchar NOT NULL,
	"value" varchar NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT '2025-01-09 15:29:03.300',
	"updatedAt" timestamp DEFAULT '2025-01-09 15:29:03.300',
	CONSTRAINT "verification_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;