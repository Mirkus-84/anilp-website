import { FileText } from 'lucide-react'
import { Card } from './Card'
import { StatusBadge } from './StatusBadge'

type DocumentCardProps = {
  title: string
  text: string
  status: string
}

export function DocumentCard({ title, text, status }: DocumentCardProps) {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-md bg-[#E6F5F3] text-[#087F7A]">
          <FileText className="h-6 w-6" aria-hidden="true" />
        </div>
        <StatusBadge tone="gold">{status}</StatusBadge>
      </div>
      <h3 className="mt-5 text-xl font-black text-[#1E2A44]">{title}</h3>
      <p className="mt-3 leading-7 text-[#475569]">{text}</p>
    </Card>
  )
}
