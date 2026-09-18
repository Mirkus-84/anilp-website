import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

type PolicyProps = {
  type: 'privacy' | 'cookie'
}

export function Policy({ type }: PolicyProps) {
  const isPrivacy = type === 'privacy'
  return (
    <>
      <Seo
        title={`${isPrivacy ? 'Privacy Policy' : 'Cookie Policy'} | ANILP`}
        description={`${isPrivacy ? 'Privacy Policy' : 'Cookie Policy'} del sito ANILP: informativa in fase di completamento.`}
      />
      <PageHero
        badge="Informativa in aggiornamento"
        title={isPrivacy ? 'Privacy Policy' : 'Cookie Policy'}
        text="L’informativa è in fase di completamento per descrivere i trattamenti effettivi e gli strumenti utilizzati dal sito."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page max-w-4xl">
          <Card>
            <h2 className="text-2xl font-black text-[#1E2A44]">Informativa in fase di completamento</h2>
            <p className="mt-4 leading-8 text-[#475569]">
              Questa pagina contiene una struttura professionale provvisoria. I
              testi definitivi dovranno essere validati in base ai trattamenti
              effettivi, agli strumenti tecnici installati e agli eventuali servizi
              di terze parti utilizzati dal sito.
            </p>
            <p className="mt-4 leading-8 text-[#475569]">
              Titolare, base giuridica, finalità, tempi di conservazione, diritti
              dell’interessato e dettagli sui cookie sono oggetto di verifica
              e completamento.
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}
