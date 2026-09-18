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
export const interestEmailUrl = `mailto:info@anilp.it?subject=${encodeURIComponent('Manifestazione di interesse ANILP')}`
export const annualMembershipFee = 60
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
  { title: 'Modulistica adesione', text: 'Materiali per manifestazione di interesse e futura adesione.', status: 'in aggiornamento' },
  { title: 'Comunicati ufficiali', text: 'Archivio delle comunicazioni istituzionali ANILP.', status: 'in aggiornamento' },
]

export const news: Array<{
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  paragraphs: string[]
}> = [
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
      'Lo statuto e la copia pubblica dell’atto costitutivo sono consultabili nella sezione Documenti. Le modalità operative di adesione e il calendario delle iniziative saranno comunicati attraverso i canali istituzionali.',
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
  { title: 'Costituzione dell’associazione', date: '9 settembre 2026', text: 'Sottoscrizione dell’atto costitutivo e approvazione dello statuto.', status: 'completata' },
  { title: 'Primo Consiglio Direttivo', date: '9 settembre 2026', text: 'Nomina dei nove componenti e attribuzione delle cariche previste dall’atto costitutivo. Il primo mandato ha durata di quattro anni.', status: 'completata' },
  { title: 'Registrazione', date: '10 settembre 2026', text: 'Registrazione dell’associazione presso l’Agenzia delle Entrate.', status: 'completata' },
  { title: 'Procedure di adesione', date: 'Fase di avvio', text: 'Definizione delle modalità operative per presentare la domanda di adesione secondo lo statuto.', status: 'in definizione' },
  { title: 'Attività associative', date: 'Prossime iniziative', text: 'Programmazione delle attività e degli strumenti per gli associati, secondo le decisioni degli organi competenti.', status: 'in programmazione' },
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
      `La quota associativa è di ${annualMembershipFee} euro annui. La manifestazione di interesse non costituisce iscrizione e non comporta pagamenti; le modalità operative di adesione saranno comunicate sui canali istituzionali.`,
  },
  {
    question: 'Possono aderire anche infermieri non ancora liberi professionisti?',
    answer:
      'Sì, la manifestazione di interesse è aperta anche agli infermieri iscritti OPI interessati a conoscere o sviluppare la libera professione.',
  },
  {
    question: 'ANILP è una community o un’associazione?',
    answer:
      'ANILP è un’associazione nazionale di rappresentanza professionale, senza scopo di lucro, apartitica e aconfessionale, costituita con atto e statuto propri.',
  },
  {
    question: 'Quando partiranno le adesioni ufficiali?',
    answer:
      'Le modalità operative di adesione sono in fase di definizione e saranno comunicate sui canali istituzionali. Nel frattempo puoi scrivere a info@anilp.it per manifestare interesse: questo contatto non costituisce iscrizione né comporta pagamenti.',
  },
  {
    question: 'Come posso ricevere aggiornamenti?',
    answer:
      'Puoi scrivere a info@anilp.it e consultare la sezione News per gli aggiornamenti sulle adesioni e sulle attività associative.',
  },
]
