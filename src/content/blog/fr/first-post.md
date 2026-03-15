---
title: "Les Logs Linux Sans Larmes"
description: "Un flux de travail pratique pour lire la sortie de journalctl sans se noyer dans le bruit."
pubDate: 'Mar 10 2026'
---

Quand une machine Linux commence Ã  se comporter bizarrement, les logs sont le chemin le plus rapide vers la vÃ©ritÃ©. L'astuce est de filtrer le signal du bruit.

## Commencer avec un pÃ©rimÃ¨tre rÃ©duit

```bash
journalctl -u ssh -n 200 --no-pager
```

Cela donne les 200 derniÃ¨res lignes d'un seul service et Ã©vite d'ouvrir un pager par dÃ©faut.

## Ajouter une fenÃªtre temporelle

```bash
journalctl --since "30 min ago" -p warning
```

Utile quand vous savez approximativement quand quelque chose a cassÃ©.

## Suivre la sortie en direct

```bash
journalctl -fu nginx
```

`-f` suit le flux et `-u` garde la sortie centrÃ©e sur une seule unitÃ©.

Quand une commande retourne trop de texte, je restreins un axe Ã  la fois : service, temps ou prioritÃ©. Cela garde le dÃ©bogage rapide et reproductible.

