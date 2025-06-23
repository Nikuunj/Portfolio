import { experiences } from "@/data/experiences"
import ExperienceCard from "./ui/ExperienceCard"

function ExperienceSection() {
     const renderExperinece = experiences.map((x, idx) => (
          <ExperienceCard key={x.company + idx} domain={x.domain} to={x.to} from={x.from} place={x.place} company={x.company} />
     ))
     return (
          <div className='space-y-7'>
               <div className="font-semibold text-xl">
                   Experience 
               </div>
               <div className="space-y-4">
                    {renderExperinece}
               </div>
          </div>
     )
}

export default ExperienceSection