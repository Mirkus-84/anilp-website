type StatusBadgeProps = {
  children: React.ReactNode
  tone?: 'dark' | 'light' | 'gold'
}

export function StatusBadge({ children, tone = 'light' }: StatusBadgeProps) {
  const styles = {
    light: 'border-teal-200 bg-teal-50 text-teal-800',
    dark: 'border-white/20 bg-white/10 text-teal-100',
    gold: 'border-amber-200 bg-amber-50 text-amber-800',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${styles[tone]}`}
    >
      {children}
    </span>
  )
}
