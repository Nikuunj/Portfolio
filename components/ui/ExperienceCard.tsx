"use client"

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
          <div className={`border-b py-4 space-y-2  transistion-all duration-200 ${hover ? 
               'border-zinc-600/80 scale-102' : 
               'border-zinc-800'}`}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
          >
               <div className='flex capitalize justify-between items-center text-sm sm:text-base font-semibold'>
                    <div className={`transition-all duration-200 ${hover ? 
                         'text-blue-400' : 
                         ''} `}
                         >{domain}</div>
                    <div className={` transition-all duration-200 ${hover ? 
                         'text-zinc-300' : 
                         'text-zinc-400/90'}`}
                         >{to} - {from}</div>
               </div>
               <div className='flex justify-between items-center text-xs sm:text-sm'>
                    <div className={` transition-all duration-200 ${hover ? 
                         'text-zinc-300' : 
                         'text-zinc-400/90'}`}
                         >{company}</div>
                    <div className={`transition-all duration-200 ${hover ? 
                         'text-blue-400' : 
                         ''} `}
                         >{place}</div>
               </div>
          </div>
     )
}

export default ExperienceCard