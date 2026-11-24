import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { founders } from '../data/site'

// Keep disabled on production until Netlify Forms detection and a test submission are verified.
const registrationOpen = false
const formName = 'webinar-anilp-2026-12-03'
const event = {
  date: 'Giovedì 3 dicembre 2026',
  time: '21:00 – 22:00 (ora italiana)',
  platform: 'Online · piattaforma da comunicare',
  price: 'Gratuita, aperta a tutti',
}

const agenda = [
  ['01', 'Perché ANILP', 'Le ragioni della nascita dell’associazione e la sua visione della libera professione.'],
  ['02', 'Le persone dietro il progetto', 'Presentazione degli organi associativi e delle competenze che contribuiscono al progetto.'],
  ['03', 'Cosa vogliamo costruire', 'Obiettivi, iniziative, servizi e prospettive per gli infermieri libero-professionisti.'],
  ['04', 'Dialogo con i partecipanti', 'Uno spazio dedicato alle domande, alle idee e al confronto.'],
]

export function Webinar() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const closed = Date.now() >= Date.parse('2026-12-03T21:00:00+01:00')
  const canRegister = registrationOpen && !closed

  async function submitRegistration(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!canRegister || status === 'sending' || status === 'success') return
    const data = new FormData(e.currentTarget)
    const body = new URLSearchParams()
    data.forEach((value, key) => { if (typeof value === 'string') body.append(key, value) })
    setStatus('sending')
    try {
      const response = await fetch('/webinar-registration.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error('Registration failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }
  const inputStyle = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-[#1e2a44]'
  return (
    <>
      <Seo title="ANILP – Il futuro della libera professione infermieristica | Webinar" description="Webinar gratuito ANILP, giovedì 3 dicembre 2026 dalle 21:00 alle 22:00. Incontra gli organi associativi e scopri il progetto nazionale." />
      <section className="relative overflow-hidden bg-[#101828] py-16 text-white sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#087f7a_0%,transparent_60%)] opacity-55" />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/25 px-4 py-1.5 text-sm font-bold text-teal-100">WEBINAR DI PRESENTAZIONE</p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl">Il futuro della libera professione infermieristica.</h1>
            <p className="mt-6 text-xl font-semibold text-teal-100">Incontra le persone. Scopri il progetto. Partecipa al cambiamento.</p>
            <p className="mt-5 max-w-xl leading-7 text-slate-200">ANILP apre il dialogo con i professionisti di tutta Italia. Conosci chi sta costruendo l’associazione, la sua visione e le iniziative per dare una voce alla libera professione infermieristica.</p>
            <a href="#registrazione" className="mt-8 inline-flex rounded-lg bg-white px-6 py-4 font-bold text-[#066b67] hover:bg-teal-50">{canRegister ? 'Iscriviti gratuitamente' : 'Scopri come partecipare'}</a>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8">
            <img src="/Logo%20ANILP%20solo%20fiamma%20no%20sfondo.png" alt="" className="mb-6 h-20 w-20 object-contain" />
            <p className="text-2xl font-black">ANILP</p>
            <p className="mt-2 text-sm text-slate-200">Associazione Nazionale Infermieri Liberi Professionisti</p>
            <dl className="mt-6 grid gap-4 border-t border-white/20 pt-6">
              <div><dt className="text-sm text-teal-100">Data</dt><dd className="font-bold">{event.date || 'In definizione'}</dd></div>
              <div><dt className="text-sm text-teal-100">Orario</dt><dd className="font-bold">{event.time || 'In definizione'}</dd></div>
              <div><dt className="text-sm text-teal-100">Durata</dt><dd className="font-bold">60 minuti</dd></div>
              <div><dt className="text-sm text-teal-100">Modalità</dt><dd className="font-bold">{event.platform || 'Online'}</dd></div>
              {event.price && <div><dt className="text-sm text-teal-100">Partecipazione</dt><dd className="font-bold">{event.price}</dd></div>}
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f9fb] py-16">
        <div className="container-page">
          <p className="font-bold text-[#066b67]">L’INCONTRO</p>
          <h2 className="mt-2 text-3xl font-black text-[#1e2a44] sm:text-4xl">Una voce nazionale, un progetto condiviso.</h2>
          <p className="mt-4 max-w-3xl text-slate-600">Un appuntamento pensato per chi esercita già la libera professione e per chi desidera conoscerla meglio. Scopri come ANILP intende promuovere rappresentanza, autonomia, tutela e collaborazione tra professionisti.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agenda.map(([n, title, description]) => <article key={n} className="rounded-xl border border-[#d9e1e8] bg-white p-6"><span className="text-xl font-black text-[#087f7a]">{n}</span><h3 className="mt-3 text-xl font-bold text-[#1e2a44]">{title}</h3><p className="mt-3 text-slate-600">{description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page">
          <p className="font-bold text-[#066b67]">LE PERSONE</p>
          <h2 className="mt-2 text-3xl font-black text-[#1e2a44] sm:text-4xl">Conosci gli organi associativi</h2>
          <p className="mt-4 text-slate-600">Il Consiglio Direttivo e il Tesoriere di ANILP. Il programma degli interventi e la presenza dei singoli componenti saranno confermati dagli organizzatori.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...founders, { name: 'Giovanni Anelli', role: 'Tesoriere – incarico tecnico' }].map(person => <article key={person.name} className="rounded-xl border border-[#d9e1e8] p-5"><h3 className="font-bold text-[#1e2a44]">{person.name}</h3><p className="mt-1 text-sm font-semibold text-[#066b67]">{person.role}</p></article>)}
          </div>
          <Link to="/organi-associativi" className="mt-6 inline-block font-bold text-[#066b67] underline">Scopri gli organi associativi</Link>
        </div>
      </section>
      <section id="registrazione" className="bg-[#e6f5f3] py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div><p className="font-bold text-[#066b67]">PARTECIPA</p><h2 className="mt-2 text-3xl font-black text-[#1e2a44] sm:text-4xl">Prendi parte al dialogo.</h2><p className="mt-5 text-slate-700">L’iscrizione al webinar è distinta dalla domanda di ammissione ad ANILP e non comporta l’adesione all’associazione.</p><p className="mt-4 text-slate-700">Per informazioni: <a className="font-semibold underline" href="mailto:eventi@anilp.it">eventi@anilp.it</a>.</p></div>
          <div className="rounded-2xl border border-[#d9e1e8] bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-black text-[#1e2a44]">Registrazione al webinar</h3>
            {status === 'success' ? <div role="status" className="mt-5 rounded-lg border border-teal-200 bg-teal-50 p-4"><h4 className="font-bold text-[#066b67]">Richiesta inviata</h4><p className="mt-2">Grazie! Le istruzioni per partecipare saranno comunicate all’indirizzo email indicato. Controlla anche la cartella spam.</p></div> : <>
              <p className="mt-3 text-slate-600">Partecipazione gratuita. Riceverai via email le istruzioni per collegarti quando saranno disponibili.</p>
              {!canRegister && <p role="status" className="mt-4 rounded-lg bg-slate-100 p-3 text-sm font-semibold">{closed ? 'Le iscrizioni sono concluse.' : 'Le iscrizioni apriranno a breve. Il modulo è in preparazione.'}</p>}
              <form className="mt-5" method="POST" name={formName} onSubmit={submitRegistration}>
                <input type="hidden" name="form-name" value={formName} />
                <div hidden><label>Lascia vuoto<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
                <fieldset disabled={!canRegister || status === 'sending'} className="grid gap-4 disabled:opacity-60">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold">Nome *<input name="nome" required autoComplete="given-name" maxLength={100} className={inputStyle} /></label>
                    <label className="text-sm font-semibold">Cognome *<input name="cognome" required autoComplete="family-name" maxLength={100} className={inputStyle} /></label>
                  </div>
                  <label className="text-sm font-semibold">Email *<input name="email" type="email" required autoComplete="email" maxLength={254} className={inputStyle} /></label>
                  <label className="text-sm font-semibold">Cellulare (facoltativo)<input name="cellulare" type="tel" autoComplete="tel" maxLength={32} className={inputStyle} /></label>
                  <label className="text-sm font-semibold">Provincia (facoltativa)<input name="provincia" autoComplete="address-level2" maxLength={100} className={inputStyle} /></label>
                  <label className="text-sm font-semibold">Situazione professionale (facoltativa)<select name="professione" className={inputStyle} defaultValue=""><option value="">Seleziona</option><option>Infermiere libero professionista</option><option>Infermiere dipendente</option><option>Infermiere con attività mista</option><option>Studente</option><option>Altro</option></select></label>
                  <label className="text-sm font-semibold">Sei già socio ANILP? (facoltativo)<select name="socio" className={inputStyle} defaultValue=""><option value="">Seleziona</option><option>Sì</option><option>No</option></select></label>
                  <div className="rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-700"><strong>Privacy del webinar.</strong> Titolare: ANILP, Via Mauro Macchi 8, Milano, info@anilp.it. I dati sono trattati per gestire l’iscrizione gratuita e comunicare le istruzioni per l’evento (art. 6.1.b GDPR); i campi facoltativi servono a comprendere il pubblico e, per il telefono, a gestire eventuali comunicazioni organizzative (art. 6.1.f). I dati sono accessibili agli incaricati ANILP e ai fornitori necessari, incluso Netlify, con possibili trasferimenti extra SEE secondo le garanzie descritte nella privacy policy. Conservazione proposta: 90 giorni dalla conclusione, salvo obblighi di legge o necessità di tutela dei diritti. Puoi esercitare i diritti GDPR e presentare reclamo al Garante. Nessuna iscrizione automatica a newsletter o ad ANILP.</div>
                  <label className="flex items-start gap-2 text-sm"><input type="checkbox" name="privacy" value="presa-visione" required className="mt-1" /><span>Ho preso visione dell’informativa privacy relativa al webinar. *</span></label>
                  <button type="submit" className="rounded-lg bg-[#087f7a] px-5 py-3.5 font-bold text-white hover:bg-[#066b67] disabled:cursor-not-allowed">{status === 'sending' ? 'Invio in corso…' : 'Conferma la partecipazione'}</button>
                </fieldset>
                {status === 'error' && <p role="alert" className="mt-4 text-sm font-semibold text-red-700">Invio non riuscito. Riprova oppure contatta eventi@anilp.it.</p>}
              </form>
            </>}
            <Link to="/privacy-policy" className="mt-5 block text-sm text-[#066b67] underline">Informativa privacy del sito</Link>
          </div>
        </div>
      </section>
    </>
  )
}
