import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPinned } from 'lucide-react'
import { formUrl } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'
import { StatusBadge } from './StatusBadge'

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="container-page grid min-h-[calc(100vh-76px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Logo prominent />
          <div className="mt-10">
            <StatusBadge>Associazione in fase di costituzione</StatusBadge>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
            La rappresentanza nazionale degli infermieri liberi professionisti
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            ANILP nasce per tutelare, rappresentare e valorizzare gli infermieri
            che esercitano o intendono esercitare la libera professione in Italia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton to={formUrl} external>
              Manifesta il tuo interesse
            </CTAButton>
            <CTAButton to="/chi-siamo" variant="secondary">
              Scopri il progetto
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          aria-label="Sintesi istituzionale ANILP"
        >
          <div className="border-l-4 border-teal-700 bg-slate-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-teal-700">
              Verso una rete nazionale
            </p>
            <p className="mt-2 text-2xl font-black text-slate-950">
              Tutela, qualita, autonomia
            </p>
            <div className="mt-8">
              {[
                'Rappresentanza nazionale e internazionale degli iscritti',
                'Supporto formativo, informativo e organizzativo',
                'Delegazioni territoriali e coordinamenti regionali',
              ].map((item) => (
                <div key={item} className="mb-4 flex gap-3 border-b border-slate-200 pb-4 last:border-0">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-700" aria-hidden="true" />
                info@anilp.it
              </span>
              <span className="flex items-center gap-2">
                <MapPinned className="h-4 w-4 text-teal-700" aria-hidden="true" />
                www.anilp.it
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
