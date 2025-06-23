"use client"

import { useState } from "react"

function ProjectCard() {

     const [hover, setHover] = useState<boolean>(false);
     return (
          <div className={`border-b py-4 space-y-2  transistion-all duration-200 ${hover ? 
               'border-zinc-600/80 scale-102' : 
               'border-zinc-800'}`}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
          >
               <div>
                    <div></div>
                    <div></div>
               </div>
               <div>
                    <div></div>
                    <div></div>
               </div>
          </div>
     )
}

export default ProjectCard