import { motion } from 'framer-motion'
import { StatusBadge } from './StatusBadge'

type PageHeroProps = {
  badge?: string
  title: string
  text: string
}

export function PageHero({ badge, title, text }: PageHeroProps) {
  return (
    <section className="grid-pattern bg-slate-950 py-20 text-white">
      <motion.div
        className="container-page max-w-4xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {badge && <StatusBadge tone="dark">{badge}</StatusBadge>}
        <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{text}</p>
      </motion.div>
    </section>
  )
}
