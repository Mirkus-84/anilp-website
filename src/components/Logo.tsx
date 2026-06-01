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

  if (prominent) {
    return (
      <Link to="/" className="inline-flex items-center" aria-label="ANILP home">
        <span className="block h-[150px] w-[320px] max-w-full overflow-hidden md:h-[320px] md:w-[760px] lg:h-[380px] lg:w-[920px]">
          <img
            src={src}
            width={920}
            height={613}
            alt={alt}
            className="h-auto w-[320px] max-w-none -translate-y-[38px] object-contain md:w-[760px] md:-translate-y-[92px] lg:w-[920px] lg:-translate-y-[112px]"
          />
        </span>
      </Link>
    )
  }

  return (
    <Link to="/" className="inline-flex items-center" aria-label="ANILP home">
      <img
        src={src}
        width={176}
        height={124}
        alt={alt}
        className={`${compact ? 'h-10 w-auto md:h-12' : 'h-14 w-auto md:h-16'}`}
      />
    </Link>
  )
}
