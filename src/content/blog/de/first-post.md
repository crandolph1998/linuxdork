---
title: 'Linux-Logs ohne Tränen'
description: 'Ein praktischer Workflow zum Lesen von journalctl-Ausgaben, ohne im Rauschen zu ertrinken.'
pubDate: 'Mar 10 2026'
---

Wenn eine Linux-Maschine seltsam reagiert, sind Logs der schnellste Weg zur Wahrheit. Der Trick liegt darin, Signal von Lärm zu trennen.

## Mit engem Fokus beginnen

```bash
journalctl -u ssh -n 200 --no-pager
```

Das gibt die letzten 200 Zeilen für einen Dienst und öffnet standardmäßig keinen Pager.

## Zeitfenster setzen

```bash
journalctl --since "30 min ago" -p warning
```

Nützlich, wenn du ungefähr weißt, wann etwas schiefgelaufen ist.

## Live-Ausgabe verfolgen

```bash
journalctl -fu nginx
```

`-f` folgt dem Stream, `-u` fokussiert die Ausgabe auf eine Unit.

Wenn ein Befehl zu viel Text liefert, schränke ich eine Achse nach der anderen ein: Dienst, Zeit oder Priorität. Das hält das Debugging schnell und wiederholbar.
