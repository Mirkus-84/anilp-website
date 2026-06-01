import { ExternalLink, UserRound } from 'lucide-react'
import { Card } from './Card'

type FounderCardProps = {
  name: string
}

export function FounderCard({ name }: FounderCardProps) {
  return (
    <Card className="h-full">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[#E6F5F3] text-[#087F7A]">
          <UserRound className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-black text-[#1E2A44]">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-[#475569]">
            Scheda predisposta per foto, ruolo, breve profilo e collegamento LinkedIn.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#087F7A]">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            LinkedIn futuro
          </span>
        </div>
      </div>
    </Card>
  )
}
