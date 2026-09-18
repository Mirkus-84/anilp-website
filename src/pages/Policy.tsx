import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { cookieSections, policyUpdatedAt, privacySections } from '../data/policies'

type PolicyProps = {
  type: 'privacy' | 'cookie'
}

export function Policy({ type }: PolicyProps) {
  const isPrivacy = type === 'privacy'
  const sections = isPrivacy ? privacySections : cookieSections
  const title = isPrivacy ? 'Privacy Policy' : 'Cookie Policy'
  const description = isPrivacy
    ? 'Informativa sul trattamento dei dati personali: titolare, finalità, servizi utilizzati e diritti degli interessati.'
    : 'Informativa sui cookie e sugli strumenti di tracciamento del sito ANILP, basata sui servizi effettivamente utilizzati.'
  return (
    <>
      <Seo
        title={`${title} | ANILP`}
        description={description}
      />
      <PageHero
        badge="Protezione dei dati personali"
        title={title}
        text={description}
      />
      <div className="container-page grid items-start gap-10 py-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <aside className="border-b border-[#D9E1E8] pb-8 lg:sticky lg:top-28 lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto lg:border-b-0 lg:pb-0">
          <p className="text-sm text-[#475569]">Ultimo aggiornamento<br /><time dateTime="2026-09-18" className="font-semibold text-[#1E2A44]">{policyUpdatedAt}</time></p>
          <nav className="mt-6" aria-label={`Indice ${title}`}>
            <h2 className="text-base font-bold text-[#1E2A44]">In questa informativa</h2>
            <ol className="mt-3 grid gap-1">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="flex gap-2 rounded-sm py-2 text-sm leading-5 text-[#475569] transition-colors hover:text-[#066B67] hover:underline hover:underline-offset-4">
                    <span className="min-w-5 text-[#066B67]" aria-hidden="true">{index + 1}.</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="policy-content min-w-0 max-w-[75ch]">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="border-b border-[#D9E1E8] py-8 first:pt-0 last:border-b-0 last:pb-0">
              <h2 id={`${section.id}-title`} className="mb-5 text-xl font-bold leading-snug text-[#1E2A44] md:text-2xl">{index + 1}. {section.title}</h2>
              <div className="leading-7 text-[#334155]">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
