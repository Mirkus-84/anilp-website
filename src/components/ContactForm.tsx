import { Send } from 'lucide-react'

export function ContactForm() {
  return (
    <form
      className="rounded-md border border-[#D9E1E8] bg-white p-6 shadow-sm shadow-slate-950/5"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-[#1F2937]">
          Nome e cognome
          <input
            className="rounded-md border border-[#D9E1E8] px-4 py-3 font-normal text-[#101828] transition focus:border-[#087F7A]"
            type="text"
            name="name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#1F2937]">
          Email
          <input
            className="rounded-md border border-[#D9E1E8] px-4 py-3 font-normal text-[#101828] transition focus:border-[#087F7A]"
            type="email"
            name="email"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#1F2937]">
          Messaggio
          <textarea
            className="min-h-36 rounded-md border border-[#D9E1E8] px-4 py-3 font-normal text-[#101828] transition focus:border-[#087F7A]"
            name="message"
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[linear-gradient(135deg,#087F7A,#0B9A91)] px-5 py-3 text-sm font-bold text-white shadow-md shadow-teal-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#066B67,#087F7A)] hover:shadow-lg"
        >
          Invia richiesta
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-sm leading-6 text-[#475569]">
          Form frontend-only predisposto per futura integrazione con servizio email o CRM.
        </p>
      </div>
    </form>
  )
}
