"use client"
import Image from "next/image"
import sconic from '@/public/sonic.jpg'
import { MoonIcon, SunIcon } from "lucide-react"
import { useState } from "react"
import { animation } from "@/data/extraStuff"

function Introduction() {
    const [dark, setDark] = useState<boolean>(true)
    function toggleTheme(){
        setDark(pre => !pre)
        document.querySelector('html')?.classList.toggle('dark')
    }
    return (
        <div className="space-y-13">
            <div className="flex  w-full justify-between items-center"> 
                <div className="flex gap-3 items-center">
                    <div>
                    <Image 
                        src={sconic}
                        alt="Picture of the author"
                        className={`w-16 border-zinc-400 dark:border-zinc-800 border-[2px] rounded-full `}
                        />
                    </div>
                    
                    <div className={`text-2xl font-semibold ${animation}`}>
                        Nikunj Makwana
                        <div className="text-base text-zinc-500">
                            @Nikuunj
                        </div>
                    </div>
                    
                </div>
                <div>
                    <button type="button" onClick={toggleTheme} className={`${animation} border-2  rounded-full 
                        border-zinc-400 bg-slate-200 dark:border-zinc-600 dark:bg-slate-800`}>
                        {dark ? <MoonIcon className="text-zinc-400 w-4.5 m-2.5 h-4.5"/> : <SunIcon  className="text-zinc-600 m-2.5 w-4.5 h-4.5"/>}
                    </button>
                </div>
            </div>
            <div className="space-y-7">
                <div className="font-semibold text-xl">
                    About
                </div>
                <div className="text-[15px] space-y-5">
                    <div>
                        [learn → build → solve] 
                    </div>
                    <div>
                        I'm a full-stack developer who enjoys solving real problems with code. I mostly build web apps using React, Next.js, Node.js, and PostgreSQL, but I’m also interested in areas like real-time systems, Web3, and blockchain tools. I love learning new things and building simple, meaningful tools that actually help people.
                    </div>
                    <div>
                        I'm a final-year Computer Engineering student at GEC Dahod, a full-stack developer skilled in building responsive web apps, problem solver, and passionate about Web3 and blockchain tech.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction