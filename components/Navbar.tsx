"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import { ThemeToggle } from "./ThemeSwitcher";


const NavBar = ()=>{
  const router = useRouter();
  const handleSignup = ()=>{
    router.push("/signup");
  }
    return (
        <div className="flex justify-between items-center p-4 dark:bg-900 shadow dark:shadow-blue-600 ">
        <nav className="">
             <Link href="/" >
               <h1 className="text-xl font-bold text-gray-900 dark:text-white">DevHub</h1>
             </Link>
             
        </nav>
        <SearchBar/>
        <button onClick={handleSignup} className="m-4 rounded-2xl px-4 py-1 font-bold  dark:border-black text-sky-500 bg-black dark:bg-gradient-to-r from-blue-600 to-black dark:text-gray-200 shadow-lg border-2 ">Signup</button>
        <ThemeToggle/>
        </div>
    )
}



export default NavBar;