import { UserRound } from 'lucide-react'
import type { Founder } from '../data/site'
import { Card } from './Card'

export function FounderCard({ name, role }: Founder) {
  return (
    <Card className="h-full">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[#E6F5F3] text-[#087F7A]">
          <UserRound className="h-7 w-7" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-black text-[#1E2A44]">{name}</h3>
          <p className="mt-2 text-sm font-bold leading-6 text-[#066B67]">{role}</p>
          <p className="mt-1 text-sm leading-6 text-[#475569]">Socio fondatore</p>
        </div>
      </div>
    </Card>
  )
}
