import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter"

export const {
    handlers: {GET,POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session:{
        strategy: "jwt"
    },
    pages: {
        signIn: "/auth/signin",
        // verifyRequest: "/complete-registeration",
      },
    ...authConfig
})