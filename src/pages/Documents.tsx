import { DocumentCard } from '../components/DocumentCard'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { documents } from '../data/site'

export function Documents() {
  return (
    <>
      <Seo
        title="Documenti | ANILP"
        description="Documenti del progetto ANILP: bozza statuto, atto costitutivo, regolamento, codice etico, modulistica e comunicati."
      />
      <PageHero
        badge="Archivio documentale"
        title="Documenti"
        text="Area predisposta per raccogliere i documenti ufficiali e i materiali di adesione del percorso ANILP."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((item) => (
            <DocumentCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}
