import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPinned, ShieldCheck } from 'lucide-react'
import { formUrl } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'
import { StatusBadge } from './StatusBadge'

export function Hero() {
  return (
    <section className="institutional-gradient overflow-hidden border-b border-[#D9E1E8]">
      <div className="container-page py-14 md:py-18">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Logo prominent />
          <div className="mt-8">
            <StatusBadge>Associazione in fase di costituzione</StatusBadge>
          </div>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight text-[#1E2A44] md:text-6xl">
            La rappresentanza nazionale degli infermieri liberi professionisti
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#334155] md:text-xl">
            ANILP nasce per tutelare, rappresentare e valorizzare gli infermieri
            che esercitano o intendono esercitare la libera professione in Italia.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton to={formUrl} external>
              Manifesta il tuo interesse
            </CTAButton>
            <CTAButton to="/chi-siamo" variant="secondary">
              Scopri ANILP
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-5xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          aria-label="Sintesi istituzionale ANILP"
        >
          <div className="rounded-md border border-[#D9E1E8] bg-white p-7 shadow-xl shadow-slate-900/8 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="accent-bar mb-5 h-1 w-20 rounded-full" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-wide text-[#087F7A]">
                  Verso una rete nazionale
                </p>
                <p className="mt-2 text-2xl font-black text-[#1E2A44]">
                  Tutela, qualità, autonomia
                </p>
              </div>
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[#E6F5F3] text-[#087F7A]">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                'Rappresentanza nazionale e internazionale degli iscritti',
                'Supporto formativo, informativo e organizzativo',
                'Delegazioni territoriali e coordinamenti regionali',
              ].map((item) => (
                <div key={item} className="rounded-md border border-[#D9E1E8] bg-[#F7F9FB] p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-[#087F7A]" aria-hidden="true" />
                  <span className="text-sm leading-6 text-[#334155]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 grid gap-3 border-t border-[#D9E1E8] pt-5 text-sm text-[#334155] sm:grid-cols-2">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#087F7A]" aria-hidden="true" />
                info@anilp.it
              </span>
              <span className="flex items-center gap-2">
                <MapPinned className="h-4 w-4 text-[#087F7A]" aria-hidden="true" />
                www.anilp.it
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
