import { Link } from 'react-router-dom'

type LogoProps = {
  prominent?: boolean
}

export function Logo({ prominent = false }: LogoProps) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="ANILP home">
      <img
        src="/Logo%20ANILP%20no%20sfondo.png"
        width={prominent ? 340 : 176}
        height={prominent ? 239 : 124}
        alt="Logo ANILP"
        className={`${prominent ? 'h-auto w-[220px] max-w-full md:w-[320px]' : 'h-14 w-auto md:h-16'} object-contain`}
      />
    </Link>
  )
}
