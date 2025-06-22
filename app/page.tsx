import ExperienceSection from "@/components/ui/ExperienceSection";
import Introduction from "@/components/ui/Introduction";
import ProjectSection from "@/components/ui/ProjectSection";
import SkillSection from "@/components/ui/SkillSection";

export default function Home() {
    return (
        <div className=" relative min-h-screen font-caprasimo p-4 md:p-8 max-w-4xl mx-auto pb-24 text-white">
            <Introduction />
            <SkillSection />
            <ExperienceSection />
            <ProjectSection />
        </div>
    );
}
