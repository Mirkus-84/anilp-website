import { Mail, MapPin, Share2 } from 'lucide-react'
import { Card } from '../components/Card'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { institutionalEmails } from '../data/site'

export function Contacts() {
  return (
    <>
      <Seo
        title="Contatti | ANILP"
        description="Contatti ANILP: email istituzionali, PEC in fase di attivazione, sede legale in fase di definizione e form frontend-only."
      />
      <PageHero
        badge="Contatti istituzionali"
        title="Contatti"
        text="Per informazioni sul progetto ANILP, sugli eventi e sulla manifestazione di interesse è possibile utilizzare gli indirizzi istituzionali dell’associazione."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="grid gap-5">
            <Card>
              <Mail className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black text-[#1E2A44]">Email istituzionali</h2>
              <div className="mt-4 grid gap-3">
                {institutionalEmails.map((item) => (
                  <div key={item.email}>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#475569]">{item.label}</p>
                    <a className="mt-1 block text-lg font-bold text-[#087F7A]" href={`mailto:${item.email}`}>
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
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
