"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import {Moon ,Sun } from "lucide-react"

export function ThemeToggle(){
    const {theme , setTheme} = useTheme()
    const [mounted , setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true);
    },[])
    if(!mounted) return null;

    return (
        <button 
        onClick={()=>setTheme(theme==='dark'?'light':'dark')}
        >
            {theme ==="dark"?(
                <Sun className="w-5 h-5 text-white "/>
            ) : (
                <Moon className="w-5 h-5 text-black"/>
            )}
        </button>
    )
}