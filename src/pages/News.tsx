import { Megaphone, Newspaper, ScrollText } from 'lucide-react'
import { Card } from '../components/Card'
import { NewsCard } from '../components/NewsCard'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { news } from '../data/site'

export function News() {
  return (
    <>
      <Seo
        title="News | ANILP"
        description="Aggiornamenti e comunicazioni del progetto ANILP sulla libera professione infermieristica."
      />
      <PageHero
        badge="Aggiornamenti istituzionali"
        title="News"
        text="La sezione è predisposta per distinguere news, comunicati ufficiali e aggiornamenti istituzionali dedicati agli infermieri liberi professionisti."
      />
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="mb-10 grid gap-5 md:grid-cols-3">
            {[
              ['News', Newspaper, 'Approfondimenti e contenuti informativi sul progetto ANILP.'],
              ['Comunicati ufficiali', ScrollText, 'Comunicazioni istituzionali pubblicate dagli organi competenti.'],
              ['Aggiornamenti istituzionali', Megaphone, 'Avanzamenti del percorso costitutivo e delle attività associative.'],
            ].map(([title, Icon, text]) => (
              <Card key={title as string}>
                <Icon className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black text-[#1E2A44]">{title as string}</h2>
                <p className="mt-3 leading-7 text-[#475569]">{text as string}</p>
              </Card>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
