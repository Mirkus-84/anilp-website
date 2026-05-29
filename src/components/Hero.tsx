import { motion } from 'framer-motion'
import { Building2, CheckCircle2, Mail, MapPinned } from 'lucide-react'
import { formUrl } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'
import { StatusBadge } from './StatusBadge'

export function Hero() {
  return (
    <section className="grid-pattern overflow-hidden bg-slate-950 text-white">
      <div className="container-page grid min-h-[calc(100vh-76px)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Logo light />
          <div className="mt-10">
            <StatusBadge tone="dark">Associazione in fase di costituzione</StatusBadge>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            La rappresentanza nazionale degli infermieri liberi professionisti
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            ANILP nasce per tutelare, rappresentare e valorizzare gli infermieri
            che esercitano o intendono esercitare la libera professione in Italia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton to={formUrl} external variant="light">
              Manifesta il tuo interesse
            </CTAButton>
            <CTAButton to="/chi-siamo" variant="secondary">
              Scopri il progetto
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          aria-label="Sintesi istituzionale ANILP"
        >
          <div className="rounded-md border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-md bg-slate-900/80 p-6">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-teal-200">
                    Verso una rete nazionale
                  </p>
                  <p className="mt-2 text-2xl font-black">Tutela, qualita, autonomia</p>
                </div>
                <Building2 className="h-10 w-10 text-teal-300" aria-hidden="true" />
              </div>
              {[
                'Rappresentanza nazionale e internazionale degli iscritti',
                'Supporto formativo, informativo e organizzativo',
                'Delegazioni territoriali e coordinamenti regionali',
              ].map((item) => (
                <div key={item} className="mb-4 flex gap-3 rounded-md bg-white/7 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-300" aria-hidden="true" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
              <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  info@anilp.it
                </span>
                <span className="flex items-center gap-2">
                  <MapPinned className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  www.anilp.it
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
