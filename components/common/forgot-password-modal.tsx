"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPasswordSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import LoadingButton from "./loading-button";
import { authClient } from "@/auth-client";
import { useToast } from "@/hooks/use-toast";

const ForgotPasswordModal = () => {
  const [sendPasswordResetLinkPending, setSendPasswordResetLinkPending] =
    useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleForgotPassword = async (
    values: z.infer<typeof forgotPasswordSchema>,
  ) => {
    setSendPasswordResetLinkPending(true);
    const { error } = await authClient.forgetPassword({
      email: values.email,
      redirectTo: "/reset-password",
    });
    if (error) {
      toast({
        title: "Failed to send password reset link",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Password reset link sent",
        description:
          "If an account exists with this email, you will receive a password reset link. If you don't receive it within a few minutes, please check your spam folder.",
      });
    }
    setSendPasswordResetLinkPending(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="text-primary hover:underline">
        <span>Forgot Password?</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Forgot Password
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit(handleForgotPassword)();
            }}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              key="email"
              name={"email"}
              render={({ field: fieldProps }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      {...fieldProps}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton pending={sendPasswordResetLinkPending}>
              Send Password Reset Link
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
