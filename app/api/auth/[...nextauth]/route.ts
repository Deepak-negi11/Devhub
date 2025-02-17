import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient()

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{label: 'Email' , type:'email', placeholder:'emial'},
                password:{label:'Password', type:'password'}
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Missing credentials");
                }

         
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                
                if (!user || !user.password) {
                    throw new Error("User not found");
                  }
          
                  const passwordMatch = await bcrypt.compare(credentials.password, user.password);
          
                  if (!passwordMatch) {
                    throw new Error("Incorrect password");
                  }
               
                return { id: String(user.id), email: user.email };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          }),
        
    ],
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn:"/"
    },callbacks:{
        async jwt({token , user , account }){
            if(user){
                token.id = user.id
            }
            return token;
        },
        async session({session,token}){
            if(token && session.user){
                session.user.id = token.id as string;

            }
            return session
            
        }

    }
        })
export { handler as GET, handler as POST };


