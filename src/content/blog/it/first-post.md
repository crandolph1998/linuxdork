---
title: "Log di Linux Senza Lacrime"
description: "Un flusso di lavoro pratico per leggere l'output di journalctl senza annegare nel rumore."
pubDate: 'Mar 10 2026'
---

Quando una macchina Linux inizia a comportarsi in modo strano, i log sono il percorso piÃ¹ rapido verso la veritÃ . Il trucco sta nel filtrare il segnale dal rumore.

## Inizia con un ambito ristretto

```bash
journalctl -u ssh -n 200 --no-pager
```

Questo restituisce le ultime 200 righe per un singolo servizio ed evita di aprire un pager per impostazione predefinita.

## Aggiungi una finestra temporale

```bash
journalctl --since "30 min ago" -p warning
```

Usalo quando sai approssimativamente quando qualcosa si Ã¨ rotto.

## Segui l'output in tempo reale

```bash
journalctl -fu nginx
```

`-f` segue il flusso e `-u` mantiene l'output focalizzato su una singola unit.

Quando un comando restituisce troppo testo, restringo un asse alla volta: servizio, tempo o prioritÃ . Questo mantiene il debugging veloce e ripetibile.

