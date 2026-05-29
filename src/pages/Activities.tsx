import { ActivityCard } from '../components/ActivityCard'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { activities } from '../data/site'

export function Activities() {
  return (
    <>
      <Seo
        title="Attivita | ANILP"
        description="Le aree di attivita previste da ANILP: tutela, rappresentanza, formazione, convenzioni, delegazioni ed eventi."
      />
      <PageHero
        badge="Aree di lavoro"
        title="Attivita"
        text="ANILP intende sviluppare iniziative professionali, legislative, formative, informative e organizzative per gli associati."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((item) => (
            <ActivityCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}
