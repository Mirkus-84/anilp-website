import { Link } from 'react-router-dom'

type LogoProps = {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="ANILP home">
      <span
        className={`grid h-12 w-12 place-items-center rounded-md border text-sm font-black tracking-wide ${
          light
            ? 'border-white/20 bg-white text-slate-950'
            : 'border-teal-100 bg-slate-950 text-white'
        }`}
      >
        A
      </span>
      <span className="leading-tight">
        <span
          className={`block text-xl font-black tracking-wide ${
            light ? 'text-white' : 'text-slate-950'
          }`}
        >
          ANILP
        </span>
        <span className={`block text-xs ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          Infermieri Liberi Professionisti
        </span>
      </span>
    </Link>
  )
}
