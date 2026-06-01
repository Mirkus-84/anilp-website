import { Link } from 'react-router-dom'

type LogoProps = {
  compact?: boolean
  prominent?: boolean
}

export function Logo({ compact = false, prominent = false }: LogoProps) {
  const src = compact
    ? '/Sfondo%20ANILP%20monogramma%20trasparente.png'
    : '/Sfondo%20ANILP%20trasparente.png'
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
            ? 'h-[260px] w-[320px] max-w-full object-contain md:h-[320px] md:w-[760px] lg:h-[360px] lg:w-[920px]'
            : compact
              ? 'h-10 w-auto md:h-12'
              : 'h-14 w-auto md:h-16'
        }`}
      />
    </Link>
  )
}
