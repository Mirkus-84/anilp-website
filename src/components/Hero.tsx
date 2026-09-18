import { motion } from 'framer-motion'
import { BookOpen, Globe2, ShieldCheck } from 'lucide-react'
import { interestUrl } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'
import { StatusBadge } from './StatusBadge'

export function Hero() {
  return (
    <section className="institutional-gradient overflow-hidden border-b border-[#D9E1E8]">
      <div className="container-page py-4 md:py-5">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Logo prominent />
          <div className="mt-2">
            <StatusBadge>Associazione costituita il 9 settembre 2026</StatusBadge>
          </div>
          <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight text-[#1E2A44] md:text-5xl lg:text-6xl">
            La rappresentanza nazionale degli infermieri liberi professionisti
          </h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-[#334155] md:text-xl">
            ANILP nasce per tutelare, rappresentare e valorizzare gli infermieri
            che esercitano o intendono esercitare la libera professione in Italia.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton to={interestUrl}>
              Manifesta il tuo interesse
            </CTAButton>
            <CTAButton to="/chi-siamo" variant="secondary">
              Scopri ANILP
            </CTAButton>
          </div>
        </motion.div>

        <motion.section
          className="mx-auto mt-8 max-w-5xl border-t border-[#D9E1E8] pt-6 md:pt-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          aria-labelledby="hero-priorities-title"
        >
          <p className="text-sm font-semibold uppercase text-[#087F7A]">Verso una rete nazionale</p>
          <h2 id="hero-priorities-title" className="mt-2 text-2xl font-bold text-[#1E2A44]">Tutela, qualità, autonomia</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Rappresentanza', text: 'Rappresentanza nazionale e internazionale degli iscritti.', icon: Globe2 },
              { title: 'Formazione e supporto', text: 'Supporto formativo, informativo e organizzativo.', icon: BookOpen },
              { title: 'Qualità professionale', text: 'Qualità, deontologia e buone pratiche professionali.', icon: ShieldCheck },
            ].map(({ title, text, icon: Icon }) => (
              <li key={title} className="rounded-md border border-[#D9E1E8] border-t-[3px] border-t-[#087F7A] bg-white p-6 shadow-sm shadow-slate-950/5">
                <Icon className="mb-4 h-7 w-7 text-[#087F7A]" aria-hidden="true" />
                <h3 className="text-lg font-bold leading-snug text-[#1E2A44]">{title}</h3>
                <p className="mt-3 text-base leading-7 text-[#334155]">{text}</p>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </section>
  )
}
