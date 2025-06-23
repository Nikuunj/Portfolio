
function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-fit border hover:rotate-2 border-slate-500/60 hover:scale-115 transition-all duration-200 rounded-md bg-slate-900 ${className}`}>{children}</div>
  )
}

export default Card