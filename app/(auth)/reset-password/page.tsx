"use client";

import { authClient } from "@/auth-client";
import LoadingButton from "@/components/common/loading-button";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { resetPasswordSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function ResetPasswordContent() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [resetPasswordPending, setResetPasswordPending] =
    useState<boolean>(false);
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleResetPassword = async (
    values: z.infer<typeof resetPasswordSchema>,
  ) => {
    setResetPasswordPending(true);
    const { error } = await authClient.resetPassword({
      newPassword: values.password,
    });
    if (error) {
      toast({
        title: "Something went wrong",
        description: error.message ?? "Something went wrong.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description:
          "Password reset successful. Please sign in with your new password.",
      });
      router.push("/sign-in");
    }
    setResetPasswordPending(false);
  };

  if (error === "invalid_token" || error === "INVALID_TOKEN") {
    return (
      <div className="flex h-screen grow items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-800">
              Invalid Reset Link
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-center text-gray-600">
                This password reset link is invalid or has expired.
              </p>
              <Button
                className="w-full font-semibold"
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                Return to the Sign in Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-screen grow items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            Reset Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="space-y-6"
              onSubmit={form.handleSubmit(handleResetPassword)}
            >
              {["password", "confirmPassword"].map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as keyof z.infer<typeof resetPasswordSchema>}
                  render={({ field: fieldProps }) => (
                    <FormItem>
                      <FormLabel>
                        {field === "confirmPassword"
                          ? "Confirm New Password"
                          : "New Password"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...fieldProps}
                          placeholder={`${
                            field === "confirmPassword"
                              ? "Confirm your new password"
                              : "Enter your new password"
                          }`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <LoadingButton pending={resetPasswordPending}>
                Reset Password
              </LoadingButton>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <svg
            className="mr-2 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
