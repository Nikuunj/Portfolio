import ExperienceSection from "@/components/ExperienceSection";
import Introduction from "@/components/Introduction";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
    return (
        <div className="relative min-h-screen font-caprasimo p-4 md:p-8 max-w-4xl mx-auto pb-24 tracking-wide">
            <div className="py-24 space-y-11">
                <Introduction />
                <SkillSection />
                <ExperienceSection />
                <ProjectSection />
            </div>
        </div>
    );
}
