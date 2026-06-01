import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from './Card'

type NewsCardProps = {
  title: string
  date: string
  excerpt: string
}

export function NewsCard({ title, date, excerpt }: NewsCardProps) {
  return (
    <Card className="h-full">
      <p className="text-sm font-bold uppercase tracking-wide text-[#087F7A]">{date}</p>
      <h3 className="mt-3 text-xl font-black leading-snug text-[#1E2A44]">{title}</h3>
      <p className="mt-4 leading-7 text-[#475569]">{excerpt}</p>
      <Link
        to="/news"
        className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087F7A]"
      >
        Leggi aggiornamento
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </Link>
    </Card>
  )
}
