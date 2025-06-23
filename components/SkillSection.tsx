import { skills } from "@/data/skill"
import Card from "./ui/Card"


function SkillSection() {

    const renderSkills = skills.map((val, idx) => (
        <Card key={val + idx} className="px-2 py-1">{val}</Card>  
    ))

    return (
        <div className="space-y-7">
            <div className="font-semibold text-xl">
                Skills
            </div>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2">
                {renderSkills}
            </div>
        </div>
    )
}

export default SkillSection