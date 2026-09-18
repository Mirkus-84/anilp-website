export function setSeo(title: string, description: string) {
  document.title = title

  const metaDescription = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  )
  if (metaDescription) {
    metaDescription.content = description
  }

  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.content = title
  }

  const ogDescription = document.querySelector<HTMLMetaElement>(
    'meta[property="og:description"]',
  )
  if (ogDescription) {
    ogDescription.content = description
  }

  const canonicalUrl = `https://www.anilp.it${window.location.pathname}`
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (canonical) canonical.href = canonicalUrl

  const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
  if (ogUrl) ogUrl.content = canonicalUrl

  const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
  if (twitterTitle) twitterTitle.content = title

  const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
  if (twitterDescription) twitterDescription.content = description
}
