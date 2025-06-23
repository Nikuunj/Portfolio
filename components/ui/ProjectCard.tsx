"use client"

import { animation } from "@/data/extraStuff";
import { Github, Link } from "lucide-react";
import { useState } from "react"

interface ProjectProps {
     name: string; 
     github: string;
     live: string;
     description: string
}

function ProjectCard({ name, github, live, description }: ProjectProps) {

     const [hover, setHover] = useState<boolean>(false);
     const linkStyle = `w-3.5 dark:hover:text-gray-600 hover:text-gray-400 hover:scale-125 ${animation}`
     return (
          <div className={`border-b py-4 space-y-3 capitalize ${animation} ${hover ? 
               'dark:border-zinc-700 scale-102 border-zinc-400' : 
               'dark:border-zinc-800 border-zinc-300'}`}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
          >
               <div className='flex justify-between items-center text-sm sm:text-base font-semibold'>
                    <div className={`${animation} ${hover ? 
                         'text-violet-500': 
                         ''}`}>{name}</div>
                    <div className={`flex gap-3.5 ${animation} ${hover ? 
                         'opacity-100' : 
                         'opacity-100 md:opacity-0'}`}>
                         {live && <a href={live} target="_blank">
                              <Link className={`${linkStyle}`} />
                         </a>}
                         {github && <a href={github} target="_blank" >
                              <Github className={`${linkStyle}`}/> 
                         </a>}
                    </div>
               </div>
               <div className={`text-start text-[11px] sm:text-[13px] ${animation} ${hover ? 
                    '' : 
                    'dark:text-zinc-400/85 text-zinc-400'}`}
                    >{description}
                    </div>
          </div>
     )
}

export default ProjectCard