import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'

type Photo = { src: string; alt: string; caption: string }

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([])
  const openedFromRef = useRef<number>(0)
  const isOpen = activeIndex !== null

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    const openingThumbnail = thumbnailRefs.current[openedFromRef.current]
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setActiveIndex(null)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((current) => current === null ? null : (current - 1 + photos.length) % photos.length)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((current) => current === null ? null : (current + 1) % photos.length)
      } else if (event.key === 'Tab') {
        const controls = document.querySelectorAll<HTMLButtonElement>('[data-gallery-control]')
        if (controls.length === 0) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      openingThumbnail?.focus()
    }
  }, [isOpen, photos.length])

  const currentPhoto = activeIndex === null ? null : photos[activeIndex]
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-3">
        {photos.map((photo, index) => (
          <figure key={photo.src}>
            <button type="button"
              ref={(element) => { thumbnailRefs.current[index] = element }}
              onClick={() => { openedFromRef.current = index; setActiveIndex(index) }}
              aria-label={`Ingrandisci foto ${index + 1} di ${photos.length}: ${photo.alt}`}
              aria-haspopup="dialog"
              className="group relative block w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F7A]">
              <img src={photo.src} alt={photo.alt} loading="lazy"
                className="h-72 w-full object-cover object-center transition-transform duration-200 group-hover:scale-[1.03] sm:h-80" />
              <span className="absolute bottom-3 right-3 rounded-full bg-[#061320]/80 p-2 text-white" aria-hidden="true">
                <Expand className="h-5 w-5" />
              </span>
            </button>
            <figcaption className="mt-3 text-sm leading-6 text-[#475569]">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      {currentPhoto && createPortal(
        <div role="dialog" aria-modal="true" aria-label="Galleria fotografica ANILP"
          className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#061320]/95 px-3 py-14 text-white sm:px-16">
          <button type="button" data-gallery-control ref={closeButtonRef}
            onClick={() => setActiveIndex(null)}
            aria-label="Chiudi la galleria"
            className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-3 transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" data-gallery-control
            onClick={() => setActiveIndex((current) => current === null ? null : (current - 1 + photos.length) % photos.length)}
            aria-label="Foto precedente"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2 transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-white sm:left-5 sm:p-3">
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>
          <div className="flex h-full max-h-full w-full max-w-6xl flex-col items-center justify-center gap-4 px-9 sm:px-4">
            <img src={currentPhoto.src} alt={currentPhoto.alt}
              className="max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl" />
            <div className="max-w-2xl text-center">
              <p className="text-sm font-semibold text-white/75" aria-live="polite">{(activeIndex ?? 0) + 1} / {photos.length}</p>
              <p className="mt-2 text-sm leading-6 sm:text-base">{currentPhoto.caption}</p>
            </div>
          </div>
          <button type="button" data-gallery-control
            onClick={() => setActiveIndex((current) => current === null ? null : (current + 1) % photos.length)}
            aria-label="Foto successiva"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2 transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-white sm:right-5 sm:p-3">
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
          <p className="absolute bottom-3 text-xs text-white/65">Usa le frecce per scorrere · Esc per chiudere</p>
        </div>,
        document.body,
      )}
    </>
  )
}
