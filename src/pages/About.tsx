import { Card } from '../components/Card'
import { CTAButton } from '../components/CTAButton'
import { FounderCard } from '../components/FounderCard'
import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { Seo } from '../components/Seo'
import { founders, registeredOffice, statuteUrl } from '../data/site'

export function About() {
  return (
    <>
      <Seo
        title="Chi siamo | ANILP"
        description="ANILP: identità, missione, soci fondatori e primo Consiglio Direttivo dell’associazione costituita il 9 settembre 2026."
      />
      <PageHero
        badge="Associazione nazionale"
        title="Chi siamo"
        text="ANILP è l’Associazione Nazionale Infermieri Liberi Professionisti, costituita il 9 settembre 2026 per tutelare, rappresentare e valorizzare la libera professione infermieristica."
      />
      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Identità"
            title="Una rappresentanza nazionale"
            text="ANILP è un’associazione senza scopo di lucro, apartitica e aconfessionale. Promuove una casa istituzionale per gli infermieri che operano, o intendono operare, come liberi professionisti in Italia."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Visione', 'Una professione infermieristica autonoma, riconosciuta, competente e rappresentata in modo unitario.'],
              ['Missione', 'Costruire tutela, servizi, formazione e interlocuzione per gli iscritti e per il sistema sanitario.'],
              ['Valori', 'Deontologia, qualità, responsabilità, trasparenza, collaborazione e crescita professionale continua.'],
              ['Fase attuale', 'Costituita il 9 settembre 2026 e registrata presso l’Agenzia delle Entrate il 10 settembre 2026. Sono in corso la definizione delle procedure di adesione e la programmazione delle attività.'],
            ].map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-xl font-black text-[#1E2A44]">{title}</h2>
                <p className="mt-3 leading-7 text-[#475569]">{text}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 leading-7 text-[#334155]">Sede legale: {registeredOffice}.</p>
          <div className="mt-5"><CTAButton to={statuteUrl} external>Consulta lo statuto</CTAButton></div>
        </div>
      </section>
      <section className="institutional-gradient py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="Le persone dell’associazione"
            title="Soci fondatori e primo Consiglio Direttivo"
            text="I nove soci fondatori e le cariche attribuite nell’atto costitutivo. Il primo Consiglio Direttivo ha un mandato di quattro anni."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => <FounderCard key={founder.name} {...founder} />)}
          </div>
          <div className="mt-8"><CTAButton to="/organi-associativi" variant="secondary">Organi associativi</CTAButton></div>
        </div>
      </section>
    </>
  )
}
