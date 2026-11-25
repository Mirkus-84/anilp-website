import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { founders } from '../data/site'

// Use the exact public URL and iframe src supplied by Yapla in Pagina Web > Condivisione.
const registration: { publicUrl: string; embedUrl: string } = {
  publicUrl: 'https://anilp-associazione-nazionale-infermieri-liberi-professionisti-1.s2.yapla.com/it/event-134712',
  embedUrl: 'https://anilp-associazione-nazionale-infermieri-liberi-professionisti-1.s2.yapla.com/it/event-134712',
}
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
  const [embedLoaded, setEmbedLoaded] = useState(false)
  const [closed, setClosed] = useState(() => Date.now() >= Date.parse('2026-12-03T21:00:00+01:00'))
  useEffect(() => {
    const timer = window.setInterval(() => setClosed(Date.now() >= Date.parse('2026-12-03T21:00:00+01:00')), 30000)
    return () => window.clearInterval(timer)
  }, [])
  const canRegister = !closed && registration.publicUrl.startsWith('https://')
  const canEmbed = canRegister && registration.embedUrl.startsWith('https://')
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
            <p className="mt-3 text-slate-600">Partecipazione gratuita, aperta a tutti. Riceverai via email le istruzioni per collegarti quando saranno disponibili.</p>
            {canRegister ? <>
              <p className="mt-4 text-sm text-slate-600">Le iscrizioni sono gestite esclusivamente da Yapla. Prima dell’invio consulta l’informativa relativa all’evento sul portale. Per visualizzare il modulo incorporato, seleziona «Carica il modulo Yapla». Puoi anche aprirlo in una nuova scheda.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {canEmbed && !embedLoaded && <button type="button" onClick={() => setEmbedLoaded(true)} className="rounded-lg bg-[#087f7a] px-5 py-3 font-bold text-white hover:bg-[#066b67]">Carica il modulo Yapla</button>}
                <a href={registration.publicUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#087f7a] px-5 py-3 font-bold text-[#066b67] hover:bg-[#e6f5f3]">{canEmbed ? 'Apri il modulo in una nuova scheda' : 'Iscriviti gratuitamente su Yapla'}</a>
              </div>
            </> : <p role="status" className="mt-4 rounded-lg bg-slate-100 p-4 font-semibold text-[#1e2a44]">{closed ? 'Le iscrizioni sono concluse.' : 'Le iscrizioni apriranno a breve. Il modulo Yapla è in preparazione.'}</p>}
            <Link to="/privacy-eventi" className="mt-5 block text-sm text-[#066b67] underline">Informativa privacy degli eventi</Link>
          </div>
        </div>
        {canEmbed && embedLoaded && <div className="container-page mt-8">
          <div className="flex justify-end pb-3"><button type="button" onClick={() => setEmbedLoaded(false)} className="font-semibold text-[#066b67] underline">Chiudi il modulo</button></div>
          <iframe src={registration.embedUrl} title="Modulo Yapla di registrazione al webinar ANILP" width="950" height="750" className="mx-auto block h-[1000px] w-full max-w-[950px] rounded-xl border border-[#d9e1e8] bg-white sm:h-[900px]" referrerPolicy="strict-origin-when-cross-origin" />
        </div>}
      </section>
    </>
  )
}
