import { Link } from 'react-router-dom'

type LogoProps = {
  prominent?: boolean
}

export function Logo({ prominent = false }: LogoProps) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="ANILP home">
      <img
        src="/Logo%20ANILP%20no%20sfondo.png"
        width={prominent ? 360 : 170}
        height={prominent ? 253 : 119}
        alt="Logo ANILP"
        className={`${prominent ? 'h-auto w-72 max-w-full md:w-96' : 'h-auto w-36 md:w-44'} object-contain`}
      />
    </Link>
  )
}
