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
          <div className={`border-b py-4 space-y-2 capitalize ${animation} ${hover ? 
               'border-zinc-600/80 scale-102' : 
               'border-zinc-800'}`}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
          >
               <div className='flex justify-between items-center text-sm sm:text-base font-semibold'>
                    <div className={`${animation} ${hover ? 
                         'text-yellow-200/85' : 
                         ''} `}
                         >{domain}</div>
                    <div className={` ${animation} ${hover ? 
                         'text-zinc-300' : 
                         'text-zinc-400/85'}`}
                         >{to} - {from}</div>
               </div>
               <div className='flex justify-between items-center text-xs sm:text-[13px]'>
                    <div className={` ${animation} ${hover ? 
                         'text-zinc-300' : 
                         'text-zinc-400/85'}`}
                         >{company}</div>
                    <div className={`${animation} ${hover ? 
                         'text-yellow-200/85' : 
                         ''} `}
                         >{place}</div>
               </div>
          </div>
     )
}

export default ExperienceCard