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
  { label: 'Fondatori', path: '/soci-fondatori' },
  { label: 'Attivita', path: '/attivita' },
  { label: 'Documenti', path: '/documenti' },
  { label: 'News', path: '/news' },
  { label: 'Eventi', path: '/eventi-formazione' },
  { label: 'Convenzioni', path: '/convenzioni' },
  { label: 'Delegazioni', path: '/delegazioni-territoriali' },
  { label: 'Contatti', path: '/contatti' },
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
    title: 'Autonomia e identita',
    text: 'Valorizzazione dell’autonomia professionale, della qualita, della deontologia e delle buone pratiche.',
    icon: Award,
  },
  {
    title: 'Formazione permanente',
    text: 'Eventi, seminari, workshop, attivita ECM future e collaborazione con universita ed enti di formazione.',
    icon: GraduationCap,
  },
]

export const activities: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: 'Tutela professionale', text: 'Iniziative a supporto della libera professione infermieristica e dei suoi specifici bisogni.', icon: Scale },
  { title: 'Rappresentanza istituzionale', text: 'Dialogo con istituzioni, OPI, FNOPI, ENPAPI e stakeholder sanitari.', icon: Landmark },
  { title: 'Formazione', text: 'Percorsi di aggiornamento, webinar, seminari, workshop e attivita ECM future.', icon: BookOpen },
  { title: 'Supporto normativo e previdenziale', text: 'Informazione su aspetti legislativi, amministrativi, fiscali, sindacali e tributari.', icon: FileText },
  { title: 'Convenzioni', text: 'Sviluppo di servizi, strumenti e accordi utili agli infermieri liberi professionisti.', icon: Handshake },
  { title: 'Comunicazione e informazione', text: 'Aggiornamenti, comunicati ufficiali e contenuti specialistici per gli associati.', icon: Megaphone },
  { title: 'Delegazioni territoriali', text: 'Promozione progressiva di referenti regionali, coordinamenti e presidi territoriali.', icon: MapPinned },
  { title: 'Congressi ed eventi', text: 'Tavoli tecnici, incontri nazionali e momenti di confronto professionale.', icon: CalendarDays },
]

export const documents = [
  { title: 'Bozza Statuto', text: 'Documento di riferimento in fase di confronto tra i promotori.', status: 'in aggiornamento' },
  { title: 'Atto costitutivo', text: 'Disponibile appena completata la costituzione formale.', status: 'appena disponibile' },
  { title: 'Regolamento interno', text: 'Sara elaborato secondo lo statuto approvato.', status: 'appena disponibile' },
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
    title: 'Libera professione infermieristica: perche serve una voce nazionale',
    date: 'Approfondimento',
    excerpt: 'Autonomia, tutela, formazione e interlocuzione istituzionale richiedono strumenti associativi dedicati e riconoscibili.',
  },
  {
    title: 'Tutela, formazione e identita professionale: i pilastri del progetto ANILP',
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
