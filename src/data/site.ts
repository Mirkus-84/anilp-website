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
  MapPinned,
  Megaphone,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const formUrl = 'https://forms.gle/INSERIRE-LINK-FORM'

export const institutionalEmails = [
  { label: 'Segreteria generale', email: 'info@anilp.it' },
  { label: 'Eventi e formazione', email: 'eventi@anilp.it' },
  { label: 'Presidenza', email: 'presidenza@anilp.it' },
]

export const founders = [
  'Michele Nanocchio',
  'Giorgio Padovan',
  'Giovanni Anelli',
  'Jessly Izquierdo',
  'Mara Giunta',
  'Simone Gussoni',
  'Vito De Angelis',
  'Thomas Facci',
  'Stefano Angelo Rossi',
  'Alessia Di Stefano',
]

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Chi siamo', path: '/chi-siamo' },
  { label: 'Attività', path: '/attivita' },
  { label: 'Documenti', path: '/documenti' },
  { label: 'News', path: '/news' },
  { label: 'Delegazioni', path: '/delegazioni-territoriali' },
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
  { title: 'Delegazioni territoriali', text: 'Promozione progressiva di referenti regionali, coordinamenti e presidi territoriali.', icon: MapPinned },
  { title: 'Congressi ed eventi', text: 'Tavoli tecnici, incontri nazionali e momenti di confronto professionale.', icon: CalendarDays },
]

export const documents = [
  {
    title: 'Statuto ANILP',
    text: 'Statuto ufficiale dell’associazione consultabile in formato PDF.',
    status: 'disponibile',
    href: '/documenti/statuto-anilp.pdf',
  },
  { title: 'Atto costitutivo', text: 'Disponibile appena completata la costituzione formale.', status: 'appena disponibile' },
  { title: 'Regolamento interno', text: 'Sarà elaborato secondo lo statuto approvato.', status: 'appena disponibile' },
  { title: 'Codice etico', text: 'Documento in fase di elaborazione.', status: 'in elaborazione' },
  { title: 'Modulistica adesione', text: 'Materiali per manifestazione di interesse e futura adesione.', status: 'in aggiornamento' },
  { title: 'Comunicati ufficiali', text: 'Archivio delle comunicazioni istituzionali ANILP.', status: 'in aggiornamento' },
]

export const news = [
  {
    title: 'ANILP: verso una rappresentanza nazionale degli infermieri liberi professionisti',
    date: 'Progetto ANILP',
    excerpt: 'Il percorso pre-costitutivo punta a dare struttura, visione e rappresentanza agli infermieri che esercitano in libera professione.',
  },
  {
    title: 'Libera professione infermieristica: perché serve una voce nazionale',
    date: 'Approfondimento',
    excerpt: 'Autonomia, tutela, formazione e interlocuzione istituzionale richiedono strumenti associativi dedicati e riconoscibili.',
  },
  {
    title: 'Tutela, formazione e identità professionale: i pilastri del progetto ANILP',
    date: 'Pilastri',
    excerpt: 'La futura associazione intende costruire servizi, convenzioni, delegazioni territoriali e percorsi di aggiornamento.',
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
  'Fase pre-costitutiva',
  'Raccolta manifestazioni di interesse',
  'Definizione dello statuto',
  'Costituzione formale',
  'Apertura delle adesioni',
  'Sviluppo delle delegazioni territoriali',
  'Avvio delle attività associative',
]

export const faqs = [
  {
    question: 'ANILP è già costituita?',
    answer:
      'ANILP è in fase pre-costitutiva. Gli organi, le procedure e le adesioni ufficiali saranno definiti dopo la costituzione formale.',
  },
  {
    question: 'Chi può aderire?',
    answer:
      'Potranno aderire infermieri liberi professionisti, professionisti in forme collettive e infermieri iscritti OPI interessati alla libera professione.',
  },
  {
    question: 'La quota associativa è già definitiva?',
    answer:
      'No. La quota sarà definita dagli organi competenti. In fase di avvio è in valutazione una quota indicativa di 50 euro annui.',
  },
  {
    question: 'Possono aderire anche infermieri non ancora liberi professionisti?',
    answer:
      'Sì, la manifestazione di interesse è aperta anche agli infermieri iscritti OPI interessati a conoscere o sviluppare la libera professione.',
  },
  {
    question: 'ANILP è una community o un’associazione?',
    answer:
      'ANILP nasce come progetto associativo nazionale di rappresentanza professionale, non come semplice community informale.',
  },
  {
    question: 'Quando partiranno le adesioni ufficiali?',
    answer:
      'Le adesioni ufficiali saranno avviate dopo la costituzione formale e secondo quanto previsto dallo statuto approvato.',
  },
  {
    question: 'Come posso ricevere aggiornamenti?',
    answer:
      'Puoi compilare la manifestazione di interesse o scrivere a info@anilp.it per ricevere comunicazioni sul percorso costitutivo.',
  },
]
