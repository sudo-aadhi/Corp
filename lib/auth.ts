import { betterAuth, BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/db";
import { sendEmail } from "@/lib/actions/email";
import { openAPI } from "better-auth/plugins";
import * as schema from "@/lib/db/schema/schema";
import { SignupTemplate } from "@/constants/email/signup-template";
import { ForgotPasswordTemplate } from "@/constants/email/reset-password-template";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              firstName: user.name.split(" ")[0],
              lastName: user.name.split(" ")[1],
            },
          };
        },
      },
    },
  },
  user: {
    additionalFields: {
      firstName: {
        type: "string",
        required: false,
      },
      lastName: {
        type: "string",
        required: false,
      },
    },
  },
  plugins: [openAPI()],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: "Reset Password",
        html: ForgotPasswordTemplate({ reset_password_link: url }),
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, token }) => {
      const verificationUrl = `${process.env
        .BETTER_AUTH_URL!}/api/auth/verify-email?token=${token}&callbackURL=${process
        .env.EMAIL_VERIFICATION_CALLBACK_URL!}`;
      await sendEmail({
        to: user.email,
        subject: "Email Verification",
        html: SignupTemplate({ verification_link: verificationUrl }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
} satisfies BetterAuthOptions);
