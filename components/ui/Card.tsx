
function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-fit border border-slate-500/60 hover:scale-110 transition-all duration-150 rounded-md bg-slate-800 ${className}`}>{children}</div>
  )
}

export default Card