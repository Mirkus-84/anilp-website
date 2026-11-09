import { Navigate, useParams } from 'react-router-dom'
import { CTAButton } from '../components/CTAButton'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { news } from '../data/site'

export function NewsArticle() {
  const { slug } = useParams()
  const article = news.find((item) => item.slug === slug)

  if (!article) return <Navigate to="/news" replace />

  return (
    <>
      <Seo title={`${article.title} | ANILP`} description={article.excerpt} />
      <PageHero badge={article.category} title={article.title} text={article.excerpt} />
      <article className="bg-white py-16">
        <div className="container-page max-w-3xl">
          <p className="mb-8 text-sm font-semibold text-[#066B67]">{article.date}</p>
          <div className="grid gap-6 text-lg leading-8 text-[#334155]">
            {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {article.gallery && (
            <section className="mt-12" aria-label="Galleria fotografica del convegno">
              <h2 className="mb-6 text-2xl font-black text-[#1E2A44]">Le immagini dell’evento</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {article.gallery.map((photo) => (
                  <figure key={photo.src}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="h-72 w-full rounded-xl object-cover object-center sm:h-80" />
                    <figcaption className="mt-3 text-sm leading-6 text-[#475569]">{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
              {article.photoCreditUrl && (
                <p className="mt-5 text-sm text-[#475569]">
                  Fotografie: OPI Venezia.{' '}
                  <a href={article.photoCreditUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#087F7A] hover:underline">
                    Visualizza il post originale
                  </a>
                </p>
              )}
            </section>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton to="/news" variant="secondary">Tutte le notizie</CTAButton>
            {article.slug === 'costituzione-anilp' && <CTAButton to="/documenti">Consulta i documenti</CTAButton>}
            {article.slug === 'domande-di-ammissione-anilp-aperte' && <CTAButton to="/diventa-socio">Presenta la domanda su Yapla</CTAButton>}
            {article.sourceUrl && <CTAButton to={article.sourceUrl} variant="secondary" external>Notizia ufficiale OPI Venezia</CTAButton>}
            {article.registrationUrl && <CTAButton to={article.registrationUrl} external>Modulo iscrizione all’evento</CTAButton>}
          </div>
        </div>
      </article>
    </>
  )
}
