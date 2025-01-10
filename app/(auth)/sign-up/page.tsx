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

import { signUpSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/auth-client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ErrorContext } from "better-auth/react";
import OrDivider from "@/components/common/or-divider";
import Image from "next/image";

export default function SignUp() {
  const [emailSignUpPending, setEmailSignUpPending] = useState<boolean>(false);
  const [googleSignUpPending, setGoogleSignUpPending] =
    useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onRequest: () => {
          setGoogleSignUpPending(true);
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
    setGoogleSignUpPending(false);
  };

  const handleEmailSignUp = async (values: z.infer<typeof signUpSchema>) => {
    await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: `${values.firstName} ${values.lastName}`,
      },
      {
        onRequest: () => {
          setEmailSignUpPending(true);
        },
        onSuccess: () => {
          toast({
            title: "Account created",
            description:
              "Your account has been created. Check your email for a verification link.",
          });
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
    setEmailSignUpPending(false);
  };

  return (
    <div className="flex h-screen grow items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleEmailSignUp)}
              className="space-y-6"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                {["firstName", "lastName"].map((field) => (
                  <FormField
                    key={field}
                    control={form.control}
                    name={field as keyof z.infer<typeof signUpSchema>}
                    render={({ field: fieldProps }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          {field === "firstName" ? "First Name" : "Last Name"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={`Enter your ${field === "firstName" ? "first name" : "last name"}`}
                            {...fieldProps}
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              {["email", "password", "confirmPassword"].map((field) => (
                <FormField
                  control={form.control}
                  key={field}
                  name={field as keyof z.infer<typeof signUpSchema>}
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
                    </FormItem>
                  )}
                />
              ))}
              <LoadingButton pending={emailSignUpPending}>
                Sign up
              </LoadingButton>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            <Link href="/sign-in" className="text-primary hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
          <OrDivider />
          <LoadingButton
            pending={googleSignUpPending}
            onClick={handleGoogleSignUp}
          >
            <Image
              src={"/assets/google.svg"}
              alt=""
              width={"20"}
              height={"20"}
            />
            Sign up with Google
          </LoadingButton>
        </CardContent>
      </Card>
    </div>
  );
}
