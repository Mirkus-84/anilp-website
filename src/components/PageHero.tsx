import { motion } from 'framer-motion'
import { StatusBadge } from './StatusBadge'

type PageHeroProps = {
  badge?: string
  title: string
  text: string
}

export function PageHero({ badge, title, text }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <motion.div
        className="container-page max-w-4xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {badge && <StatusBadge>{badge}</StatusBadge>}
        <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">{text}</p>
      </motion.div>
    </section>
  )
}
