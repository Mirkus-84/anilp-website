import { MapPinned } from 'lucide-react'

export function TerritorialMapPlaceholder() {
  return (
    <div className="rounded-md border border-[#D9E1E8] bg-white p-6 shadow-sm shadow-slate-950/5">
      <div className="relative mx-auto flex aspect-[4/5] max-w-sm items-center justify-center rounded-md bg-[#F7F9FB]">
        <div className="italy-map-shape h-4/5 w-3/5 bg-[linear-gradient(180deg,#087F7A,#1E2A44)] shadow-xl" />
        <div className="absolute left-[30%] top-[25%] h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-200/60" />
        <div className="absolute right-[32%] top-[48%] h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-200/60" />
        <div className="absolute bottom-[20%] left-[44%] h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-200/60" />
      </div>
      <div className="mt-5 flex items-center gap-3 text-[#334155]">
        <MapPinned className="h-5 w-5 text-[#087F7A]" aria-hidden="true" />
        <span className="font-bold">Mappa Italia placeholder</span>
      </div>
    </div>
  )
}
