import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

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
    title: 'Organi eventuali/futuri',
    items: [
      'Comitato dei referenti regionali',
      'Collegio di Garanzia / Probiviri',
      'Collegio dei Revisori',
      'Delegazioni territoriali',
      'Coordinamenti regionali',
    ],
  },
]

export function Organs() {
  return (
    <>
      <Seo
        title="Organi associativi | ANILP"
        description="Struttura degli organi associativi previsti dal progetto ANILP, da definire formalmente dopo la costituzione."
      />
      <PageHero
        badge="Statuto in approvazione"
        title="Organi associativi"
        text="Gli organi saranno formalmente nominati secondo quanto previsto dallo statuto approvato in sede di costituzione."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <Card key={group.title}>
              <h2 className="text-2xl font-black text-slate-950">{group.title}</h2>
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
    </>
  )
}
