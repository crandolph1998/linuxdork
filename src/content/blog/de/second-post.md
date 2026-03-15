---
title: 'Paketverwaltung, der ich wirklich vertraue'
description: 'Wie ich Pakete unter Debian, Arch und Fedora installiere, ohne den Überblick zu verlieren.'
pubDate: 'Mar 12 2026'
---

Ich halte mich an eine Regel für die Linux-Paketverwaltung: Immer wissen, welches Tool ein Paket besitzt.

## Debian und Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

Für Desktop-Software halte ich Flatpak von `apt` getrennt, um unklare Versionen zu vermeiden.

## Arch und Derivate

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

AUR-Helfer sehe ich als Komfortschicht, nicht als Ersatz für das Verständnis von `pacman`.

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

Wer zwischen Distributionen wechselt, sollte die Kernpakete in einem Dotfiles-Repo speichern und die Namen pro Distribution zuordnen. Das spart bei der Einrichtung enorm Zeit.
