import { Building2, CheckCircle2, Globe2, Network, Users } from 'lucide-react'
import { ActivityCard } from '../components/ActivityCard'
import { Card } from '../components/Card'
import { CTAButton } from '../components/CTAButton'
import { FounderCard } from '../components/FounderCard'
import { Hero } from '../components/Hero'
import { NewsCard } from '../components/NewsCard'
import { SectionTitle } from '../components/SectionTitle'
import { Seo } from '../components/Seo'
import { StatusBadge } from '../components/StatusBadge'
import { activities, formUrl, founders, news, pillars } from '../data/site'

export function Home() {
  return (
    <>
      <Seo
        title="ANILP | Associazione Nazionale Infermieri Liberi Professionisti"
        description="ANILP e il progetto associativo nazionale dedicato alla rappresentanza, tutela e valorizzazione degli infermieri liberi professionisti in Italia."
      />
      <Hero />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <StatusBadge>ANILP e in fase di costituzione</StatusBadge>
            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              Perche nasce ANILP
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-slate-600">
            <p>
              La libera professione infermieristica richiede rappresentanza,
              tutela e strumenti dedicati. ANILP nasce come percorso
              pre-costitutivo per costruire un’associazione nazionale capace di
              valorizzare autonomia, qualita, deontologia e buone pratiche.
            </p>
            <p>
              Il progetto intende promuovere iniziative legislative,
              professionali, sindacali, culturali, amministrative e tributarie,
              in dialogo con istituzioni, ordini professionali, enti formativi e
              soggetti pubblici e privati.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Finalita statutarie"
            title="I nostri pilastri"
            text="Le direttrici che orientano il percorso verso la costituzione dell’associazione."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => (
              <ActivityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Visione"
            title="Cosa vogliamo costruire"
            text="Un’infrastruttura associativa nazionale, utile ai professionisti e credibile verso gli interlocutori istituzionali."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Servizi agli associati', Users],
              ['Convenzioni e strumenti', Building2],
              ['Rete territoriale', Network],
              ['Interlocuzione nazionale', Globe2],
            ].map(([label, Icon]) => (
              <article
                key={label as string}
                className="border-l-4 border-teal-700 bg-slate-50 p-6"
              >
                <Icon className="h-8 w-8 text-teal-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black text-slate-950">{label as string}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Sviluppo progressivo dopo la costituzione formale e secondo lo
                  statuto approvato.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Territorio"
              title="Verso una rete nazionale"
              text="ANILP intende promuovere delegazioni territoriali, coordinamenti regionali e referenti regionali nel rispetto dello statuto e dei regolamenti associativi."
            />
          </div>
          <Card>
            {activities.slice(5, 8).map((item) => (
              <div key={item.title} className="mb-5 flex gap-4 last:mb-0">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-1 leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <SectionTitle eyebrow="Promotori" title="Soci fondatori" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {founders.map((name) => (
              <FounderCard key={name} name={name} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Aggiornamenti"
            title="News dal progetto ANILP"
            text="Una struttura blog locale gia predisposta per comunicati, approfondimenti e aggiornamenti ufficiali."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-950">Partecipa alla nascita dell’associazione</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-700">
              Compila la manifestazione di interesse e contribuisci al percorso
              verso una rappresentanza nazionale degli infermieri liberi professionisti.
            </p>
          </div>
          <CTAButton to={formUrl} external>
            Manifesta il tuo interesse
          </CTAButton>
        </div>
      </section>
    </>
  )
}
