import { Link } from 'react-router-dom'

type LogoProps = {
  compact?: boolean
  prominent?: boolean
  symbol?: boolean
}

export function Logo({ compact = false, prominent = false, symbol = false }: LogoProps) {
  const src = symbol
    ? '/Logo%20ANILP%20solo%20fiamma%20no%20sfondo.png'
    : compact
      ? '/Sfondo%20ANILP%20monogramma%20trasparente.png'
      : '/Sfondo%20ANILP%20trasparente.png'
  const alt = symbol ? 'Simbolo ANILP' : compact ? 'Logo ANILP compatto' : 'Logo ANILP'

  return (
    <Link to="/" className="inline-flex items-center" aria-label="ANILP home">
      <img
        src={src}
        width={prominent ? 340 : 176}
        height={prominent ? 239 : 124}
        alt={alt}
        className={`${
          prominent
            ? 'h-auto w-[280px] max-w-full md:w-[500px]'
            : symbol
              ? 'h-16 w-auto'
              : compact
                ? 'h-10 w-auto md:h-12'
                : 'h-14 w-auto md:h-16'
        } object-contain`}
      />
    </Link>
  )
}
