import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { associationPec, associationTaxCode, registeredOffice } from './site'

export type PolicySection = {
  id: string
  title: string
  content: ReactNode
}

export const policyUpdatedAt = '18 settembre 2026'

const controllerDetails = (
  <dl className="mt-5 grid gap-4 border-l-2 border-[#087F7A] pl-5">
    <div><dt className="font-semibold text-[#1E2A44]">Titolare del trattamento</dt><dd>ANILP - Associazione Nazionale Infermieri Liberi Professionisti</dd></div>
    <div><dt className="font-semibold text-[#1E2A44]">Sede legale</dt><dd>{registeredOffice}</dd></div>
    <div><dt className="font-semibold text-[#1E2A44]">Codice fiscale</dt><dd>{associationTaxCode}</dd></div>
    <div><dt className="font-semibold text-[#1E2A44]">Contatti per la protezione dei dati</dt><dd><a href="mailto:info@anilp.it">info@anilp.it</a><br />PEC: <a href={`mailto:${associationPec}`}>{associationPec}</a></dd></div>
  </dl>
)

export const privacySections: PolicySection[] = [
  {
    id: 'titolare',
    title: 'Titolare e ambito dell’informativa',
    content: <>
      <p>Questa informativa, resa ai sensi dell’articolo 13 del Regolamento (UE) 2016/679 (GDPR), descrive il trattamento dei dati personali connesso alla consultazione di www.anilp.it e alle comunicazioni indirizzate all’associazione tramite i contatti pubblicati sul sito.</p>
      {controllerDetails}
      <p className="mt-5">L’informativa riguarda la configurazione attuale del sito. Iscrizioni associative, eventi con registrazione, area riservata e altri servizi che comportino nuovi trattamenti saranno accompagnati da informative specifiche al momento della loro attivazione.</p>
    </>,
  },
  {
    id: 'dati-trattati',
    title: 'Quali dati vengono trattati',
    content: <>
      <p><strong>Dati tecnici di navigazione.</strong> Per rendere disponibili le pagine, l’infrastruttura di hosting riceve informazioni quali indirizzo IP, data e ora della richiesta, indirizzo della pagina richiesta, caratteristiche del browser e del dispositivo, esito della richiesta. Questi dati possono essere presenti nei registri tecnici del fornitore per il funzionamento e la sicurezza del servizio.</p>
      <p><strong>Dati comunicati volontariamente.</strong> Scrivendo a info@anilp.it, eventi@anilp.it, presidenza@anilp.it o alla PEC, vengono trattati l’indirizzo del mittente, il nome eventualmente indicato, il contenuto della comunicazione e gli eventuali allegati inviati.</p>
      <p><strong>Modulo di contatto.</strong> I campi nome, email e messaggio sono utilizzati nel browser per preparare un’email nel programma di posta dell’utente. Il sito non invia il messaggio a un server, non lo registra in un database e non salva i campi nella memoria persistente del browser. ANILP riceve i dati soltanto se l’utente invia effettivamente l’email dal proprio account.</p>
      <p><strong>Informazioni istituzionali pubblicate.</strong> Il sito riporta i nomi dei fondatori e le cariche associative per rendere conoscibile la composizione degli organi. Le copie pubbliche dei documenti costitutivi escludono i dati anagrafici privati e le firme.</p>
      <p>Invitiamo a comunicare soltanto le informazioni pertinenti alla richiesta, evitando dati sanitari, dati di pazienti o altre informazioni riservate di terzi. Il sito non richiede questi dati.</p>
    </>,
  },
  {
    id: 'finalita',
    title: 'Finalità e basi giuridiche',
    content: <>
      <ul>
        <li><strong>Consultazione e sicurezza del sito:</strong> erogazione delle pagine, gestione degli errori e prevenzione di utilizzi illeciti. La base giuridica è il legittimo interesse alla disponibilità e alla sicurezza del servizio, ai sensi dell’articolo 6, paragrafo 1, lettera f), del GDPR.</li>
        <li><strong>Riscontro alle comunicazioni:</strong> risposta alle richieste di informazioni e alle manifestazioni di interesse inviate spontaneamente. La base giuridica è il legittimo interesse dell’associazione a gestire le relazioni istituzionali e le richieste ricevute, ai sensi dell’articolo 6, paragrafo 1, lettera f).</li>
        <li><strong>Informazione sulla governance:</strong> pubblicazione delle informazioni essenziali sulle cariche associative, sulla base del legittimo interesse alla trasparenza e alla riconoscibilità dell’associazione, ai sensi dell’articolo 6, paragrafo 1, lettera f).</li>
        <li><strong>Adempimenti obbligatori:</strong> ove applicabili, gestione degli obblighi previsti dalla legge, sulla base dell’articolo 6, paragrafo 1, lettera c).</li>
      </ul>
      <p>Il sito non effettua profilazione, non attiva iscrizioni automatiche a newsletter e non utilizza decisioni esclusivamente automatizzate con effetti giuridici o analogamente significativi. Una manifestazione di interesse non costituisce domanda di ammissione o iscrizione all’associazione.</p>
    </>,
  },
  {
    id: 'conferimento',
    title: 'Natura del conferimento',
    content: <>
      <p>La consultazione delle pagine non richiede la compilazione di moduli o la creazione di un account. I dati tecnici sono necessari alla comunicazione tra il browser e il servizio di hosting.</p>
      <p>L’invio di comunicazioni è facoltativo. Un recapito valido e le informazioni necessarie a comprendere la richiesta consentono di fornire un riscontro; in loro assenza potrebbe non essere possibile rispondere. La preparazione dell’email può essere interrotta senza inviare alcun messaggio.</p>
    </>,
  },
  {
    id: 'destinatari',
    title: 'Destinatari e servizi utilizzati',
    content: <>
      <p>Le comunicazioni ricevute sono destinate alle persone incaricate dall’associazione di gestire la richiesta. Per il funzionamento del sito e della corrispondenza sono utilizzati fornitori di servizi di hosting, manutenzione tecnica, posta elettronica e PEC, nei limiti necessari alla prestazione del servizio e secondo il ruolo assunto nel trattamento.</p>
      <p>Il sito è ospitato su <strong>Netlify</strong>. Il trattamento svolto dal fornitore per conto del cliente è disciplinato dal suo <a href="https://www.netlify.com/pdf/netlify-dpa.pdf">Data Processing Agreement</a>; l’elenco dei subfornitori è consultabile nella <a href="https://www.netlify.com/legal/subprocessors/">documentazione ufficiale Netlify</a>.</p>
      <p>I dati contenuti nelle richieste private non vengono pubblicati o venduti. Possono essere comunicati alle autorità competenti quando previsto dalla legge o quando necessario per l’accertamento, l’esercizio o la difesa di un diritto.</p>
    </>,
  },
  {
    id: 'trasferimenti',
    title: 'Trasferimenti fuori dallo Spazio economico europeo',
    content: <>
      <p>L’utilizzo dell’infrastruttura globale di Netlify può comportare il trattamento di dati tecnici in Paesi esterni allo Spazio economico europeo, inclusi gli Stati Uniti. Non è quindi garantita una localizzazione esclusivamente europea di tutti i trattamenti tecnici.</p>
      <p>Il Data Processing Agreement del fornitore prevede garanzie per i trasferimenti internazionali, incluse le clausole contrattuali tipo adottate dalla Commissione europea per i trasferimenti cui esse si applicano. Le relative condizioni sono consultabili nella <a href="https://www.netlify.com/pdf/netlify-dpa.pdf">documentazione contrattuale Netlify</a>. Per informazioni sulle garanzie applicabili ai dati che ti riguardano puoi contattare ANILP.</p>
    </>,
  },
  {
    id: 'conservazione',
    title: 'Criteri di conservazione',
    content: <>
      <p>Le comunicazioni sono conservate per il tempo necessario a gestire la richiesta e il seguito richiesto dall’interessato. Una volta esaurita tale finalità, la conservazione è limitata alle informazioni necessarie per obblighi di legge o per l’accertamento, l’esercizio o la difesa di un diritto, tenendo conto dei termini applicabili al caso concreto.</p>
      <p>I dati tecnici seguono il ciclo di conservazione e cancellazione dell’infrastruttura di hosting, in funzione delle esigenze di erogazione, diagnostica e sicurezza del servizio. Il sito non dispone di un archivio autonomo di dati di navigazione e non conserva copie dei registri tecnici per finalità di marketing.</p>
      <p>I nomi e le cariche pubblicati sono mantenuti per l’informazione istituzionale sulla composizione degli organi e, quando pertinente, sulla storia dell’associazione. I dati inesatti o non più pertinenti devono essere aggiornati o rimossi. Puoi richiedere informazioni sui criteri applicati alla tua specifica comunicazione utilizzando i contatti del titolare.</p>
    </>,
  },
  {
    id: 'sicurezza-cookie',
    title: 'Sicurezza, cookie e collegamenti esterni',
    content: <>
      <p>La connessione al sito utilizza HTTPS. Il modulo di contatto non dispone di un servizio di raccolta dei messaggi lato server. La sicurezza e la conservazione di una bozza preparata nel programma di posta dipendono anche dal servizio e dal dispositivo scelti dall’utente.</p>
      <p>Nella configurazione attuale il sito non installa cookie di profilazione, strumenti pubblicitari o sistemi di analisi del comportamento. Le informazioni dettagliate sono nella <Link to="/cookie-policy">Cookie Policy</Link>.</p>
      <p>I collegamenti a siti esterni non caricano contenuti incorporati durante la consultazione delle pagine ANILP. Se scegli di seguirli, il trattamento effettuato dal servizio di destinazione è descritto nelle sue informative.</p>
    </>,
  },
  {
    id: 'diritti',
    title: 'I tuoi diritti e come esercitarli',
    content: <>
      <p>Nei casi e alle condizioni previsti dagli articoli 15-22 del GDPR, puoi chiedere:</p>
      <ul>
        <li>accesso ai dati personali e alle informazioni sul loro trattamento;</li>
        <li>rettifica dei dati inesatti e integrazione di quelli incompleti;</li>
        <li>cancellazione dei dati e limitazione del trattamento;</li>
        <li>portabilità, quando il trattamento automatizzato si basa sul consenso o su un contratto;</li>
        <li>opposizione ai trattamenti fondati sul legittimo interesse, per motivi connessi alla tua situazione particolare.</li>
      </ul>
      <p>Quando un trattamento è fondato sul consenso, puoi revocarlo senza pregiudicare la liceità del trattamento precedente. Il sito attuale non utilizza il consenso per attivare tracciatori o newsletter.</p>
      <p>Invia la richiesta a <a href="mailto:info@anilp.it?subject=Esercizio%20diritti%20privacy">info@anilp.it</a> oppure a <a href={`mailto:${associationPec}`}>{associationPec}</a>, indicando gli elementi necessari a individuare la comunicazione o i dati interessati. Se necessario, potranno essere richieste informazioni proporzionate per verificare l’identità del richiedente.</p>
      <p>Il riscontro è fornito senza ingiustificato ritardo e, di regola, entro un mese dalla ricezione. Nei casi previsti dal GDPR il termine può essere prorogato di ulteriori due mesi, con comunicazione dei motivi entro il primo mese. L’esercizio dei diritti è in linea di principio gratuito, fatte salve le eccezioni previste dalla normativa.</p>
    </>,
  },
  {
    id: 'reclamo',
    title: 'Reclamo all’autorità di controllo',
    content: <>
      <p>Se ritieni che il trattamento dei tuoi dati personali violi la normativa, puoi proporre reclamo al Garante per la protezione dei dati personali, ai sensi dell’articolo 77 del GDPR, o all’autorità di controllo competente. Resta fermo il diritto di ricorrere all’autorità giudiziaria.</p>
      <p>Le modalità e la modulistica sono disponibili nella pagina <a href="https://www.garanteprivacy.it/diritti/come-agire-per-tutelare-i-tuoi-dati-personali/reclamo">Come presentare un reclamo al Garante</a>.</p>
    </>,
  },
  {
    id: 'aggiornamenti',
    title: 'Aggiornamenti e riferimenti',
    content: <>
      <p>L’informativa sarà aggiornata in caso di modifiche ai servizi o ai trattamenti descritti. La data riportata in questa pagina identifica la versione pubblicata. Eventuali nuove raccolte di dati saranno illustrate prima della loro attivazione.</p>
      <p>Riferimenti: <a href="https://www.garanteprivacy.it/il-testo-del-regolamento">Regolamento (UE) 2016/679</a>, normativa nazionale applicabile e <a href="https://www.garanteprivacy.it/home/i-miei-diritti/diritti">informazioni del Garante sui diritti degli interessati</a>.</p>
    </>,
  },
]

export const cookieSections: PolicySection[] = [
  {
    id: 'ambito-cookie',
    title: 'Ambito e titolare',
    content: <>
      <p>Questa informativa descrive l’utilizzo di cookie e di altri strumenti di memorizzazione o tracciamento su www.anilp.it. Va letta insieme alla <Link to="/privacy-policy">Privacy Policy</Link>, che illustra il trattamento dei dati tecnici di navigazione e delle comunicazioni inviate all’associazione.</p>
      {controllerDetails}
    </>,
  },
  {
    id: 'cosa-sono',
    title: 'Che cosa sono cookie e strumenti di tracciamento',
    content: <>
      <p>I cookie sono piccoli file di testo che un sito può memorizzare nel browser e leggere durante visite successive. Possono essere utilizzati per funzioni tecniche oppure per finalità di analisi, pubblicità e profilazione. Altri strumenti, come pixel, identificatori persistenti e alcune forme di accesso alla memoria del dispositivo, possono perseguire finalità analoghe.</p>
      <p>La classificazione dipende dalla finalità effettiva dello strumento, non soltanto dal nome o dalla durata. I cookie di terze parti possono essere collegati a contenuti o servizi incorporati provenienti da domini diversi da quello visitato.</p>
    </>,
  },
  {
    id: 'configurazione',
    title: 'Strumenti presenti sul sito',
    content: <>
      <p><strong>Nella configurazione attuale non sono installati cookie né altri strumenti di tracciamento dal sito ANILP.</strong> Non sono presenti servizi di analisi delle visite, pubblicità, profilazione o contenuti di terze parti incorporati.</p>
      <ul>
        <li><strong>Cookie tecnici dell’applicazione:</strong> non utilizzati. Non è presente un login o una sessione riservata soci.</li>
        <li><strong>Cookie e strumenti di analisi:</strong> non utilizzati.</li>
        <li><strong>Cookie pubblicitari e di profilazione:</strong> non utilizzati.</li>
        <li><strong>Video, mappe e social incorporati:</strong> non presenti.</li>
        <li><strong>Memoria persistente del browser:</strong> l’applicazione non registra dati in localStorage o sessionStorage e non salva i campi del modulo di contatto.</li>
      </ul>
      <p>Le immagini e il carattere tipografico sono serviti dal dominio del sito, senza richiedere font o immagini a piattaforme esterne. Non essendoci cookie installati dall’applicazione, non sono previsti nomi, durate o destinatari di cookie da elencare.</p>
      <p>L’hosting può trattare dati tecnici necessari alla consegna delle pagine e alla sicurezza, come l’indirizzo IP. Questi trattamenti non dipendono dall’installazione di cookie e sono descritti nella <Link to="/privacy-policy#dati-trattati">Privacy Policy</Link>.</p>
    </>,
  },
  {
    id: 'consenso',
    title: 'Consenso e banner',
    content: <>
      <p>Il sito non presenta un banner di consenso perché non utilizza strumenti per i quali sia necessario raccogliere preventivamente il consenso dell’utente. La consultazione delle pagine non attiva profilazione o tracciamento pubblicitario.</p>
      <p>Se in futuro saranno introdotti strumenti non necessari al funzionamento del sito, questa informativa sarà aggiornata e tali strumenti saranno attivati soltanto dopo la raccolta del consenso, ove richiesto. Saranno rese disponibili modalità per scegliere e modificare le preferenze.</p>
    </>,
  },
  {
    id: 'browser-link',
    title: 'Browser, email e servizi esterni',
    content: <>
      <p>La cache delle pagine, la cronologia, l’autocompletamento dei campi e le bozze del programma di posta sono funzionalità del browser o dei servizi scelti dall’utente; non costituiscono sistemi di profilazione installati dal sito ANILP.</p>
      <p>Il pulsante del modulo di contatto prepara un messaggio nel programma di posta. L’email viene inviata soltanto attraverso l’azione dell’utente. I collegamenti esterni non incorporano automaticamente i servizi di destinazione nel sito: seguendoli, si applicano le informative dei relativi gestori.</p>
      <p>Puoi comunque gestire i cookie e i dati dei siti nelle impostazioni del tuo browser. Le guide ufficiali sono disponibili per <a href="https://support.google.com/chrome/answer/95647?hl=it">Google Chrome</a>, <a href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie">Mozilla Firefox</a> e <a href="https://support.apple.com/it-it/105082">Safari</a>.</p>
    </>,
  },
  {
    id: 'contatti-riferimenti',
    title: 'Contatti, aggiornamenti e riferimenti',
    content: <>
      <p>Per chiarimenti puoi scrivere a <a href="mailto:info@anilp.it">info@anilp.it</a> o alla PEC <a href={`mailto:${associationPec}`}>{associationPec}</a>. Le modalità per esercitare i diritti sui dati personali sono illustrate nella <Link to="/privacy-policy#diritti">Privacy Policy</Link>.</p>
      <p>La data riportata in questa pagina identifica la versione dell’informativa, che sarà aggiornata quando cambieranno gli strumenti utilizzati dal sito.</p>
      <p>Riferimenti: articolo 122 del Codice in materia di protezione dei dati personali, Regolamento (UE) 2016/679 e <a href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876">Linee guida del Garante su cookie e altri strumenti di tracciamento del 10 giugno 2021</a>. Sono disponibili anche le <a href="https://www.garanteprivacy.it/faq/cookie">FAQ ufficiali sui cookie</a>.</p>
    </>,
  },
]
