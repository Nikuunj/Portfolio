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
     const linkStyle = `w-3.5 hover:text-gray-600 hover:scale-125 ${animation}`
     return (
          <div className={`border-b py-4 space-y-2 capitalize ${animation} ${hover ? 
               'border-zinc-600/80 scale-102' : 
               'border-zinc-800'}`}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
          >
               <div className='flex justify-between items-center text-sm sm:text-base font-semibold'>
                    <div className={`${animation} ${hover ? 
                         'text-violet-500': 
                         ''}`}>{name}</div>
                    <div className={`flex gap-3.5 ${animation} ${hover ? 
                         'opacity-100' : 
                         'opacity-0'}`}>
                         <a href={live} target="_blank">
                              <Link className={`${linkStyle}`} />
                         </a>
                         <a href={github} target="_blank" >
                              <Github className={`${linkStyle}`}/> 
                         </a>
                    </div>
               </div>
               <div className={`text-start text-xs sm:text-[13px] ${hover ? 
                    '' : 
                    'text-zinc-400/85'}`}>{description}</div>
          </div>
     )
}

export default ProjectCard