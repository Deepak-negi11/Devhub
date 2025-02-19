"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";


export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  

  async function handleCredentialsLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/"); // Redirect after successful login
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-6">
      <motion.div
        className="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-white">Sign In</h2>

        {error && <p className="mb-4 rounded bg-red-500 p-2 text-white">{"Incorrect Credentials"}</p>}

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded border border-gray-700 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded border border-gray-700 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <motion.button
            type="submit"
            className="w-full rounded bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>
        <div className="my-6 flex items-center justify-center">
          <span className="w-1/3 border-b border-gray-600"></span>
          <span className="mx-2 text-gray-400">OR</span>
          <span className="w-1/3 border-b border-gray-600"></span>
        </div>

        <motion.button
          className="flex w-full items-center justify-center gap-3 rounded bg-red-600 py-3 font-semibold text-white hover:bg-red-500"
          whileTap={{ scale: 0.95 }}
          onClick={() => signIn("google", { callbackUrl: "/api" })}
        >
          <FaGoogle />
          Sign in with Google
        </motion.button>
        
      </motion.div>
    </div>
  );
}