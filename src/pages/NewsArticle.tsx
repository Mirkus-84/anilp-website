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
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton to="/news" variant="secondary">Tutte le notizie</CTAButton>
            {article.slug === 'costituzione-anilp' && <CTAButton to="/documenti">Consulta i documenti</CTAButton>}
          </div>
        </div>
      </article>
    </>
  )
}
