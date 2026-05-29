import { MapPinned } from 'lucide-react'

export function TerritorialMapPlaceholder() {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5">
      <div className="relative mx-auto flex aspect-[4/5] max-w-sm items-center justify-center rounded-md bg-slate-100">
        <div className="italy-map-shape h-4/5 w-3/5 bg-gradient-to-b from-teal-500 to-slate-800 shadow-xl" />
        <div className="absolute left-[30%] top-[25%] h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-200/60" />
        <div className="absolute right-[32%] top-[48%] h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-200/60" />
        <div className="absolute bottom-[20%] left-[44%] h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-200/60" />
      </div>
      <div className="mt-5 flex items-center gap-3 text-slate-700">
        <MapPinned className="h-5 w-5 text-teal-700" aria-hidden="true" />
        <span className="font-bold">Mappa Italia placeholder</span>
      </div>
    </div>
  )
}
