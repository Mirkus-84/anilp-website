import { Building2, ClipboardList, MapPinned } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

const territorialAreas = [
  {
    title: 'Delegazioni territoriali',
    text: 'Saranno valutate dal Consiglio Direttivo nel rispetto dello statuto approvato e dei regolamenti interni.',
    icon: Building2,
  },
  {
    title: 'Coordinamenti regionali',
    text: 'Potranno favorire il raccordo tra esigenze locali e indirizzo nazionale, quando saranno definiti criteri, funzioni e responsabilità.',
    icon: MapPinned,
  },
  {
    title: 'Referenti regionali',
    text: 'La nomina di eventuali referenti avverrà solo dopo l’avvio delle adesioni ufficiali e secondo procedure trasparenti.',
    icon: ClipboardList,
  },
]

export function Territory() {
  return (
    <>
      <Seo
        title="Delegazioni territoriali | ANILP"
        description="Sviluppo territoriale previsto dallo statuto ANILP, da attivare secondo le deliberazioni associative."
      />
      <PageHero
        badge="Presenza territoriale"
        title="Delegazioni territoriali"
        text="ANILP intende sviluppare progressivamente una presenza territoriale attraverso delegazioni e coordinamenti regionali, secondo quanto sarà previsto dallo statuto e dai regolamenti associativi."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <Card className="mb-8 border-l-4 border-l-[#087F7A] bg-white">
            <p className="text-lg leading-8 text-[#334155]">
              ANILP è stata costituita il 9 settembre 2026. La presenza
              territoriale sarà sviluppata progressivamente secondo le
              deliberazioni del Consiglio Direttivo. L’attivazione delle strutture
              e la nomina dei referenti saranno comunicate attraverso i canali
              istituzionali.
            </p>
          </Card>

          <div className="grid gap-5 md:grid-cols-3">
            {territorialAreas.map((item) => {
              const Icon = item.icon

              return (
                <Card key={item.title}>
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-[#E6F5F3] text-[#087F7A]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl font-black text-[#1E2A44]">{item.title}</h2>
                  <p className="mt-3 leading-8 text-[#475569]">{item.text}</p>
                </Card>
              )
            })}
          </div>

          <div className="mt-10 rounded-md border border-[#D9E1E8] bg-white p-8">
            <div className="accent-bar mb-5 h-1 w-20 rounded-full" aria-hidden="true" />
            <h2 className="text-2xl font-black text-[#1E2A44]">Sviluppo progressivo e trasparente</h2>
            <p className="mt-4 max-w-4xl leading-8 text-[#334155]">
              La presenza territoriale sarà costruita con criteri di trasparenza,
              competenza professionale, rappresentatività e coerenza con le
              finalità associative. Ogni informazione ufficiale sarà pubblicata
              su questa pagina quando gli organi competenti ne avranno definito
              modalità e tempi.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
