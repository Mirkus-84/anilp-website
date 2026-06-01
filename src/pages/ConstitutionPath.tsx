import { CheckCircle2 } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { constitutionSteps } from '../data/site'

export function ConstitutionPath() {
  return (
    <>
      <Seo
        title="Percorso costitutivo | ANILP"
        description="Il percorso costitutivo di ANILP: fase pre-costitutiva, manifestazioni di interesse, statuto, costituzione e sviluppo territoriale."
      />
      <PageHero
        badge="Fase pre-costitutiva"
        title="Percorso costitutivo"
        text="ANILP è in fase di costituzione. Questa pagina descrive le tappe previste verso l’avvio formale dell’associazione e delle future attività associative."
      />
      <section className="bg-white py-20">
        <div className="container-page max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {constitutionSteps.map((step, index) => (
              <Card key={step}>
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#087F7A] text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#1E2A44]">{step}</h2>
                    <p className="mt-2 leading-7 text-[#475569]">
                      Tappa prevista nel percorso di costruzione progressiva
                      dell’associazione, secondo lo statuto e le decisioni degli organi competenti.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-8 bg-[#F7F9FB]">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" />
              <p className="leading-8 text-[#334155]">
                La manifestazione di interesse consente di partecipare alla nascita
                del progetto, ricevere aggiornamenti e contribuire alla definizione
                delle priorità associative.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
