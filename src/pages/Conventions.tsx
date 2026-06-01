import { Handshake } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { futureServices } from '../data/site'

export function Conventions() {
  return (
    <>
      <Seo
        title="Convenzioni | ANILP"
        description="Convenzioni future ANILP per consulenza legale, fiscale, assicurazioni, formazione, software e servizi digitali."
      />
      <PageHero
        badge="Servizi futuri"
        title="Convenzioni"
        text="Le convenzioni saranno attivate dopo la costituzione, in coerenza con lo statuto e con le esigenze degli associati."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {futureServices.map((item) => (
            <Card key={item}>
              <Handshake className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-black text-[#1E2A44]">{item}</h2>
              <p className="mt-3 leading-7 text-[#475569]">
                Area predisposta per accordi e servizi dedicati agli infermieri liberi professionisti.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
