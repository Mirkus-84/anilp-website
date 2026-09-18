import { Send } from 'lucide-react'
import { useState } from 'react'

export function ContactForm() {
  const [prepared, setPrepared] = useState(false)

  return (
    <form
      className="rounded-md border border-[#D9E1E8] bg-white p-6 shadow-sm shadow-slate-950/5"
      onSubmit={(event) => {
        event.preventDefault()
        const fields = new FormData(event.currentTarget)
        const name = String(fields.get('name') ?? '')
        const email = String(fields.get('email') ?? '')
        const message = String(fields.get('message') ?? '')
        const subject = encodeURIComponent(`Richiesta informazioni ANILP - ${name}`)
        const body = encodeURIComponent(`Nome e cognome: ${name}\nEmail: ${email}\n\n${message}`)
        window.location.href = `mailto:info@anilp.it?subject=${subject}&body=${body}`
        setPrepared(true)
      }}
    >
      <div className="grid gap-5">
        <h2 className="text-2xl font-black text-[#1E2A44]">Scrivi all’associazione</h2>
        <p className="text-sm leading-6 text-[#475569]">Compila i campi per preparare un messaggio nel tuo programma di posta. L’invio avviene dal tuo account email.</p>
        <label className="grid gap-2 text-sm font-bold text-[#1F2937]">
          Nome e cognome
          <input
            className="rounded-md border border-[#D9E1E8] px-4 py-3 font-normal text-[#101828] transition focus:border-[#087F7A]"
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#1F2937]">
          Email
          <input
            className="rounded-md border border-[#D9E1E8] px-4 py-3 font-normal text-[#101828] transition focus:border-[#087F7A]"
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#1F2937]">
          Messaggio
          <textarea
            className="min-h-36 rounded-md border border-[#D9E1E8] px-4 py-3 font-normal text-[#101828] transition focus:border-[#087F7A]"
            name="message"
            required
            maxLength={3000}
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[linear-gradient(135deg,#087F7A,#066B67)] px-5 py-3 text-sm font-bold text-white shadow-md shadow-teal-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#066B67,#055754)] hover:shadow-lg"
        >
          Prepara email
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-sm leading-6 text-[#475569]" role="status">
          {prepared ? 'Il messaggio è stato preparato. Verifica e invia l’email dal tuo programma di posta; nessuna richiesta è stata inviata dal sito.' : 'Puoi anche scrivere direttamente a info@anilp.it.'}
        </p>
      </div>
    </form>
  )
}
