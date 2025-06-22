
function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-fit border border-zinc-200 rounded-md bg-zinc-700 ${className}`}>{children}</div>
  )
}

export default Card