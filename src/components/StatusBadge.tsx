type StatusBadgeProps = {
  children: React.ReactNode
  tone?: 'dark' | 'light' | 'gold'
}

export function StatusBadge({ children, tone = 'light' }: StatusBadgeProps) {
  const styles = {
    light: 'border-[#087F7A] bg-[#087F7A] text-white',
    dark: 'border-[#087F7A] bg-[#087F7A] text-white',
    gold: 'border-amber-200 bg-amber-50 text-amber-800',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide shadow-sm ${styles[tone]}`}
    >
      {children}
    </span>
  )
}
