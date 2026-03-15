---
title: "Pakketbeheerders Waarop Ik Vertrouw"
description: "Hoe ik pakketinstallaties beheer op Debian, Arch en Fedora zonder verwarring."
pubDate: 'Mar 12 2026'
---

Ik hanteer Ã©Ã©n regel voor Linux-pakketbeheer: altijd weten welk hulpmiddel een pakket beheert.

## Debian en Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

Voor desktopsoftware houd ik Flatpak gescheiden van `apt` om mysterieuze versies te vermijden.

## Arch en afgeleiden

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

Ik behandel AUR-helpers als gemakslagen, niet als vervangers voor het begrijpen van `pacman`.

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

Als je tussen distro's springt, sla je kerninstallijst op in een dotfiles-repo en wijs namen toe per distro. Dat bespaart enorm veel tijd bij het instellen.

