import { Mail, MapPin, Share2 } from 'lucide-react'
import { Card } from '../components/Card'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

export function Contacts() {
  return (
    <>
      <Seo
        title="Contatti | ANILP"
        description="Contatti ANILP: email, PEC in fase di attivazione, sede legale in fase di definizione e form frontend-only."
      />
      <PageHero
        badge="Contatti istituzionali"
        title="Contatti"
        text="Per informazioni sul progetto ANILP e sulla manifestazione di interesse e possibile scrivere all’indirizzo email ufficiale."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="grid gap-5">
            <Card>
              <Mail className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black text-[#1E2A44]">Email</h2>
              <a className="mt-2 block text-lg font-bold text-[#087F7A]" href="mailto:info@anilp.it">
                info@anilp.it
              </a>
            </Card>
            <Card>
              <MapPin className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black text-[#1E2A44]">Sede e PEC</h2>
              <p className="mt-2 leading-7 text-[#475569]">PEC in fase di attivazione</p>
              <p className="leading-7 text-[#475569]">Sede legale in fase di definizione</p>
            </Card>
            <Card>
              <h2 className="text-2xl font-black text-[#1E2A44]">Social</h2>
              <div className="mt-4 flex gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-slate-100 text-slate-700" aria-label="Facebook placeholder">
                  <Share2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-md bg-slate-100 text-slate-700" aria-label="LinkedIn placeholder">
                  <Share2 className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </Card>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
