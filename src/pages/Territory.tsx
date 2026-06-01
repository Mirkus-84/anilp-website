import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { TerritorialMapPlaceholder } from '../components/TerritorialMapPlaceholder'

export function Territory() {
  return (
    <>
      <Seo
        title="Delegazioni territoriali | ANILP"
        description="Delegazioni territoriali, coordinamenti regionali e referenti regionali previsti dal progetto ANILP."
      />
      <PageHero
        badge="Presenza territoriale"
        title="Delegazioni territoriali"
        text="ANILP intende sviluppare progressivamente una presenza territoriale organizzata, nel rispetto dello statuto e dei regolamenti associativi."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <TerritorialMapPlaceholder />
          <div className="grid gap-5">
            {['Delegazioni territoriali', 'Coordinamenti regionali', 'Referenti regionali'].map((item) => (
              <Card key={item}>
                <h2 className="text-2xl font-black text-[#1E2A44]">{item}</h2>
                <p className="mt-3 leading-8 text-[#475569]">
                  Struttura prevista in prospettiva per favorire prossimita,
                  partecipazione, raccolta delle esigenze locali e coordinamento nazionale.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
