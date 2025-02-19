import NextAuth, { NextAuthOptions, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "you@example.com" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
				const res = await fetch(`${baseUrl}/api/auth/signin`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password,
					}),
				});
				
				const user = await res.json();
				console.log("Auth response:", user);

				if (res.ok && user) {
					return user;
				}
				return null;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	
	session: {
		strategy: "jwt" as const, 
	},
	pages: {
		signIn: "/signin",
	},
	callbacks: {
		async jwt({ token, user }): Promise<JWT> {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }): Promise<Session> {
			if (token && session.user) {
				session.user.id = token.id as string;
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

