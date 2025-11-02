import ExperienceSection from "@/components/ExperienceSection";
import Introduction from "@/components/Introduction";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="relative min-h-screen font-caprasimo p-4 md:p-8 max-w-4xl mx-auto pb-24 tracking-wide">
      <div className="py-7 sm:py-16 md:py-28 space-y-11 relative">
        <Introduction />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
      </div>
      <div className="absolute top-0 h-full border-l text-zinc-400 border-r border-zinc-300 dark:border-[#37373a] left-0 md:-left-2.5 lg:-left-9 w-3 md:w-7
        bg-[repeating-linear-gradient(45deg,_#d4d4d8_0,_#d4d4d8_1px,_transparent_0,_transparent_50%)]
        dark:bg-[repeating-linear-gradient(45deg,_#37373a_0,_#37373a_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
      <div className="absolute top-0 h-full border-l border-r border-zinc-300 dark:border-[#37373a] right-0 md:-right-2.5 lg:-right-9 w-3 md:w-7
        bg-[repeating-linear-gradient(45deg,_#d4d4d8_0,_#d4d4d8_1px,_transparent_0,_transparent_50%)]
        dark:bg-[repeating-linear-gradient(45deg,_#37373a_0,_#37272a_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
    </div>
  );
}
