import { projects } from "@/data/Projects"
import ProjectCard from "./ui/ProjectCard"

function ProjectSection() {
    const renderProject = projects.map((x, idx) => (
        <ProjectCard key={x.name + idx} name={x.name} live={x.live} github={x.github} description={x.describe} />
    ))
    return (
       <div className='space-y-7'>
            <div className="font-semibold text-xl">
                Projects
            </div>
            <div className="space-y-4">
                {renderProject}
            </div>
        </div>
    )
}

export default ProjectSection