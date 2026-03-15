---
title: "Les Gestionnaires de Paquets en Qui J'ai Confiance"
description: "Comment je gÃ¨re les installations de paquets sur Debian, Arch et Fedora sans confusion."
pubDate: 'Mar 12 2026'
---

J'applique une rÃ¨gle pour la gestion de paquets sous Linux : toujours savoir quel outil est responsable d'un paquet.

## Debian et Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

Pour les logiciels de bureau, je garde Flatpak sÃ©parÃ© d'`apt` pour Ã©viter les versions mystÃ©rieuses.

## Arch et dÃ©rivÃ©s

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

Je traite les helpers AUR comme des couches de commoditÃ©, pas comme des remplaÃ§ants pour comprendre `pacman`.

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

Si vous passez d'une distro Ã  l'autre, sauvegardez votre liste d'installation essentielle dans un dÃ©pÃ´t dotfiles et mappez les noms par distro. Cela rÃ©duit considÃ©rablement le temps de configuration.

