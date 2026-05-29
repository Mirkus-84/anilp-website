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
        description={`${isPrivacy ? 'Privacy Policy' : 'Cookie Policy'} professionale placeholder del sito ANILP, da completare prima della pubblicazione definitiva.`}
      />
      <PageHero
        badge="Documento legale"
        title={isPrivacy ? 'Privacy Policy' : 'Cookie Policy'}
        text="Documento placeholder predisposto per revisione legale e adeguamento prima della messa online definitiva."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page max-w-4xl">
          <Card>
            <h2 className="text-2xl font-black text-slate-950">Informativa in fase di completamento</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Questa pagina contiene una struttura professionale provvisoria. I
              testi definitivi dovranno essere validati in base ai trattamenti
              effettivi, agli strumenti tecnici installati e agli eventuali servizi
              di terze parti utilizzati dal sito.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Titolare, base giuridica, finalita, tempi di conservazione, diritti
              dell’interessato e dettagli sui cookie saranno aggiornati prima del
              deploy pubblico definitivo.
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}
