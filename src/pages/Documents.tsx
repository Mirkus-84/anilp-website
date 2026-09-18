import { DocumentCard } from '../components/DocumentCard'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { documents } from '../data/site'

export function Documents() {
  return (
    <>
      <Seo
        title="Documenti | ANILP"
        description="Documenti ANILP: statuto ufficiale, atto costitutivo, regolamento, codice etico, modulistica e comunicati."
      />
      <PageHero
        badge="Archivio documentale"
        title="Documenti"
        text="Lo statuto approvato e l’atto costitutivo di ANILP sono consultabili in formato PDF. Gli altri documenti saranno pubblicati progressivamente dopo la loro approvazione."
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
