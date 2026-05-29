import { ExternalLink, UserRound } from 'lucide-react'
import { Card } from './Card'

type FounderCardProps = {
  name: string
}

export function FounderCard({ name }: FounderCardProps) {
  return (
    <Card className="h-full">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-slate-100 text-slate-700">
          <UserRound className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-950">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Scheda predisposta per foto, ruolo, breve profilo e collegamento LinkedIn.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            LinkedIn futuro
          </span>
        </div>
      </div>
    </Card>
  )
}
