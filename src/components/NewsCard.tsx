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
      <p className="text-sm font-bold uppercase tracking-wide text-teal-700">{date}</p>
      <h3 className="mt-3 text-xl font-black leading-snug text-slate-950">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{excerpt}</p>
      <Link
        to="/news"
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-700"
      >
        Leggi aggiornamento
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  )
}
