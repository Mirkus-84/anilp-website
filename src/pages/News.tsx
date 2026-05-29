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
        badge="Blog locale"
        title="News"
        text="La sezione e predisposta per aggiornamenti, comunicati ufficiali e approfondimenti dedicati agli infermieri liberi professionisti."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}
