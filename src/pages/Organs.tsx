import { Card } from '../components/Card'
import { CTAButton } from '../components/CTAButton'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { founders } from '../data/site'

const groups = [
  {
    title: 'Organi principali',
    items: ['Assemblea degli associati', 'Consiglio Direttivo', 'Presidente', 'Comitato Esecutivo'],
  },
  {
    title: 'Figure operative',
    items: ['Vicepresidente', 'Segretario', 'Tesoriere'],
  },
  {
    title: 'Ulteriori organi statutari',
    items: [
      'Comitato dei referenti regionali',
      'Collegio di Garanzia dei Soci Fondatori',
      'Collegio dei Probiviri (facoltativo)',
      'Collegio dei Revisori',
    ],
  },
]

export function Organs() {
  return (
    <>
      <Seo
        title="Organi associativi | ANILP"
        description="Gli organi di ANILP, i nove membri del primo Consiglio Direttivo e il Tesoriere Giovanni Anelli, nominato il 10 settembre 2026."
      />
      <PageHero
        badge="Statuto approvato"
        title="Organi associativi"
        text="L’atto costitutivo nomina il primo Consiglio Direttivo, composto da nove membri, per un mandato di quattro anni. Competenze e funzionamento degli organi sono disciplinati dallo statuto."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <Card key={group.title}>
              <h2 className="text-2xl font-black text-[#1E2A44]">{group.title}</h2>
              <ul className="mt-5 grid gap-3 text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-slate-100 pb-3 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <section className="institutional-gradient py-16">
        <div className="container-page max-w-4xl">
          <h2 className="text-3xl font-black text-[#1E2A44]">Primo Consiglio Direttivo</h2>
          <ul className="mt-6 divide-y divide-[#D9E1E8]">
            {founders.map((founder) => (
              <li key={founder.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-5">
                <span className="font-semibold text-[#1E2A44]">{founder.name}</span>
                <span className="text-[#066B67]">{founder.role}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-7 text-[#475569]">
            L’atto costitutivo individua i nove componenti del primo Consiglio Direttivo
            e attribuisce le rispettive cariche. La nomina del Tesoriere è stata
            deliberata successivamente dal Consiglio Direttivo, il 10 settembre 2026.
          </p>
          <div className="mt-10 rounded-xl border border-[#D9E1E8] border-l-4 border-l-[#087F7A] bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-[#066B67]">Tesoriere dell’associazione</p>
            <h3 className="mt-3 text-2xl font-black text-[#1E2A44]">Giovanni Anelli</h3>
            <p className="mt-2 font-semibold text-[#334155]">Dottore Commercialista e Revisore Legale</p>
            <p className="mt-4 leading-7 text-[#475569]">
              Nominato all’unanimità dal Consiglio Direttivo nella seduta del
              10 settembre 2026. Ricopre un incarico tecnico, come componente
              del Comitato Esecutivo senza diritto di voto, non essendo associato;
              può inoltre partecipare alle riunioni del Consiglio Direttivo.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#64748B]">
              La durata dell’incarico coincide con il mandato dell’attuale Consiglio Direttivo,
              come previsto dalla deliberazione di nomina.
            </p>
          </div>
          <p className="mt-4 leading-7 text-[#475569]">Gli ulteriori organi statutari operano alle condizioni e secondo le modalità previste dallo statuto. Per il Collegio di Garanzia dei Soci Fondatori sono previsti specifici requisiti, fra cui il completamento di almeno un mandato nel Consiglio Direttivo.</p>
          <div className="mt-8"><CTAButton to="/documenti" variant="secondary">Statuto e atto costitutivo</CTAButton></div>
        </div>
      </section>
    </>
  )
}
