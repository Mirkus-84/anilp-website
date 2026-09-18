# ANILP Website

Sito web istituzionale di ANILP - Associazione Nazionale Infermieri Liberi Professionisti.

ANILP è stata costituita il 9 settembre 2026 e registrata presso l’Agenzia delle Entrate il 10 settembre 2026. Il sito presenta finalità, fondatori e cariche, documenti approvati e aggiornamenti istituzionali.

Sede legale: Via Mauro Macchi 8, Milano. Codice fiscale: `98033030150`. PEC: `associazione.anilp@pec.it`.

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

- Loghi ufficiali: `public/Sfondo ANILP trasparente.png` per la home e `public/Sfondo ANILP monogramma trasparente.png` per header e footer. Percorsi in `src/components/Logo.tsx`.
- Link definitivo del modulo: le CTA portano oggi a `/diventa-socio`, con contatto via email. Non sono simulate iscrizioni o richieste inviate dal sito.
- Regolamenti, codice etico e modulistica dopo l’approvazione.
- Foto, biografie e profili LinkedIn dei soci fondatori, se autorizzati.
- Verifica organizzativa e legale delle informative in relazione ai processi dell’associazione e ai contratti con i fornitori.
- Social ufficiali.
- Calendario eventi, convenzioni approvate e area riservata quando effettivamente disponibili.

## Documenti pubblici

`public/documenti/statuto-anilp.pdf` contiene lo statuto approvato, estratto dalle pagine 3-22 del documento registrato. `public/documenti/atto-costitutivo-anilp.pdf` è una copia pubblica delle prime due pagine con dati anagrafici privati e firme oscurati. Il documento originale non è incluso nel repository.

Per rigenerarli dallo stesso originale (richiede Python e PyMuPDF):

```bash
python -m pip install pymupdf
python scripts/prepare-public-documents.py "PERCORSO/ANILP - Atto Costitutivo - Statuto.pdf"
```

Verificare visivamente entrambe le copie prima della pubblicazione.

## Anteprima dei link

Immagine: `public/anilp-social-preview-2026.png`, creata con lo strumento integrato ImageGen. Brief: logo ufficiale ANILP, fondo bianco, navy e teal, testo «Rappresentanza e tutela della libera professione infermieristica» e `www.anilp.it`, senza effetti commerciali.

I metadati Open Graph e Twitter sono in `index.html`, leggibili anche senza JavaScript. Dopo un aggiornamento, le piattaforme di condivisione possono mantenere una precedente anteprima in cache.

## Delegazioni

La pagina è temporaneamente nascosta: nessun collegamento nel menu o nella home. Il vecchio indirizzo reindirizza a `/chi-siamo` sia su Netlify sia nella navigazione React. Il componente resta disponibile per una futura riattivazione.

## Tipografia e navigazione

Inter Variable 4.1 è caricato localmente da `public/fonts/InterVariable.woff2`, senza richieste a servizi di font esterni. Licenza SIL Open Font License in `public/fonts/OFL.txt`; fonte ufficiale: https://rsms.me/inter/.

Il menu Associazione raccoglie Chi siamo, Soci fondatori, Organi associativi, Percorso costitutivo e Trasparenza. Le voci sono definite in `src/data/site.ts`. Il sottomenu desktop e il gruppo mobile utilizzano lo stesso componente accessibile `AssociationMenu`.

## Privacy e cookie

I testi sono in `src/data/policies.tsx`, con indice e data di aggiornamento in `src/pages/Policy.tsx`. Descrivono la configurazione verificata il 18 settembre 2026: sito statico su Netlify, nessun cookie o tracciatore, nessuna richiesta a font o contenuti incorporati esterni, nessun archivio dei messaggi. Il modulo prepara un URL `mailto:`; l’invio effettivo avviene dal programma di posta dell’utente.

Riferimenti primari: [GDPR](https://www.garanteprivacy.it/il-testo-del-regolamento), [FAQ cookie del Garante](https://www.garanteprivacy.it/faq/cookie), [Data Processing Agreement Netlify](https://www.netlify.com/pdf/netlify-dpa.pdf).

Prima di aggiungere moduli con invio lato server, iscrizioni, newsletter, analytics, video, mappe incorporate o area soci, aggiornare le informative e verificare basi giuridiche, conservazione, fornitori e trasferimenti. Gli strumenti non necessari devono rimanere disattivati prima del consenso, ove richiesto. La configurazione attuale non richiede un banner per tracciatori assenti.

Il titolare deve verificare e documentare che gestione delle email, accessi autorizzati, cancellazione dei messaggi e contratti con hosting, posta e PEC siano coerenti con l’informativa. I tempi effettivi dei registri tecnici dipendono dalle condizioni del servizio di hosting: non sono stati attribuiti periodi arbitrari. L’attivazione delle adesioni richiederà un’informativa specifica.
