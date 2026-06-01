type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-md border border-[#D9E1E8] bg-white p-6 shadow-sm shadow-slate-950/5 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-[#9DD8D3] hover:shadow-lg hover:shadow-slate-900/8 ${className}`}
    >
      {children}
    </article>
  )
}
