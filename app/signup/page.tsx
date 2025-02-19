"use client"
import { EnvelopeIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SignupSchema } from "../secure/secure"

export default function Signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if(!SignupSchema.safeParse({username, email, password}).success){
            setError('Invalid data');
            setLoading(false);
            return;
        }

        try{
            const response = await fetch('/api/auth/signup',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, email, password}),
            });

            if(!response.ok){
                setError('Failed to sign up');
                setLoading(false);
                return;
            }
            setSuccess('Signup successful');
            setLoading(false);
            
            router.push('/signin');
        }catch(error){
            setError('An error occurred');
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-black p-4">
            <motion.div
            initial={{opacity:0 ,y:20}}
            animate={{opacity:1 ,y:0}}
            transition={{duration:1}}
            className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
                <h1 className = "text-3xl font-bold text-slate-800 mb-2">
                    Create Account
                </h1>
                <p className ="text-slate-500 font-bold ">
                    Join the Dev Community
                </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                <label className = "block text-sm font-medium font-sans text-slate-700 mb-">
                    Username
                
                  <div className = "relative">
                    <UserIcon  className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 item-center justify-center "/>
                    <input 
                    type ="text"
                    placeholder = "Enter Your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 mt-1"></input>
                  </div>
                </label>
                </div>
                <div className="mt-2">
                    <label className="block text-sm font-medium font-sans text-slate-700 ">
                        Email
                        <div className = "relative">
                            <EnvelopeIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                            <input 
                            type="email"
                            placeholder ="@devs.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 "></input>
                            
                        </div>
                    </label>
                </div>
                <div className = "mt-2">
                     <label className="block text-sm text-slate-700 font-medium font-sans ">
                        Password
                        <div className="relative">
                            <LockClosedIcon className = "h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                            <input 
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                             className="w-full pl-10 py-3 pr-4 rounded-lg bg-slate-50 border border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </label>
                </div>
                <div className="flex items-center justify-center">
                <motion.button
                whileHover={{scale:1.02}}
                whileTap={{scale:1}}
                className="w-72  hover:bg-blue-700 text-white py-3 rounded-lg transition-colors bg-gradient-to-r from-blue-500 to-blue-800  "
                type="submit">
                    Sign Up
                </motion.button>
                </div>
            </form>
           
            <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 dark:bg-blue-700 dark:hover:bg-slate-600 text-slate-700 dark:text-white py-2.5 rounded-lg transition-colors"
              onClick={()=>signIn("github")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              </svg>
              GitHub
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 dark:bg-blue-700 dark:hover:bg-slate-600 text-slate-700 dark:text-white py-2.5 rounded-lg transition-colors"
              onClick={() => signIn("google")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              </svg>
              Google
            </motion.button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account?{' '}
          <Link 
            href="/signin"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}