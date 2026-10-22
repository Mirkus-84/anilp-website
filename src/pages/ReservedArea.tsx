import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { YaplaMemberEmbed } from '../components/YaplaMemberEmbed'

export function ReservedArea() {
  return (
    <>
      <Seo
        title="Area membri | ANILP"
        description="Accedi al portale membri ANILP su Yapla per consultare e aggiornare i tuoi dati associativi."
      />
      <PageHero
        badge="Portale associativo"
        title="Area membri ANILP"
        text="Accedi al portale Yapla per gestire il profilo e le funzionalità associate al tuo account. La registrazione al portale non costituisce, da sola, ammissione a socio."
      />
      <section className="bg-white py-12 sm:py-16">
        <div className="container-page">
          <p className="mb-7 max-w-3xl leading-7 text-[#475569]">
            Se hai già creato un account Yapla puoi accedere dal portale qui sotto.
            Per presentare una nuova domanda, consulta anche la pagina{' '}
            <Link to="/diventa-socio" className="font-semibold text-[#066B67] underline underline-offset-2">
              Diventa socio
            </Link>.
          </p>
          <YaplaMemberEmbed />
        </div>
      </section>
    </>
  )
}
