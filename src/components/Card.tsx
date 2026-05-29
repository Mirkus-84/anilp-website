type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 ${className}`}
    >
      {children}
    </article>
  )
}
