type SectionTitleProps = {
  eyebrow?: string
  title: string
  text?: string
  light?: boolean
}

export function SectionTitle({ eyebrow, title, text, light = false }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-wide ${
            light ? 'text-teal-200' : 'text-teal-700'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-black leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg leading-8 ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
