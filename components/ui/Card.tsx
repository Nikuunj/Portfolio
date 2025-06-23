import { animation } from "@/data/extraStuff"

function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-fit border hover:rotate-2 border-slate-500/60 hover:scale-115 ${animation} rounded-md bg-zinc-100
         hover:bg-zinc-300/75 dark:bg-slate-900 dark:hover:bg-slate-800
            ${className}`}>
            {children}
        </div>
    )
}

export default Card