import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Megaphone,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const interestUrl = '/diventa-socio'
export const interestEmailUrl = `mailto:info@anilp.it?subject=${encodeURIComponent('Informazioni sulla domanda di ammissione ANILP')}`
export const annualMembershipFee = 60
export const yaplaMembersUrl = 'https://anilp-associazione-nazionale-infermieri-liberi-professionisti-1.s2.yapla.com/it/area-membri'
export const registeredOffice = 'Via Mauro Macchi 8, Milano'
export const associationTaxCode = '98033030150'
export const associationPec = 'associazione.anilp@pec.it'
export const statuteUrl = '/documenti/statuto-anilp.pdf'
export const foundingActUrl = '/documenti/atto-costitutivo-anilp.pdf'

export type Founder = {
  name: string
  role: string
}

export const institutionalEmails = [
  { label: 'Segreteria generale', email: 'info@anilp.it' },
  { label: 'Eventi e formazione', email: 'eventi@anilp.it' },
  { label: 'Presidenza', email: 'presidenza@anilp.it' },
]

export const founders: Founder[] = [
  { name: 'Michele Nanocchio', role: 'Presidente' },
  { name: 'Mara Giunta', role: 'Vicepresidente' },
  { name: 'Jessly Maria Izquierdo Gonzales', role: 'Segretario' },
  { name: 'Vito De Angelis', role: 'Consigliere' },
  { name: 'Alessia Di Stefano', role: 'Consigliere' },
  { name: 'Thomas Manuel Facci', role: 'Consigliere' },
  { name: 'Simone Gussoni', role: 'Consigliere' },
  { name: 'Giorgio Padovan', role: 'Consigliere' },
  { name: 'Stefano Angelo Rossi', role: 'Consigliere' },
]

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Chi siamo', path: '/chi-siamo' },
  { label: 'Attività', path: '/attivita' },
  { label: 'Documenti', path: '/documenti' },
  { label: 'News', path: '/news' },
  { label: 'Diventa socio', path: '/diventa-socio' },
  { label: 'Contatti', path: '/contatti' },
]

export const secondaryNavItems = [
  { label: 'Soci fondatori', path: '/soci-fondatori' },
  { label: 'Organi associativi', path: '/organi-associativi' },
  { label: 'Percorso costitutivo', path: '/percorso-costitutivo' },
  { label: 'Trasparenza', path: '/trasparenza' },
  { label: 'Eventi e formazione', path: '/eventi-formazione' },
  { label: 'Convenzioni', path: '/convenzioni' },
  { label: 'Area riservata', path: '/area-riservata' },
]

export const associationNavItems = [navItems[1], ...secondaryNavItems.slice(0, 4)]

export const pillars: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: 'Tutela professionale',
    text: 'Difesa della libera professione infermieristica e supporto agli iscritti nei temi normativi, organizzativi e previdenziali.',
    icon: ShieldCheck,
  },
  {
    title: 'Rappresentanza nazionale',
    text: 'Una voce autorevole nei confronti di istituzioni, ordini professionali, enti pubblici e interlocutori privati.',
    icon: Landmark,
  },
  {
    title: 'Autonomia e identità',
    text: 'Valorizzazione dell’autonomia professionale, della qualità, della deontologia e delle buone pratiche.',
    icon: Award,
  },
  {
    title: 'Formazione permanente',
    text: 'Eventi, seminari, workshop, attività ECM future e collaborazione con università ed enti di formazione.',
    icon: GraduationCap,
  },
]

export const activities: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: 'Tutela professionale', text: 'Iniziative a supporto della libera professione infermieristica e dei suoi specifici bisogni.', icon: Scale },
  { title: 'Rappresentanza istituzionale', text: 'Dialogo con istituzioni, OPI, FNOPI, ENPAPI e stakeholder sanitari.', icon: Landmark },
  { title: 'Formazione', text: 'Percorsi di aggiornamento, webinar, seminari, workshop e attività ECM future.', icon: BookOpen },
  { title: 'Supporto normativo e previdenziale', text: 'Informazione su aspetti legislativi, amministrativi, fiscali, sindacali e tributari.', icon: FileText },
  { title: 'Convenzioni', text: 'Sviluppo di servizi, strumenti e accordi utili agli infermieri liberi professionisti.', icon: Handshake },
  { title: 'Comunicazione e informazione', text: 'Aggiornamenti, comunicati ufficiali e contenuti specialistici per gli associati.', icon: Megaphone },
  { title: 'Congressi ed eventi', text: 'Tavoli tecnici, incontri nazionali e momenti di confronto professionale.', icon: CalendarDays },
]

export const documents = [
  {
    title: 'Statuto ANILP',
    text: 'Copia digitale dello statuto per la consultazione pubblica, senza firme e timbri.',
    status: 'disponibile',
    href: statuteUrl,
  },
  { title: 'Atto costitutivo', text: 'Atto di costituzione dell’associazione. Copia per la consultazione pubblica con dati anagrafici privati e firme oscurati.', status: 'disponibile', href: foundingActUrl },
  { title: 'Regolamento interno', text: 'Sarà elaborato secondo lo statuto approvato.', status: 'appena disponibile' },
  { title: 'Codice etico', text: 'Documento in fase di elaborazione.', status: 'in elaborazione' },
  { title: 'Domanda di ammissione online', text: 'È possibile compilare la domanda tramite il portale Yapla. In questa fase il pagamento della quota di 60 euro è differito, secondo le indicazioni della Segreteria.', status: 'disponibile', href: '/diventa-socio' },
  { title: 'Comunicati ufficiali', text: 'Archivio delle comunicazioni istituzionali ANILP.', status: 'in aggiornamento' },
]

export const news: Array<{
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  paragraphs: string[]
  sourceUrl?: string
  registrationUrl?: string
}> = [
  {
    slug: 'presentazione-ufficiale-anilp-venezia-2026',
    title: 'ANILP si presenta ufficialmente all’evento OPI Venezia del 29 ottobre',
    date: '22 ottobre 2026',
    category: 'Evento istituzionale',
    excerpt: 'Appuntamento giovedì 29 ottobre all’Auditorium M9 di Mestre per “Libera Professione Infermieristica Senza Confini”: ANILP sarà presentata ufficialmente in occasione dell’incontro promosso da OPI Venezia.',
    paragraphs: [
      'ANILP sarà presentata ufficialmente il 29 ottobre 2026, in occasione dell’evento “Libera Professione Infermieristica Senza Confini” promosso dall’Ordine delle Professioni Infermieristiche di Venezia con il patrocinio FNOPI.',
      'L’appuntamento si svolgerà dalle 8:30 alle 14:00 all’Auditorium M9, in via Giovanni Pascoli 11 a Mestre (Venezia). L’iniziativa è dedicata agli strumenti professionali, normativi, comunicativi e fiscali della libera professione infermieristica.',
      'Tra gli interventi annunciati da OPI Venezia figurano Michele Nanocchio sulla pubblicità e visibilità in sanità, Mara Giunta sul giusto compenso, Vito De Angelis sul rapporto di fiducia con il paziente, Stefano Rossi sulla scelta tra studio e ambulatorio infermieristico e Giovanni Anelli sugli aspetti fiscali e previdenziali. È previsto anche un intervento di Luigi Pais dei Mori sul ruolo strategico della libera professione.',
      'L’evento è gratuito, rivolto a infermieri e studenti in Infermieristica e accreditato per 2,10 crediti ECM. OPI Venezia indica un massimo di 180 partecipanti. Per programma, condizioni di accesso e iscrizione fare riferimento ai link ufficiali dell’Ordine.',
      'La partecipazione a questo appuntamento rappresenta per ANILP l’occasione per presentare pubblicamente la propria identità associativa, le finalità di rappresentanza e il percorso di adesione ora disponibile tramite Yapla.',
    ],
    sourceUrl: 'https://www.opivenezia.it/notizie/tutte-le-notizie/656-opi-venezia-formazione-al-via-levento-libera-professione-infermieristica-senza-confini',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3CVEtXSWr3FZG-bqcdFyLuWed61_RjIVVZlHQ82EIbwBs1A/viewform',
  },
  {
    slug: 'domande-di-ammissione-anilp-aperte',
    title: 'Aperte le domande di ammissione ad ANILP tramite Yapla',
    date: '22 ottobre 2026',
    category: 'Vita associativa',
    excerpt: 'È possibile presentare online la domanda di ammissione: quota ordinaria di 60 euro, per ora con pagamento differito tramite modalità tracciabili comunicate dalla Segreteria.',
    paragraphs: [
      'ANILP ha attivato su Yapla il modulo digitale per presentare la domanda di ammissione a Socio Ordinario. È possibile compilare i dati richiesti e trasmettere la documentazione prevista senza versare immediatamente la quota.',
      'La quota ordinaria è pari a 60 euro. In questa fase la modalità disponibile è il pagamento differito: la Segreteria comunicherà successivamente le istruzioni per il bonifico o per altre modalità tracciabili autorizzate. Non si tratta di un’adesione gratuita.',
      'La presentazione della domanda non attribuisce automaticamente la qualità di socio. L’ammissione resta subordinata alla verifica dei requisiti e alla deliberazione del Consiglio Direttivo; l’iscrizione si perfeziona dopo la delibera favorevole e la verifica del versamento. Se una domanda non viene accolta, l’eventuale importo già versato è rimborsato integralmente.',
      'Il pagamento direttamente online tramite Yapla sarà reso disponibile in una fase successiva, non appena completata la relativa configurazione. Nel frattempo, chi desidera aderire può già presentare la domanda dalla pagina “Diventa socio”.',
    ],
  },
  {
    slug: 'costituzione-anilp',
    title: 'ANILP è ufficialmente costituita',
    date: '10 settembre 2026',
    category: 'Aggiornamento istituzionale',
    excerpt: 'Costituita il 9 settembre 2026 e registrata presso l’Agenzia delle Entrate il 10 settembre, ANILP avvia il proprio percorso associativo nazionale.',
    paragraphs: [
      'L’Associazione Nazionale Infermieri Liberi Professionisti è stata ufficialmente costituita il 9 settembre 2026. La registrazione presso l’Agenzia delle Entrate è avvenuta il giorno successivo, 10 settembre 2026.',
      'L’associazione, senza scopo di lucro, ha sede legale in Via Mauro Macchi 8 a Milano. Lo statuto individua le finalità di tutela, rappresentanza e valorizzazione della libera professione infermieristica.',
      'L’atto costitutivo nomina il primo Consiglio Direttivo, composto da nove membri, per un mandato di quattro anni. Michele Nanocchio assume la carica di Presidente, Mara Giunta quella di Vicepresidente e Jessly Maria Izquierdo Gonzales quella di Segretario.',
      'Lo statuto e la copia pubblica dell’atto costitutivo sono consultabili nella sezione Documenti. Le domande di ammissione possono ora essere presentate online tramite il portale Yapla. La modalità di pagamento disponibile è attualmente differita; la Segreteria comunicherà successivamente le istruzioni per versare la quota associativa.',
    ],
  },
  {
    slug: 'voce-nazionale-libera-professione',
    title: 'Libera professione infermieristica: perché serve una voce nazionale',
    date: 'Settembre 2026',
    category: 'Approfondimento',
    excerpt: 'Autonomia, tutela, formazione e interlocuzione istituzionale richiedono strumenti associativi dedicati e riconoscibili.',
    paragraphs: [
      'La libera professione infermieristica comprende percorsi individuali e forme collettive di esercizio. In questa pluralità, una rappresentanza nazionale può raccogliere esigenze comuni e promuovere un confronto organizzato con istituzioni e interlocutori professionali.',
      'ANILP pone al centro l’autonomia professionale, la deontologia e la qualità delle prestazioni. Lo statuto prevede supporto formativo, informativo e organizzativo agli associati e la diffusione di buone pratiche.',
      'L’associazione intende sviluppare iniziative professionali, culturali e formative, insieme a strumenti utili per affrontare gli aspetti normativi, amministrativi e tributari della libera professione. Le attività saranno definite dagli organi associativi e comunicate sul sito.',
    ],
  },
  {
    slug: 'pilastri-associativi',
    title: 'Tutela, formazione e identità professionale: i pilastri di ANILP',
    date: 'Settembre 2026',
    category: 'Vita associativa',
    excerpt: 'Le finalità statutarie orientano la costruzione di servizi, convenzioni e percorsi di aggiornamento professionale.',
    paragraphs: [
      'Tutela della libera professione, rappresentanza nazionale e internazionale e valorizzazione dell’autonomia sono le direttrici dell’azione associativa di ANILP.',
      'La formazione permanente e il confronto professionale sono parte delle finalità statutarie. Sono previsti convegni, seminari, workshop e corsi, anche accreditati ECM quando ne ricorrano le condizioni, e collaborazioni con università, enti di formazione e ordini professionali.',
      'Servizi e convenzioni saranno valutati secondo criteri di trasparenza, utilità per gli associati e coerenza con le finalità dell’associazione. La loro disponibilità sarà comunicata solo dopo la relativa attivazione.',
    ],
  },
]

export const futureServices = [
  'Consulenza legale',
  'Consulenza fiscale',
  'Assicurazione RC professionale',
  'Formazione',
  'Materiali sanitari',
  'Software gestionali',
  'Servizi digitali',
]

export const stakeholderIcons = [Users, BriefcaseBusiness, Globe2, Network]

export const constitutionSteps = [
  { title: 'Costituzione e primo Consiglio Direttivo', date: '9 settembre 2026', text: 'Sottoscrizione dell’atto costitutivo, approvazione dello Statuto e nomina dei nove membri del primo Consiglio Direttivo.', status: 'completata' },
  { title: 'Registrazione ufficiale', date: '10 settembre 2026', text: 'Registrazione di ANILP presso l’Agenzia delle Entrate e avvio degli adempimenti istituzionali.', status: 'completata' },
  { title: 'Nomina del Tesoriere e quota associativa', date: '10 settembre 2026', text: 'Il Consiglio Direttivo nomina Giovanni Anelli Tesoriere e delibera la quota ordinaria di 60 euro.', status: 'completata' },
  { title: 'Avvio delle procedure di adesione', date: '29 settembre 2026', text: 'Approvazione della bozza della procedura di iscrizione e affidamento dell’attività operativa alle consigliere incaricate.', status: 'completata' },
  { title: 'Domande di ammissione online', date: 'Ottobre 2026', text: 'Aperta la raccolta delle domande tramite Yapla, inizialmente con pagamento differito della quota. L’ammissione rimane subordinata alla delibera del Consiglio Direttivo.', status: 'completata' },
  { title: 'Presentazione ufficiale a Mestre', date: '29 ottobre 2026', text: 'ANILP sarà presentata in occasione dell’evento “Libera Professione Infermieristica Senza Confini”, promosso da OPI Venezia all’Auditorium M9.', status: 'in programmazione' },
  { title: 'Pagamento online delle quote', date: 'Prossima attivazione', text: 'È prevista l’attivazione del pagamento direttamente online tramite Yapla; nel frattempo la Segreteria comunicherà le modalità tracciabili di versamento.', status: 'in programmazione' },
]

export const faqs = [
  {
    question: 'ANILP è già costituita?',
    answer:
      'Sì. ANILP è stata costituita il 9 settembre 2026 e registrata presso l’Agenzia delle Entrate il 10 settembre 2026. L’associazione è nella fase di avvio delle attività.',
  },
  {
    question: 'Chi può aderire?',
    answer:
      'Lo statuto ammette infermieri iscritti a un OPI, sia liberi professionisti individuali o in forma collettiva, sia non liberi professionisti. Prevede inoltre specifiche condizioni per infermieri con titolo estero autorizzati all’esercizio temporaneo in Italia. L’ammissione è deliberata dal Consiglio Direttivo su domanda scritta.',
  },
  {
    question: 'Qual è la quota associativa annuale?',
    answer:
      `La quota ordinaria è di ${annualMembershipFee} euro. La domanda può essere già presentata tramite Yapla senza pagamento immediato: la Segreteria comunicherà le modalità tracciabili di versamento. Il pagamento direttamente online arriverà in una fase successiva. La presentazione della domanda non comporta automaticamente l’ammissione a socio.`,
  },
  {
    question: 'Possono aderire anche infermieri non ancora liberi professionisti?',
    answer:
      'Sì. Possono presentare domanda anche gli infermieri iscritti OPI interessati a conoscere o sviluppare la libera professione.',
  },
  {
    question: 'ANILP è una community o un’associazione?',
    answer:
      'ANILP è un’associazione nazionale di rappresentanza professionale, senza scopo di lucro, apartitica e aconfessionale, costituita con atto e statuto propri.',
  },
  {
    question: 'Come si presenta la domanda di ammissione?',
    answer:
      'Le domande sono aperte: compila il modulo Yapla dalla pagina Diventa socio. In questa fase non è richiesto il pagamento online immediato; le istruzioni per il versamento tracciabile arriveranno dalla Segreteria. L’ammissione è deliberata dal Consiglio Direttivo e non è automatica.',
  },
  {
    question: 'Come posso ricevere aggiornamenti?',
    answer:
      'Puoi scrivere a info@anilp.it e consultare la sezione News per gli aggiornamenti sulle adesioni e sulle attività associative.',
  },
]
