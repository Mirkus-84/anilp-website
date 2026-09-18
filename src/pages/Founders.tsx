import { FounderCard } from '../components/FounderCard'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { founders } from '../data/site'

export function Founders() {
  return (
    <>
      <Seo
        title="Soci fondatori | ANILP"
        description="I nove soci fondatori di ANILP e le cariche del primo Consiglio Direttivo, nominato nell’atto costitutivo."
      />
      <PageHero
        badge="Costituzione del 9 settembre 2026"
        title="Soci fondatori"
        text="I soci che hanno sottoscritto l’atto costitutivo di ANILP e compongono il primo Consiglio Direttivo, per un mandato di quattro anni."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </section>
    </>
  )
}
