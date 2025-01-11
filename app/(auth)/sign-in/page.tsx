"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/common/loading-button";
import Link from "next/link";
import { signInSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/auth-client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { ErrorContext } from "better-auth/react";
import OrDivider from "@/components/common/or-divider";
import Image from "next/image";
import ForgotPasswordModal from "@/components/common/forgot-password-modal";

export default function SignIn() {
  const [emailSignInPending, setEmailSignInPending] = useState(false);
  const [googleSignInPending, setGoogleSignInPending] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onRequest: () => {
          setGoogleSignInPending(true);
        },
        onError: (ctx: ErrorContext) => {
          toast({
            title: "Something went wrong",
            description: ctx.error.message ?? "Something went wrong.",
            variant: "destructive",
          });
        },
      },
    );
    setGoogleSignInPending(false);
  };

  const handleEmailSignIn = async (values: z.infer<typeof signInSchema>) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onRequest: () => {
          setEmailSignInPending(true);
        },
        onSuccess: () => {
          toast({
            title: "Signed in successfully",
          });
          router.push("/");
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          console.log("error", ctx);
          toast({
            title: "Something went wrong",
            description: ctx.error.message ?? "Something went wrong.",
            variant: "destructive",
          });
        },
      },
    );
    setEmailSignInPending(false);
  };

  return (
    <div className="flex h-screen grow items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.stopPropagation();
                form.handleSubmit(handleEmailSignIn);
              }}
              className="space-y-6"
            >
              {["email", "password"].map((field) => (
                <FormField
                  control={form.control}
                  key={field}
                  name={field as keyof z.infer<typeof signInSchema>}
                  render={({ field: fieldProps }) => (
                    <FormItem>
                      <FormLabel>
                        {field === "confirmPassword"
                          ? "Confirm Password"
                          : field.charAt(0).toUpperCase() + field.slice(1)}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={
                            field.toLowerCase().includes("password")
                              ? "password"
                              : field === "email"
                                ? "email"
                                : "text"
                          }
                          placeholder={`Enter your ${
                            field === "confirmPassword"
                              ? "confirm password"
                              : field
                          }`}
                          {...fieldProps}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                      {field === "password" && (
                        <div className="mt-4 flex items-end justify-end text-center text-sm">
                          <ForgotPasswordModal />
                        </div>
                      )}
                    </FormItem>
                  )}
                />
              ))}
              <LoadingButton pending={emailSignInPending}>
                Sign in
              </LoadingButton>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            <Link href="/sign-up" className="text-primary hover:underline">
              Don&apos;t have a account? Sign up
            </Link>
          </div>
          <OrDivider />
          <LoadingButton
            pending={googleSignInPending}
            onClick={handleGoogleSignIn}
          >
            <Image
              src={"/assets/google.svg"}
              alt=""
              width={"20"}
              height={"20"}
            />
            Sign in with Google
          </LoadingButton>
        </CardContent>
      </Card>
    </div>
  );
}
