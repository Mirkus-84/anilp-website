import { FounderCard } from '../components/FounderCard'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { founders } from '../data/site'

export function Founders() {
  return (
    <>
      <Seo
        title="Soci fondatori | ANILP"
        description="I soci fondatori del progetto ANILP, Associazione Nazionale Infermieri Liberi Professionisti."
      />
      <PageHero
        badge="Promotori"
        title="Soci fondatori"
        text="La sezione raccoglie i nominativi dei promotori del percorso pre-costitutivo ANILP."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {founders.map((name) => (
            <FounderCard key={name} name={name} />
          ))}
        </div>
      </section>
    </>
  )
}
