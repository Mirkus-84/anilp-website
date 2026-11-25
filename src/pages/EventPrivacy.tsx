import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { associationPec, associationTaxCode, registeredOffice } from '../data/site'

export function EventPrivacy() {
  return (
    <>
      <Seo title="Informativa privacy eventi | ANILP" description="Informativa sul trattamento dei dati personali per la registrazione e partecipazione agli eventi ANILP." />
      <PageHero badge="Protezione dei dati personali" title="Informativa privacy eventi" text="Informativa ai sensi dell’articolo 13 del Regolamento (UE) 2016/679 (GDPR)." />
      <article className="container-page policy-content max-w-3xl py-12 leading-7 text-[#334155]">
        <p className="text-sm">Versione del 25 novembre 2026</p>
        <h2 className="mt-8 text-xl font-bold text-[#1e2a44]">1. Titolare del trattamento</h2>
        <p>ANILP – Associazione Nazionale Infermieri Liberi Professionisti, sede legale: {registeredOffice}, codice fiscale {associationTaxCode}. Contatti: <a href="mailto:info@anilp.it">info@anilp.it</a>, PEC: <a href={`mailto:${associationPec}`}>{associationPec}</a>.</p>
        <h2 className="mt-8 text-xl font-bold text-[#1e2a44]">2. Dati e finalità</h2>
        <p>Il modulo evento raccoglie, secondo i campi effettivamente configurati, nome, cognome, email, telefono, paese, provincia, situazione professionale, condizione di socio, presa visione dell’informativa ed eventuale consenso agli aggiornamenti. Possono essere trattati dati tecnici e informazioni sulla partecipazione. Non inserire dati sanitari o informazioni riservate di terzi.</p>
        <ul>
          <li>Iscrizione, accesso, assistenza e comunicazioni organizzative relative all’evento: esecuzione del servizio richiesto (art. 6, par. 1, lett. b GDPR).</li>
          <li>Analisi delle caratteristiche del pubblico e miglioramento delle iniziative, privilegiando risultati aggregati: legittimo interesse di ANILP (lett. f).</li>
          <li>Adempimenti di legge, ove applicabili: obbligo legale (lett. c).</li>
          <li>Invio via email di aggiornamenti su future iniziative, eventi e attività ANILP: consenso specifico, facoltativo e revocabile (lett. a).</li>
        </ul>
        <h2 className="mt-8 text-xl font-bold text-[#1e2a44]">3. Conferimento dei dati</h2>
        <p>Nome, cognome ed email sono necessari per gestire la registrazione. Per il webinar di presentazione, telefono, provincia, situazione professionale e condizione di socio devono essere facoltativi; il paese, se richiesto dal sistema per la configurazione geografica, è indicato nel modulo. Il mancato conferimento dei dati necessari può impedire l’iscrizione. Il rifiuto del consenso promozionale non pregiudica la partecipazione. La registrazione non equivale alla domanda di ammissione ad ANILP.</p>
        <h2 className="mt-8 text-xl font-bold text-[#1e2a44]">4. Destinatari e trasferimenti</h2>
        <p>I dati sono accessibili agli incaricati ANILP per l’organizzazione, ai fornitori di servizi necessari e, quando richiesto dalla legge, alle autorità competenti. Le iscrizioni sono gestite tramite Yapla; il fornitore dichiara che i dati degli account con sede in Europa sono archiviati in Europa (<a href="https://support.yapla.com/it-it/sicurezza-dei-dati-personali-e-del-gestore-dei-pagamenti">documentazione Yapla</a>). L’archiviazione in Europa non esclude eventuali trasferimenti connessi a fornitori e assistenza. Eventuali trasferimenti fuori dallo SEE devono rispettare il capo V GDPR; per informazioni sulle garanzie concretamente applicabili contattare ANILP. Le istruzioni di accesso indicheranno il servizio di videoconferenza e le relative informazioni prima dell’utilizzo. I dati degli iscritti non sono pubblicati.</p>
        <h2 className="mt-8 text-xl font-bold text-[#1e2a44]">5. Conservazione</h2>
        <p>I dati organizzativi sono conservati fino alla conclusione dell’evento e delle attività successive, incluse gestione delle richieste, verifica delle presenze ed eventuale rilascio di materiali o attestati, se previsti. Le informazioni non più necessarie sono cancellate o anonimizzate; restano separatamente conservati i soli dati richiesti da obblighi legali o necessari alla tutela dei diritti, per i termini applicabili. Per gli aggiornamenti, i recapiti sono utilizzati finché il consenso è valido e l’interesse rimane attuale, con riesame periodico e cessazione degli invii in caso di revoca. La prova del consenso e della revoca è conservata nei limiti necessari a dimostrare la liceità del trattamento.</p>
        <h2 className="mt-8 text-xl font-bold text-[#1e2a44]">6. Diritti dell’interessato</h2>
        <p>Puoi richiedere accesso, rettifica, cancellazione, limitazione, portabilità ove applicabile e opporti al trattamento fondato sul legittimo interesse. Puoi revocare il consenso agli aggiornamenti in ogni momento, senza pregiudicare i trattamenti precedenti alla revoca, scrivendo a <a href="mailto:info@anilp.it">info@anilp.it</a>. Puoi presentare reclamo al <a href="https://www.garanteprivacy.it/">Garante per la protezione dei dati personali</a>. Non sono previste decisioni unicamente automatizzate con effetti giuridici o analogamente significativi nell’ambito della registrazione ANILP.</p>
        <p className="mt-8"><Link to="/privacy-policy">Privacy del sito istituzionale</Link> · <Link to="/webinar">Torna al webinar</Link></p>
      </article>
    </>
  )
}
