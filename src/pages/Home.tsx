import { CheckCircle2 } from 'lucide-react'
import { ActivityCard } from '../components/ActivityCard'
import { Card } from '../components/Card'
import { CTAButton } from '../components/CTAButton'
import { Hero } from '../components/Hero'
import { NewsCard } from '../components/NewsCard'
import { SectionTitle } from '../components/SectionTitle'
import { Seo } from '../components/Seo'
import { StatusBadge } from '../components/StatusBadge'
import { activities, constitutionSteps, formUrl, news, pillars } from '../data/site'

export function Home() {
  return (
    <>
      <Seo
        title="ANILP | Associazione Nazionale Infermieri Liberi Professionisti"
        description="ANILP è il progetto associativo nazionale dedicato alla rappresentanza, tutela e valorizzazione degli infermieri liberi professionisti in Italia."
      />
      <Hero />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <StatusBadge>ANILP è in fase di costituzione</StatusBadge>
            <div className="accent-bar mt-6 h-1 w-20 rounded-full" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black leading-tight text-[#1E2A44] md:text-4xl">
              Perché nasce ANILP
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-[#334155]">
            <p>
              La libera professione infermieristica richiede rappresentanza,
              tutela e strumenti dedicati. ANILP nasce come percorso
              pre-costitutivo per costruire un’associazione nazionale capace di
              valorizzare autonomia, qualità, deontologia e buone pratiche.
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
            eyebrow="Finalità statutarie"
            title="Le priorità associative"
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
            eyebrow="Percorso"
            title="Percorso verso la costituzione"
            text="Le tappe previste per passare dalla fase pre-costitutiva alla piena operatività associativa."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {constitutionSteps.slice(0, 4).map((step, index) => (
              <article
                key={step}
                className="rounded-md border border-[#D9E1E8] border-l-4 border-l-[#087F7A] bg-[#F7F9FB] p-6 shadow-sm shadow-slate-950/5 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#9DD8D3] hover:shadow-lg"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#087F7A] text-sm font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-black text-[#1E2A44]">{step}</h3>
                <p className="mt-3 leading-7 text-[#475569]">
                  Passaggio progressivo verso una rappresentanza nazionale strutturata,
                  trasparente e conforme allo statuto approvato.
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton to="/percorso-costitutivo" variant="secondary">
              Scopri il percorso costitutivo
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Territorio"
              title="Delegazioni territoriali"
              text="ANILP intende sviluppare progressivamente una presenza territoriale attraverso delegazioni e coordinamenti regionali, secondo quanto sarà previsto dallo statuto e dai regolamenti associativi."
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

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Aggiornamenti istituzionali"
            title="News e comunicati"
            text="Una sezione predisposta per distinguere news, comunicati ufficiali e aggiornamenti istituzionali del progetto ANILP."
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
            Compila la manifestazione di interesse
          </CTAButton>
        </div>
      </section>
    </>
  )
}
