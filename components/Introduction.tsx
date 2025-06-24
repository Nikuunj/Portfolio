"use client"
import Image from "next/image"
import sconic from '@/public/sonic.jpg'
import { MoonIcon, SunIcon } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
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
                <div className="flex gap-3 items-center capitalize">
                    <div>
                    <Image 
                        src={sconic}
                        alt="Nikunj Makwana profile picture"
                        className={`w-16 border-zinc-400 dark:border-zinc-800 border-[2px] rounded-full`}
                        priority
                        />
                    </div>
                    <div>
                        <h1 className={`text-2xl font-bold ${animation}`}>
                        Nikunj Makwana
                        </h1>
                        <p className="text-base text-zinc-500">
                        @Nikuunj &middot; Software Developer
                        </p>
                    </div>
                    
                </div>
                <div>
                    <motion.button 
                    whileTap={{ scale: 1.1, rotate: 45 }}
                    transition={{ duration:0.1 }}
                    aria-label="Toggle Theme"
                    type="button" onClick={toggleTheme} className={`${animation} border-2 outline-0 rounded-full 
                        border-zinc-400/80 bg-slate-200 dark:border-zinc-600 dark:bg-slate-800`}>
                         {dark ? <MoonIcon className="text-zinc-400 w-4.5 m-2.5 h-4.5"/> : <SunIcon  className="text-zinc-600 m-2.5 w-4.5 h-4.5"/>}
                    </motion.button>
                </div>
            </div>
            <div className="space-y-7">
                <div className="font-semibold text-xl">
                    About
                </div>
                <div className="text-[15px] space-y-5 leading-relaxed text-pretty">
                    <p className="font-medium tracking-wide">[learn → build → solve]</p>
                    <p>
                         I&rsquo;m a <strong>Software Developer</strong> who enjoys solving real
                        problems with code. I primarily build web applications using
                        <strong> React, Next.js, Node.js</strong>, and
                        <strong> PostgreSQL</strong>, and I have a growing interest in{" "}
                        <strong>real-time systems, Web3</strong>, and{" "}
                        <strong>blockchain technologies</strong>. I love learning new
                        things and building simple, impactful tools that genuinely help
                        people.
                    </p>
                    <p>
                         I&rsquo;m a final-year Computer Engineering student at GEC Dahod,
                        passionate about crafting <strong>responsive web apps</strong> and
                        exploring the future of tech with Web3 and decentralized systems.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Introduction