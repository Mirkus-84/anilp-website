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
            <div className="accent-bar mt-6 h-1 w-20 rounded-full" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black leading-tight text-[#1E2A44] md:text-4xl">
              Perche nasce ANILP
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-[#334155]">
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

      <section className="institutional-gradient py-20">
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

      <section className="border-y border-[#D9E1E8] bg-white py-20">
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
                className="rounded-md border border-[#D9E1E8] border-l-4 border-l-[#087F7A] bg-[#F7F9FB] p-6 shadow-sm shadow-slate-950/5 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#9DD8D3] hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black text-[#1E2A44]">{label as string}</h3>
                <p className="mt-3 leading-7 text-[#475569]">
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
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" />
                <div>
                  <h3 className="font-black text-[#1E2A44]">{item.title}</h3>
                  <p className="mt-1 leading-7 text-[#475569]">{item.text}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </section>

      <section className="institutional-gradient py-20">
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

      <section className="border-t border-[#D9E1E8] bg-[#F7F9FB] py-16">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="accent-bar mb-5 h-1 w-20 rounded-full" aria-hidden="true" />
            <h2 className="text-3xl font-black text-[#1E2A44]">Partecipa alla nascita dell’associazione</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#334155]">
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
