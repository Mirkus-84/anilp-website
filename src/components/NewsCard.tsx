import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from './Card'

type NewsCardProps = {
  title: string
  slug: string
  category: string
  date: string
  excerpt: string
  image?: string
}

export function NewsCard({ title, slug, category, date, excerpt, image }: NewsCardProps) {
  return (
    <Card className="h-full">
      {image && <img src={image} alt="" loading="lazy" className="mb-5 h-48 w-full rounded-xl object-cover object-center" />}
      <p className="text-sm font-bold uppercase tracking-wide text-[#066B67]">{category}</p>
      <p className="mt-2 text-sm text-[#475569]">{date}</p>
      <h3 className="mt-3 text-xl font-black leading-snug text-[#1E2A44]">{title}</h3>
      <p className="mt-4 leading-7 text-[#475569]">{excerpt}</p>
      <Link
        to={`/news/${slug}`}
        className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087F7A]"
      >
        Leggi aggiornamento
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </Link>
    </Card>
  )
}
