import { CheckCircle2, CreditCard, FileCheck2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { YaplaMemberEmbed } from '../components/YaplaMemberEmbed'
import { annualMembershipFee } from '../data/site'

const eligibleMembers = [
  'Infermieri liberi professionisti con partita IVA individuale',
  'Infermieri liberi professionisti in studio associato, STP o altra forma consentita',
  'Infermieri iscritti OPI interessati alla libera professione',
  'Infermieri con titolo estero autorizzati all’esercizio temporaneo in Italia, nei casi previsti dallo Statuto',
]

export function Join() {
  return (
    <>
      <Seo
        title="Diventa socio | Domanda di ammissione ANILP"
        description="Compila la domanda di ammissione ANILP tramite il portale Yapla. Quota associativa ordinaria di 60 euro, documentazione e delibera del Consiglio Direttivo."
      />
      <PageHero
        badge="Adesioni ANILP"
        title="Diventa socio"
        text="Presenta la tua domanda di ammissione tramite il portale Yapla e segui le comunicazioni della Segreteria. L’invio della domanda non equivale all’ammissione a socio."
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="container-page">
          <div className="mb-8 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <Card>
              <h2 className="text-2xl font-black text-[#1E2A44]">Come funziona</h2>
              <ol className="mt-5 grid gap-4">
                <li className="flex gap-3"><FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" /><span className="leading-7 text-[#334155]"><strong>Compila la domanda</strong> su Yapla, inserendo i tuoi dati e i documenti richiesti.</span></li>
                <li className="flex gap-3"><CreditCard className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" /><span className="leading-7 text-[#334155]"><strong>Segui le istruzioni per la quota</strong>: se la modalità selezionata non prevede pagamento online, la Segreteria comunicherà come versare la quota tramite metodo tracciabile.</span></li>
                <li className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" /><span className="leading-7 text-[#334155]"><strong>Attendi la valutazione</strong>: l’ammissione è deliberata dal Consiglio Direttivo dopo la verifica dei requisiti. In caso di mancata ammissione, quanto eventualmente versato per la domanda viene rimborsato integralmente.</span></li>
              </ol>
            </Card>
            <Card className="border-l-4 border-l-[#087F7A] bg-[#F7F9FB]">
              <p className="text-sm font-bold uppercase tracking-wide text-[#066B67]">Quota associativa ordinaria</p>
              <p className="mt-3 text-5xl font-black text-[#1E2A44]">{annualMembershipFee} € <span className="text-base font-semibold text-[#475569]">annui</span></p>
              <p className="mt-4 leading-7 text-[#334155]">
                L’eventuale registrazione preliminare senza pagamento non è un’adesione gratuita.
                La qualifica di socio si perfeziona secondo la procedura associativa, dopo
                la delibera favorevole e la verifica del versamento.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#475569]">
                Consulta anche lo <Link to="/documenti" className="font-semibold text-[#066B67] underline underline-offset-2">Statuto e i documenti ANILP</Link>.
              </p>
            </Card>
          </div>

          <YaplaMemberEmbed />

          <div className="mt-8 rounded-xl border border-[#D9E1E8] bg-[#F7F9FB] p-6">
            <h2 className="text-xl font-bold text-[#1E2A44]">Chi può presentare domanda</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {eligibleMembers.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#334155]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-[#475569]">
              Per informazioni o difficoltà con il portale: <a className="font-semibold text-[#066B67] underline underline-offset-2" href="mailto:info@anilp.it">info@anilp.it</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
