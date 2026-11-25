# Configurazione Yapla — webinar 3 dicembre 2026

Non utilizzare Netlify Forms. L'archivio unico delle iscrizioni è Yapla. Nessun URL pubblico deve essere inventato.

## Evento

- Titolo: ANILP – Il futuro della libera professione infermieristica
- Inizio: 03/12/2026 ore 21:00 Europe/Rome; fine: ore 22:00
- Modalità: online, piattaforma da comunicare; nessun link video fittizio
- Organizzatore: ANILP; contatto eventi@anilp.it
- Tariffa: gratuita; iscrizioni aperte ai non soci; iscrizione individuale; limite da definire in base alla piattaforma video
- Periodo iscrizioni: dalla pubblicazione fino al 03/12/2026 ore 21:00; verificare fuso orario.
- Non richiedere pagamento, codice fiscale, documenti o iscrizione associativa.
- Non pubblicare elenco partecipanti.

Descrizione: Incontra le persone. Scopri il progetto. Partecipa al cambiamento. ANILP presenta gli organi associativi, la missione, gli obiettivi e le prospettive per la libera professione infermieristica. Uno spazio di dialogo e confronto aperto a tutti. Il collegamento sarà comunicato agli iscritti. La partecipazione è gratuita e non comporta adesione all'associazione.

## Modulo partecipante
Nome, cognome, email obbligatori; provincia, situazione professionale (libero professionista / dipendente / attività mista / studente / altro), già socio ANILP (sì / no) facoltativi. Cellulare facoltativo solo se necessario per comunicazioni organizzative. Presa visione obbligatoria dell'informativa specifica eventi; nessun consenso marketing obbligatorio e nessuna iscrizione automatica a newsletter. Verificare titolare, fornitori, trasferimenti, base giuridica, diritti e conservazione con ANILP prima di aprire le iscrizioni. Proposta: 90 giorni dopo l'evento, salvo necessità documentate; approvare e applicare concretamente. Non usare l'informativa soci come sostituto di quella eventi.

## Comunicazioni

### Conferma iscrizione gratuita
Oggetto: Iscrizione confermata – Webinar ANILP del 3 dicembre

Grazie per esserti registrato al webinar di presentazione ANILP – Il futuro della libera professione infermieristica.

Ti aspettiamo giovedì 3 dicembre 2026, dalle 21:00 alle 22:00. La partecipazione è gratuita e online. Riceverai le istruzioni e il link di accesso via email prima dell'incontro.

Per informazioni: eventi@anilp.it.

Il team ANILP

### Promemoria
Configurare promemoria D-1 (2 dicembre) e, se disponibile una seconda comunicazione, D-0 (3 dicembre mattina). Yapla documenta la programmazione in giorni, non in ore. Inserire il link video reale prima dell'invio o inviarlo con comunicazione manuale a tutti gli iscritti confermati, compresi gli iscritti dell'ultimo giorno.

Oggetto: Ti aspettiamo al webinar ANILP

Il webinar di presentazione ANILP si terrà giovedì 3 dicembre dalle 21:00 alle 22:00. [Inserire il link di accesso confermato prima di attivare questo messaggio.]

A presto, il team ANILP.

## Integrazione e collaudo
1. Aprire Eventi > Eventi e verificare che non esista già un evento identico; altrimenti crearlo.
2. Impostare tariffa, processo, modulo, privacy, comunicazioni, grafica e periodo.
3. Pagina Web > Condivisione del tuo evento: copiare il link pubblico e il codice iframe ufficiale.
4. Inserire i due URL effettivi nelle proprietà publicUrl ed embedUrl in src/pages/Webinar.tsx (se l'iframe non è compatibile, lasciare embedUrl vuoto). Verificare il codice ufficiale: se richiede uno script o parametri aggiuntivi, adattare l'integrazione senza attivare tracker non necessari.
5. Verificare in anteprima mobile/desktop, navigazione privata, registrazione sintetica con indirizzo di test autorizzato, ricezione conferma, presenza nell'archivio Yapla, gestione duplicati, chiusura del periodo, cookie e assenza di pagamento. Non attivare invii automatici con link incompleto.
6. Dopo esito positivo e verifica delle informative, pubblicare il sito e controllare il percorso /webinar. Non unire questa bozza prima del collaudo.

Riferimenti: https://support.yapla.com/it-it/guida-creare-e-configurare-un-evento ; https://support.yapla.com/it-it/condividi-il-tuo-evento ; https://support.yapla.com/it-it/comunicazioni-automatiche-di-eventi-e-attivita
