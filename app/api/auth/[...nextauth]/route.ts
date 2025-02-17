import NextAuth, { NextAuthOptions, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email: { label: "Email", type: "text", placeholder: "devs@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch("https:localhost:3000/signin", {
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
    session:{
        strategy: "jwt" as const
    },
    pages:{
        signIn:"/signup"
    },callbacks:{
        async jwt({ token, user }): Promise<JWT> {
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

