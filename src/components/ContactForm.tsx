import { Send } from 'lucide-react'

export function ContactForm() {
  return (
    <form
      className="rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Nome e cognome
          <input
            className="rounded-md border border-slate-300 px-4 py-3 font-normal text-slate-950"
            type="text"
            name="name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Email
          <input
            className="rounded-md border border-slate-300 px-4 py-3 font-normal text-slate-950"
            type="email"
            name="email"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Messaggio
          <textarea
            className="min-h-36 rounded-md border border-slate-300 px-4 py-3 font-normal text-slate-950"
            name="message"
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-500"
        >
          Invia richiesta
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-sm leading-6 text-slate-500">
          Form frontend-only predisposto per futura integrazione con servizio email o CRM.
        </p>
      </div>
    </form>
  )
}
