import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// Uncomment these lines if you want to use Prisma as your adapter.
// import { PrismaClient } from "@prisma/client";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Replace with your own authentication logic.
                const res = await fetch("https://your-backend.com/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                
                const user = await res.json();
                
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          }),
        
    ],
    // Uncomment the next line if using Prisma.
    // adapter: PrismaAdapter(prisma),
    session:{
        strategy: "jwt" as const
    },
    pages:{
        signIn:"/"
    },callbacks:{
        async jwt({ token, user, account }: { token: JWT; user?: User; account?: any }): Promise<JWT> {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }): Promise<Session> {
            if(token && session.user){
                session.user.id = token.id as string;

            }
            return session
            
        }

    }
        }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

