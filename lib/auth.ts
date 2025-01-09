import { betterAuth, BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/db";
import { sendEmail } from "@/lib/actions/email";
import { openAPI } from "better-auth/plugins";
import * as schema from "@/lib/db/schema/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [openAPI()],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, token }) => {
      const verificationUrl = `${process.env
        .BETTER_AUTH_URL!}/api/auth/verify-email?token=${token}&callbackURL=${process
        .env.EMAIL_VERIFICATION_CALLBACK_URL!}`;
      console.log(verificationUrl);
      // await sendEmail({
      //   to: user.email,
      //   subject: "Email Verification",
      //   text: `Please verify your email by clicking the following link: ${verificationUrl}`,
      // });
    },
  },
} satisfies BetterAuthOptions);
