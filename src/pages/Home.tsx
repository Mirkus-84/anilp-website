import { ActivityCard } from '../components/ActivityCard'
import { CTAButton } from '../components/CTAButton'
import { Hero } from '../components/Hero'
import { NewsCard } from '../components/NewsCard'
import { SectionTitle } from '../components/SectionTitle'
import { Seo } from '../components/Seo'
import { StatusBadge } from '../components/StatusBadge'
import { constitutionSteps, interestUrl, news, pillars } from '../data/site'

export function Home() {
  return (
    <>
      <Seo
        title="ANILP | Associazione Nazionale Infermieri Liberi Professionisti"
        description="ANILP è l’associazione nazionale dedicata alla rappresentanza, tutela e valorizzazione degli infermieri liberi professionisti in Italia, costituita il 9 settembre 2026."
      />
      <Hero />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <StatusBadge>Associazione nazionale</StatusBadge>
            <div className="accent-bar mt-6 h-1 w-20 rounded-full" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black leading-tight text-[#1E2A44] md:text-4xl">
              Perché nasce ANILP
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-[#334155]">
            <p>
              La libera professione infermieristica richiede rappresentanza,
              tutela e strumenti dedicati. ANILP è un’associazione nazionale nata per
              valorizzare autonomia, qualità, deontologia e buone pratiche.
            </p>
            <p>
              L’associazione intende promuovere iniziative legislative,
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
            text="Le finalità statutarie che orientano l’azione dell’associazione e lo sviluppo delle attività."
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
            title="Dalla costituzione all’avvio delle attività"
            text="ANILP è stata costituita il 9 settembre 2026 e registrata presso l’Agenzia delle Entrate il 10 settembre 2026. Ecco le tappe raggiunte e il prossimo passo."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {constitutionSteps.slice(0, 4).map((step, index) => (
              <article
                key={step.title}
                className="rounded-md border border-[#D9E1E8] border-l-4 border-l-[#087F7A] bg-[#F7F9FB] p-6 shadow-sm shadow-slate-950/5 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#9DD8D3] hover:shadow-lg"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#087F7A] text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-bold text-[#066B67]">{step.date}</p>
                <h3 className="mt-2 text-xl font-black text-[#1E2A44]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#475569]">{step.text}</p>
                <p className="mt-4 text-sm font-semibold text-[#334155]">{step.status === 'completata' ? 'Tappa completata' : 'In definizione'}</p>
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
        <div className="container-page">
          <SectionTitle
            eyebrow="Aggiornamenti istituzionali"
            title="News e comunicati"
            text="Aggiornamenti sulla vita associativa e approfondimenti dedicati alla libera professione infermieristica."
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
            <h2 className="text-3xl font-black text-[#1E2A44]">Partecipa al percorso di ANILP</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#334155]">
              Manifesta il tuo interesse e contribuisci alla costruzione di una
              rappresentanza nazionale degli infermieri liberi professionisti.
            </p>
          </div>
          <CTAButton to={interestUrl}>
            Manifesta il tuo interesse
          </CTAButton>
        </div>
      </section>
    </>
  )
}
