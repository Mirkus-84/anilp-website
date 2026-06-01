import type { LucideIcon } from 'lucide-react'
import { Card } from './Card'

type ActivityCardProps = {
  title: string
  text: string
  icon: LucideIcon
}

export function ActivityCard({ title, text, icon: Icon }: ActivityCardProps) {
  return (
    <Card className="h-full">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-[#E6F5F3] text-[#087F7A]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-[#1E2A44]">{title}</h3>
      <p className="mt-3 leading-7 text-[#475569]">{text}</p>
    </Card>
  )
}
