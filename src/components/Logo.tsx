import { Link } from 'react-router-dom'

type LogoProps = {
  compact?: boolean
  prominent?: boolean
}

export function Logo({ compact = false, prominent = false }: LogoProps) {
  const src = compact ? '/Logo%20ANILP%20no%20scritta.png' : '/Logo%20ANILP%20no%20sfondo.png'
  const alt = compact ? 'Logo ANILP compatto' : 'Logo ANILP'

  return (
    <Link to="/" className="inline-flex items-center" aria-label="ANILP home">
      <img
        src={src}
        width={prominent ? 340 : 176}
        height={prominent ? 239 : 124}
        alt={alt}
        className={`${
          prominent
            ? 'h-auto w-[220px] max-w-full md:w-[320px]'
            : compact
              ? 'h-10 w-auto md:h-12'
              : 'h-14 w-auto md:h-16'
        } object-contain`}
      />
    </Link>
  )
}
