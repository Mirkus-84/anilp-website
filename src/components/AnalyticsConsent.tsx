import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const measurementId = 'G-W1CT9XRFY5'
const preferenceKey = 'anilp-analytics-choice-v1'
const lifetime = 180 * 86400000
const webinarUrl = 'https://anilp-associazione-nazionale-infermieri-liberi-professionisti-1.s2.yapla.com/it/event-134712'
type Choice = 'accepted' | 'rejected'
type TagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; 'ga-disable-G-W1CT9XRFY5'?: boolean }
const tagWindow = window as TagWindow

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(preferenceKey)
    if (!raw) return null
    const saved = JSON.parse(raw) as { choice?: string; expires?: number }
    if (typeof saved.expires !== 'number' || saved.expires <= Date.now()) return null
    return saved.choice === 'accepted' || saved.choice === 'rejected' ? saved.choice : null
  } catch { return null }
}

function cleanLocation(path: string, search: string) {
  const url = new URL(path, window.location.origin)
  const params = new URLSearchParams(search)
  const sources = ['facebook', 'instagram', 'linkedin', 'whatsapp', 'newsletter', 'anilp', 'google']
  const mediums = ['social', 'email', 'referral', 'organic', 'cpc']
  if (sources.includes(params.get('utm_source') ?? '')) url.searchParams.set('utm_source', params.get('utm_source')!)
  if (mediums.includes(params.get('utm_medium') ?? '')) url.searchParams.set('utm_medium', params.get('utm_medium')!)
  if (params.get('utm_campaign') === 'webinar_anilp_20261203') url.searchParams.set('utm_campaign', 'webinar_anilp_20261203')
  return url.href
}

function startTag() {
  tagWindow['ga-disable-G-W1CT9XRFY5'] = false
  if (tagWindow.gtag) return
  tagWindow.dataLayer = tagWindow.dataLayer || []
  tagWindow.gtag = function () { tagWindow.dataLayer!.push(arguments) }
  tagWindow.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
  tagWindow.gtag('consent', 'update', { analytics_storage: 'granted' })
  tagWindow.gtag('js', new Date())
  tagWindow.gtag('config', measurementId, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    cookie_expires: 15552000, cookie_update: false,
    page_location: cleanLocation(window.location.pathname, window.location.search),
    page_referrer: document.referrer ? new URL(document.referrer).origin : '',
  })
  const script = document.createElement('script')
  script.async = true
  script.referrerPolicy = 'strict-origin'
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId
  document.head.appendChild(script)
}

function clearAnalyticsCookies() {
  for (const name of document.cookie.split(';').map(part => part.trim().split('=')[0])) {
    if (!/^_ga(?:_|$)/.test(name)) continue
    for (const domain of ['', '; domain=anilp.it', '; domain=' + window.location.hostname]) {
      document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' + domain
    }
  }
}

export function AnalyticsConsent() {
  const [choice, setChoice] = useState<Choice | null>(readChoice)
  const [editing, setEditing] = useState(false)
  const { pathname, search } = useLocation()
  const lastPage = useRef('')
  useEffect(() => {
    if (choice !== 'accepted') return
    startTag()
    const location = cleanLocation(pathname, search)
    if (lastPage.current === location) return
    lastPage.current = location
    tagWindow.gtag?.('event', 'page_view', { page_location: location, page_title: document.title, page_referrer: document.referrer ? new URL(document.referrer).origin : '' })
  }, [choice, pathname, search])
  useEffect(() => {
    if (choice !== 'accepted') return
    const handleClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest('a') : null
      if (anchor?.href !== webinarUrl) return
      tagWindow.gtag?.('event', 'webinar_registration_click', { event_code: 'anilp_20261203', link_url: webinarUrl, page_location: cleanLocation(window.location.pathname, window.location.search) })
    }
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [choice])
  useEffect(() => {
    const open = () => setEditing(true)
    window.addEventListener('anilp-cookie-settings', open)
    return () => window.removeEventListener('anilp-cookie-settings', open)
  }, [])
  function select(next: Choice) {
    const wasAccepted = choice === 'accepted'
    let stored = false
    try {
      localStorage.setItem(preferenceKey, JSON.stringify({ choice: next, expires: Date.now() + lifetime }))
      stored = true
    } catch { /* Session-only preference if storage is unavailable. */ }
    if (next === 'rejected') {
      tagWindow['ga-disable-G-W1CT9XRFY5'] = true
      lastPage.current = ''
      clearAnalyticsCookies()
      if (wasAccepted && stored) { window.location.reload(); return }
    }
    setChoice(next)
    setEditing(false)
  }
  if (choice !== null && !editing) return null
  return (
    <aside aria-label="Preferenze cookie" className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#D9E1E8] bg-white p-4 shadow-xl sm:p-6">
      <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-bold text-[#1E2A44]">Le tue preferenze sui cookie</h2>
          <p className="mt-1 text-sm text-[#475569]">Usiamo Google Analytics solo con il tuo consenso per misurare le visite e migliorare il sito. Puoi rifiutare senza perdere alcuna funzionalità e modificare la scelta dal piè di pagina. <Link className="underline" to="/cookie-policy">Informativa cookie</Link>.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => select('rejected')} className="rounded-md border border-[#087F7A] bg-white px-4 py-3 text-sm font-bold text-[#066B67]">Rifiuta statistiche</button>
          <button type="button" onClick={() => select('accepted')} className="rounded-md border border-[#087F7A] bg-white px-4 py-3 text-sm font-bold text-[#066B67]">Accetta statistiche</button>
        </div>
      </div>
    </aside>
  )
}
