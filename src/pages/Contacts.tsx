import { Mail, MapPin } from 'lucide-react'
import { Card } from '../components/Card'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { associationPec, associationTaxCode, institutionalEmails, registeredOffice } from '../data/site'

export function Contacts() {
  return (
    <>
      <Seo
        title="Contatti | ANILP"
        description="Contatti ANILP: email istituzionali, PEC associazione.anilp@pec.it, sede legale a Milano e codice fiscale 98033030150."
      />
      <PageHero
        badge="Contatti istituzionali"
        title="Contatti"
        text="Per informazioni sull’associazione, sugli eventi e sulle adesioni, utilizza gli indirizzi istituzionali ANILP."
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
              <h2 className="mt-4 text-2xl font-black text-[#1E2A44]">Dati dell’associazione</h2>
              <dl className="mt-4 grid gap-4 leading-7 text-[#475569]">
                <div><dt className="font-bold text-[#1E2A44]">PEC</dt><dd><a className="break-words text-[#066B67]" href={`mailto:${associationPec}`}>{associationPec}</a></dd></div>
                <div><dt className="font-bold text-[#1E2A44]">Sede legale</dt><dd>{registeredOffice}</dd></div>
                <div><dt className="font-bold text-[#1E2A44]">Codice fiscale</dt><dd>{associationTaxCode}</dd></div>
                <div><dt className="font-bold text-[#1E2A44]">Costituzione e registrazione</dt><dd>Costituita il 9 settembre 2026; registrata presso l’Agenzia delle Entrate il 10 settembre 2026.</dd></div>
              </dl>
            </Card>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
