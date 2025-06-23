"use client"

import { animation } from "@/data/extraStuff";
import { useState } from "react";

interface ExperienceProps  {
     domain: string; 
     to: string;
     from: string;
     company: string;
     place: string;
}

function ExperienceCard({ domain, to, from, company, place }: ExperienceProps) {
     const [hover, setHover] = useState<boolean>(false)
     return (
          <div className={`border-b py-4 space-y-3 capitalize ${animation} ${hover ? 
               'dark:border-zinc-700 scale-102 border-zinc-400' : 
               'dark:border-zinc-800 border-zinc-300'}`}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
          >
               <div className='flex justify-between items-center text-sm sm:text-base font-semibold'>
                    <div className={`${animation} ${hover ? 
                         'dark:text-yellow-200/85 text-blue-600' : 
                         ''} `}
                         >{domain}</div>
                    <div className={` ${animation} ${hover ? 
                         '' : 
                         'dark:text-zinc-400/85 text-zinc-400'}`}
                         >{to} - {from}</div>
               </div>
               <div className='flex justify-between items-center text-[11px] sm:text-[13px]'>
                    <div className={` ${animation} ${hover ? 
                         '' : 
                         'dark:text-zinc-400/85 text-zinc-400'}`}
                         >{company}</div>
                    <div className={`${animation} ${hover ? 
                         'dark:text-yellow-200/85 text-blue-600' : 
                         ''} `}
                         >{place}</div>
               </div>
          </div>
     )
}

export default ExperienceCard