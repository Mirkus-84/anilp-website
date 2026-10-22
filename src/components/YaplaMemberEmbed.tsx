import { ExternalLink, MonitorSmartphone, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { yaplaMembersUrl } from '../data/site'

export function YaplaMemberEmbed() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl border border-[#D9E1E8] bg-white shadow-lg shadow-slate-900/5">
      <div className="flex flex-col gap-4 border-b border-[#D9E1E8] bg-[#F7F9FB] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-xl font-bold text-[#1E2A44]">Portale adesioni e area membri</h2>
          <p className="mt-1 text-sm leading-6 text-[#475569]">
            Servizio gestito da Yapla. Presenta la domanda oppure accedi al tuo profilo.
          </p>
        </div>
        <a
          href={yaplaMembersUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#087F7A] bg-white px-4 py-2 text-sm font-bold text-[#066B67] transition hover:bg-[#E6F5F3]"
        >
          Apri direttamente su Yapla
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      {enabled ? (
        <div>
          <iframe
            src={yaplaMembersUrl}
            title="Portale ANILP per domanda di ammissione e accesso membri su Yapla"
            className="block h-[1100px] w-full border-0 sm:h-[1000px] lg:h-[920px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="payment"
          />
          <p className="border-t border-[#D9E1E8] bg-white px-5 py-4 text-sm leading-6 text-[#475569]">
            Non riesci a visualizzare o completare il modulo qui sopra?{' '}
            <a
              href={yaplaMembersUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#066B67] underline underline-offset-2"
            >
              Aprilo direttamente su Yapla
            </a>
            , soprattutto per accesso, documenti e pagamenti.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center px-6 py-12 text-center sm:py-16">
          <MonitorSmartphone className="h-11 w-11 text-[#087F7A]" aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-bold text-[#1E2A44]">Accedi al portale ANILP</h3>
          <p className="mt-3 max-w-xl leading-7 text-[#475569]">
            Per mostrare il modulo incorporato viene caricato un contenuto esterno
            da Yapla. Puoi scegliere di aprirlo qui oppure in una scheda separata.
          </p>
          <button
            type="button"
            onClick={() => setEnabled(true)}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#087F7A] px-6 py-3 font-bold text-white transition hover:bg-[#066B67]"
          >
            Carica il portale Yapla
          </button>
          <p className="mt-6 flex max-w-xl items-start gap-2 text-left text-sm leading-6 text-[#64748B]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Il caricamento può comportare il trattamento di dati tecnici e cookie
            necessari al servizio esterno. Consulta la nostra informativa privacy
            e quella di Yapla prima di inserire i tuoi dati.
          </p>
        </div>
      )}
    </div>
  )
}
