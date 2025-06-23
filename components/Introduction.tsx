"use client"
import Image from "next/image"
import sconic from '@/public/sonic.jpg'
import { MoonIcon, SunIcon } from "lucide-react"
import { useState } from "react"

function Introduction() {
    const [light, setLight] = useState<boolean>(false)
    function toggleTheme(){
        setLight(pre => !pre)
        document.querySelector('html')?.classList.toggle('dark')
    }
    return (
        <div className="flex  w-full justify-between items-center"> 
            <div className="flex gap-3 items-center">
                <div>
                <Image 
                    src={sconic}
                    alt="Picture of the author"
                    className={`w-16  border-zinc-400 dark:border-zinc-800 border-[2px] rounded-full `}
                />
                </div>
                
                <div className="text-2xl font-semibold">
                    Nikunj Makwana
                </div>
                
            </div>
            <div>
                <button type="button" onClick={toggleTheme} className={`border-2 p-2.5  rounded-full 
                    border-zinc-400 bg-slate-200 dark:border-zinc-600 dark:bg-slate-800`}>
                    {light ? <MoonIcon className="text-zinc-400 w-4.5 h-4.5"/> : <SunIcon  className="text-zinc-600 w-4.5 h-4.5"/>}
                </button>
            </div>
        </div>
    )
}

export default Introduction