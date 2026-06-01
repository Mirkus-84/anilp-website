import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { Seo } from '../components/Seo'

export function About() {
  return (
    <>
      <Seo
        title="Chi siamo | ANILP"
        description="Identità, visione e missione del progetto ANILP, associazione in fase di costituzione per gli infermieri liberi professionisti."
      />
      <PageHero
        badge="Fase pre-costitutiva"
        title="Chi siamo"
        text="ANILP è un progetto associativo nazionale in fase di costituzione, nato per tutelare, rappresentare e valorizzare la libera professione infermieristica."
      />
      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Identità"
            title="Verso una rappresentanza nazionale"
            text="ANILP vuole diventare una casa istituzionale per gli infermieri che operano, o intendono operare, come liberi professionisti in Italia."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Visione', 'Una professione infermieristica autonoma, riconosciuta, competente e rappresentata in modo unitario.'],
              ['Missione', 'Costruire tutela, servizi, formazione e interlocuzione per gli iscritti e per il sistema sanitario.'],
              ['Valori', 'Deontologia, qualità, responsabilità, trasparenza, collaborazione e crescita professionale continua.'],
              ['Fase attuale', 'Gli organi, gli strumenti e le procedure saranno definiti dopo la costituzione e lo statuto approvato.'],
            ].map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-xl font-black text-[#1E2A44]">{title}</h2>
                <p className="mt-3 leading-7 text-[#475569]">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
