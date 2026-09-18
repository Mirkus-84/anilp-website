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
        description="Gli organi statutari di ANILP e i nove membri del primo Consiglio Direttivo, nominato il 9 settembre 2026."
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
          <p className="mt-6 leading-7 text-[#475569]">L’atto costitutivo attribuisce le cariche di Presidente, Vicepresidente, Segretario e Consigliere. Non indica una nomina del Tesoriere, che compete al Consiglio Direttivo secondo lo statuto.</p>
          <p className="mt-4 leading-7 text-[#475569]">Gli ulteriori organi statutari operano alle condizioni e secondo le modalità previste dallo statuto. Per il Collegio di Garanzia dei Soci Fondatori sono previsti specifici requisiti, fra cui il completamento di almeno un mandato nel Consiglio Direttivo.</p>
          <div className="mt-8"><CTAButton to="/documenti" variant="secondary">Statuto e atto costitutivo</CTAButton></div>
        </div>
      </section>
    </>
  )
}
