"use client";

import React, { useState } from "react";
import LoadingButton from "./loading-button";
import { useRouter } from "next/navigation";
import { authClient } from "@/auth-client";
import { useToast } from "@/hooks/use-toast";
import { ErrorContext } from "better-auth/react";

const SignOutButton = () => {
  const [pending, setPending] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      setPending(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            toast({
              title: "Signed out successfully",
            });
          },
          onError: (error: ErrorContext) => {
            console.log(`Failed to sign out ${error}`);
            toast({
              title: "Failed to sign out",
            });
          },
        },
      });
    } catch (error) {
      console.log(`Failed to sign out ${error}`);
    } finally {
      setPending(false);
    }
  };
  return (
    <LoadingButton pending={pending} onClick={handleLogout}>
      Sign Out
    </LoadingButton>
  );
};

export default SignOutButton;
