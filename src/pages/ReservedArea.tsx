import { LockKeyhole } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

export function ReservedArea() {
  return (
    <>
      <Seo
        title="Area riservata | ANILP"
        description="Area riservata soci ANILP in fase di attivazione, predisposta per documenti, convenzioni, comunicazioni e webinar."
      />
      <PageHero
        badge="In fase di attivazione"
        title="Area riservata"
        text="Area riservata soci in fase di attivazione. Non e previsto un login reale in questa fase."
      />
      <section className="bg-white py-20">
        <div className="container-page max-w-4xl">
          <Card>
            <LockKeyhole className="h-10 w-10 text-teal-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black text-slate-950">Sviluppi futuri</h2>
            <p className="mt-4 leading-8 text-slate-600">
              La futura area soci potra ospitare documenti riservati, convenzioni,
              comunicazioni associative, webinar e materiali formativi.
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}
