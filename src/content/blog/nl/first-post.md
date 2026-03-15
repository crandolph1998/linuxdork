---
title: "Linux-Logs Zonder Tranen"
description: "Een praktische workflow voor het lezen van journalctl-uitvoer zonder te verdrinken in ruis."
pubDate: 'Mar 10 2026'
---

Wanneer een Linux-machine zich vreemd begint te gedragen, zijn de logs het snelste pad naar de waarheid. De truc is het filteren van het signaal uit het lawaai.

## Begin met een beperkte scope

```bash
journalctl -u ssh -n 200 --no-pager
```

Dit geeft de laatste 200 regels voor Ã©Ã©n service en voorkomt standaard het openen van een pager.

## Voeg een tijdvenster toe

```bash
journalctl --since "30 min ago" -p warning
```

Gebruik dit wanneer je ongeveer weet wanneer iets kapotging.

## Volg de uitvoer live

```bash
journalctl -fu nginx
```

`-f` volgt de stroom en `-u` houdt de uitvoer gericht op Ã©Ã©n unit.

Als een commando te veel tekst oplevert, beperk ik Ã©Ã©n as tegelijk: service, tijd of prioriteit. Dat houdt het debuggen snel en herhaalbaar.

