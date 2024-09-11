"use server";
import { signIn } from "@/auth";

export const handleSignIn = async (value:string) => {
  signIn("email", { email:value, redirectTo: "/complete-registeration"});
};