type SectionTitleProps = {
  eyebrow?: string
  title: string
  text?: string
  light?: boolean
}

export function SectionTitle({ eyebrow, title, text, light = false }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="accent-bar mx-auto mb-5 h-1 w-16 rounded-full" aria-hidden="true" />
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-wide ${
            light ? 'text-teal-200' : 'text-[#087F7A]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-black leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-[#1E2A44]'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg leading-8 ${light ? 'text-slate-300' : 'text-slate-700'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
