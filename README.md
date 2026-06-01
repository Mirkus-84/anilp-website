# ANILP Website

Sito web istituzionale di ANILP - Associazione Nazionale Infermieri Liberi Professionisti.

ANILP e in fase di costituzione. Il sito comunica il progetto associativo nazionale, la manifestazione di interesse, i soci fondatori, gli organi previsti, le attivita, i documenti, le news e le aree future.

## Stack

- React + Vite
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- SEO base per pagina
- Configurazione pronta per Netlify/Vercel

## Installazione

```bash
npm install
```

## Avvio locale

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview build

```bash
npm run preview
```

## Deploy

Produzione Netlify:

- URL temporaneo: https://anilp-website.netlify.app
- Dominio configurato lato Netlify: https://www.anilp.it
- Site ID: `9b72471d-468c-4bb0-a6fe-e860069e7c31`

### Netlify

1. Eseguire `npm run build`.
2. Pubblicare la cartella `dist`.
3. Il file `netlify.toml` gestisce il fallback SPA verso `index.html`.

### Vercel

1. Importare il repository.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## Collegamento GitHub

```bash
git remote add origin https://github.com/NOME_UTENTE/anilp-website.git
git branch -M main
git push -u origin main
```

## Personalizzazioni future

- Logo ufficiale: il sito usa `public/Logo ANILP.png`. Per aggiornare il marchio, sostituire quel file mantenendo lo stesso nome oppure aggiornare il percorso in `src/components/Logo.tsx`.
- Link definitivo del form di manifestazione di interesse.
- PEC ufficiale.
- Sede legale ufficiale.
- Documenti definitivi: statuto, atto costitutivo, regolamento, codice etico.
- Foto, ruoli, bio e profili LinkedIn dei soci fondatori.
- Policy privacy/cookie validate legalmente.
- Social ufficiali.
- Convenzioni, eventi, area riservata e servizi associativi dopo la costituzione.
